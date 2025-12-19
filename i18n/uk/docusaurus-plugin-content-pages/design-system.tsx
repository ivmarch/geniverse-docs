import React, { useState, useRef, useEffect } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from '@site/src/pages/design-system.module.css';

// Design tokens
const tokens = {
  colors: {
    bg: '#0B0D0C',
    surface: '#141716',
    accent: '#34E1A1',
    text: '#E8F9F0',
    textSecondary: '#B8D4C5',
    success: '#34E1A1',
    warning: '#FFB84D',
    error: '#FF6B6B',
    info: '#4DABF7',
    border: '#1F2321',
    hover: 'rgba(52, 225, 161, 0.1)',
    active: 'rgba(52, 225, 161, 0.15)',
    overlay: 'rgba(11, 13, 12, 0.9)',
  },
  typography: {
    headings: 'Garet',
    body: 'Inter',
    mono: 'JetBrains Mono',
    scale: {
      h1: { size: '2.5rem', lineHeight: '3rem' },
      h2: { size: '2rem', lineHeight: '2.5rem' },
      h3: { size: '1.5rem', lineHeight: '2rem' },
      h4: { size: '1.25rem', lineHeight: '1.75rem' },
      bodyLg: { size: '1.125rem', lineHeight: '1.75rem' },
      body: { size: '1rem', lineHeight: '1.5rem' },
      bodySm: { size: '0.875rem', lineHeight: '1.25rem' },
      caption: { size: '0.75rem', lineHeight: '1rem' },
    },
    weights: [300, 400, 500, 600, 700],
  },
  spacing: [4, 8, 16, 24, 32, 48, 64, 96],
  radii: [4, 6, 8, 12, 16],
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.2)',
    accent: '0 4px 12px rgba(52, 225, 161, 0.2)',
  },
};

// Helper function to copy to clipboard
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    // Visual feedback could be added here
  });
};

// Color Swatch Component
const ColorSwatch: React.FC<{
  name: string;
  value: string;
  description?: string;
  format: 'hex' | 'css';
}> = ({ name, value, description, format }) => {
  const [copied, setCopied] = useState(false);
  const displayValue = format === 'hex' ? value : `var(--color-${name.toLowerCase()})`;

  const handleCopy = () => {
    copyToClipboard(format === 'hex' ? value : displayValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.colorSwatch}>
      <div
        className={styles.colorSwatchPreview}
        style={{
          backgroundColor: value,
          border: value === tokens.colors.bg || value === tokens.colors.surface || value === tokens.colors.border
            ? `1px solid ${tokens.colors.border}`
            : 'none',
        }}
      />
      <div className={styles.colorSwatchInfo}>
        <div className={styles.colorSwatchName}>{name}</div>
        <button
          className={styles.copyButton}
          onClick={handleCopy}
          title="Копіювати"
        >
          {copied ? '✓' : displayValue}
        </button>
        {description && (
          <div className={styles.colorSwatchDescription}>{description}</div>
        )}
      </div>
    </div>
  );
};

// Token Display Component
const TokenDisplay: React.FC<{
  label: string;
  value: string;
  format: 'hex' | 'css';
  type?: 'color' | 'spacing' | 'radius' | 'shadow' | 'typography';
}> = ({ label, value, format, type = 'spacing' }) => {
  const [copied, setCopied] = useState(false);
  const displayValue = format === 'hex' || type === 'spacing' || type === 'radius'
    ? value
    : `var(--${type}-${label.toLowerCase().replace(/\s+/g, '-')})`;

  const handleCopy = () => {
    copyToClipboard(displayValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.tokenDisplay}>
      <div className={styles.tokenLabel}>{label}</div>
      <button
        className={styles.copyButton}
        onClick={handleCopy}
        title="Копіювати"
      >
        {copied ? '✓' : displayValue}
      </button>
    </div>
  );
};

// Section Component
const Section: React.FC<{
  id: string;
  title: string;
  children: React.ReactNode;
}> = ({ id, title, children }) => {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
};

export default function DesignSystem(): React.JSX.Element {
  const [format, setFormat] = useState<'hex' | 'css'>('hex');
  const [searchQuery, setSearchQuery] = useState('');
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const sections = [
    { id: 'colors', title: 'Кольори' },
    { id: 'typography', title: 'Типографіка' },
    { id: 'spacing', title: 'Відступи' },
    { id: 'radii', title: 'Радіуси меж' },
    { id: 'shadows', title: 'Тіні' },
    { id: 'buttons', title: 'Кнопки' },
    { id: 'inputs', title: 'Поля введення' },
    { id: 'cards', title: 'Картки' },
    { id: 'navigation', title: 'Навігація' },
    { id: 'code', title: 'Блоки коду' },
    { id: 'tables', title: 'Таблиці' },
    { id: 'accessibility', title: 'Доступність' },
  ];

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        sectionsRef.current[section.id] = element;
      }
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = sectionsRef.current[id];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Layout title="Система дизайну" description="Дизайн-система GeniVerse з візуальними прикладами">
      <div className={styles.designSystem}>
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>Система дизайну</h1>
          <p className={styles.pageDescription}>
            Візуальна мова та бібліотека компонентів GeniVerse
          </p>
          
          <div className={styles.controls}>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Пошук секцій..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            <div className={styles.formatToggle}>
              <button
                className={clsx(styles.toggleButton, format === 'hex' && styles.toggleButtonActive)}
                onClick={() => setFormat('hex')}
              >
                HEX
              </button>
              <button
                className={clsx(styles.toggleButton, format === 'css' && styles.toggleButtonActive)}
                onClick={() => setFormat('css')}
              >
                CSS Vars
              </button>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <nav className={styles.toc}>
              <div className={styles.tocTitle}>Зміст</div>
              {filteredSections.map((section) => (
                <button
                  key={section.id}
                  className={styles.tocItem}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </aside>

          <main className={styles.main}>
            <Section id="colors" title="Кольори">
              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Основні кольори</h3>
                <div className={styles.colorGrid}>
                  <ColorSwatch name="Фон" value={tokens.colors.bg} description="Глибокий темний фон" format={format} />
                  <ColorSwatch name="Поверхня" value={tokens.colors.surface} description="Підняті поверхні та картки" format={format} />
                  <ColorSwatch name="Акцент" value={tokens.colors.accent} description="CTA та виділення" format={format} />
                  <ColorSwatch name="Текст" value={tokens.colors.text} description="Основний текст" format={format} />
                  <ColorSwatch name="Текст вторинний" value={tokens.colors.textSecondary} description="Вторинний текст" format={format} />
                </div>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Семантичні кольори</h3>
                <div className={styles.colorGrid}>
                  <ColorSwatch name="Успіх" value={tokens.colors.success} format={format} />
                  <ColorSwatch name="Попередження" value={tokens.colors.warning} format={format} />
                  <ColorSwatch name="Помилка" value={tokens.colors.error} format={format} />
                  <ColorSwatch name="Інформація" value={tokens.colors.info} format={format} />
                </div>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Нейтральні кольори</h3>
                <div className={styles.colorGrid}>
                  <ColorSwatch name="Межа" value={tokens.colors.border} format={format} />
                  <ColorSwatch name="Наведення" value={tokens.colors.hover} format={format} />
                  <ColorSwatch name="Активний" value={tokens.colors.active} format={format} />
                  <ColorSwatch name="Накладання" value={tokens.colors.overlay} format={format} />
                </div>
              </div>
            </Section>

            <Section id="typography" title="Типографіка">
              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Сімейства шрифтів</h3>
                <div className={styles.tokenGrid}>
                  <TokenDisplay label="Заголовки" value={tokens.typography.headings} format={format} type="typography" />
                  <TokenDisplay label="Основний текст" value={tokens.typography.body} format={format} type="typography" />
                  <TokenDisplay label="Моноширинний" value={tokens.typography.mono} format={format} type="typography" />
                </div>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Шкала розмірів</h3>
                <div className={styles.typographyPreview}>
                  {Object.entries(tokens.typography.scale).map(([key, value]) => {
                    const isHeading = key.startsWith('h');
                    const fontFamily = isHeading ? tokens.typography.headings : tokens.typography.body;
                    return (
                      <div key={key} className={styles.typographyItem}>
                        <div
                          className={styles.typographySample}
                          style={{
                            fontFamily: `'${fontFamily}', sans-serif`,
                            fontSize: value.size,
                            lineHeight: value.lineHeight,
                            fontWeight: isHeading ? 600 : 400,
                          }}
                        >
                          {key === 'h1' && 'H1 Заголовок сторінки'}
                          {key === 'h2' && 'H2 Заголовок розділу'}
                          {key === 'h3' && 'H3 Заголовок підрозділу'}
                          {key === 'h4' && 'H4 Менший заголовок'}
                          {key === 'bodyLg' && 'Основний великий текст'}
                          {key === 'body' && 'Основний текст'}
                          {key === 'bodySm' && 'Основний малий текст'}
                          {key === 'caption' && 'Підпис'}
                        </div>
                        <div className={styles.typographyMeta}>
                          <span className={styles.typographyLabel}>{key}</span>
                          <button
                            className={styles.copyButton}
                            onClick={() => copyToClipboard(`${value.size} / ${value.lineHeight}`)}
                          >
                            {value.size} / {value.lineHeight}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Ваги шрифту</h3>
                <div className={styles.typographyPreview}>
                  {tokens.typography.weights.map((weight) => (
                    <div key={weight} className={styles.typographyItem}>
                      <div
                        className={styles.typographySample}
                        style={{
                          fontFamily: `'${tokens.typography.body}', sans-serif`,
                          fontWeight: weight,
                        }}
                      >
                        Вага {weight} — приклад тексту
                      </div>
                      <button
                        className={styles.copyButton}
                        onClick={() => copyToClipboard(`${weight}`)}
                      >
                        {weight}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            <Section id="spacing" title="Відступи">
              <div className={styles.subsection}>
                <p className={styles.sectionNote}>Базова одиниця: 8px</p>
                <div className={styles.spacingGrid}>
                  {tokens.spacing.map((size) => (
                    <div key={size} className={styles.spacingItem}>
                      <div
                        className={styles.spacingVisual}
                        style={{
                          width: `${size}px`,
                          height: `${size}px`,
                          backgroundColor: tokens.colors.accent,
                        }}
                      />
                      <TokenDisplay label={`${size}px`} value={`${size}px`} format={format} type="spacing" />
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            <Section id="radii" title="Радіуси меж">
              <div className={styles.subsection}>
                <div className={styles.radiiGrid}>
                  {tokens.radii.map((radius) => (
                    <div key={radius} className={styles.radiiItem}>
                      <div
                        className={styles.radiiVisual}
                        style={{
                          borderRadius: `${radius}px`,
                          backgroundColor: tokens.colors.accent,
                        }}
                      />
                      <TokenDisplay label={`${radius}px`} value={`${radius}px`} format={format} type="radius" />
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            <Section id="shadows" title="Тіні">
              <div className={styles.subsection}>
                <div className={styles.shadowGrid}>
                  {Object.entries(tokens.shadows).map(([key, value]) => (
                    <div key={key} className={styles.shadowItem}>
                      <div
                        className={styles.shadowVisual}
                        style={{
                          boxShadow: value,
                        }}
                      />
                      <div className={styles.shadowInfo}>
                        <div className={styles.shadowLabel}>{key}</div>
                        <button
                          className={styles.copyButton}
                          onClick={() => copyToClipboard(value)}
                        >
                          {value}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            <Section id="buttons" title="Кнопки">
              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Основна кнопка</h3>
                <div className={styles.componentPreview}>
                  <button
                    className={clsx(styles.button, styles.buttonPrimary)}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    Основна кнопка
                  </button>
                  <button
                    className={clsx(styles.button, styles.buttonPrimary)}
                    style={{ opacity: 0.8 }}
                  >
                    Наведення
                  </button>
                  <button
                    className={clsx(styles.button, styles.buttonPrimary)}
                    style={{ opacity: 0.6, boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)' }}
                  >
                    Активний
                  </button>
                </div>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Вторинна кнопка</h3>
                <div className={styles.componentPreview}>
                  <button className={clsx(styles.button, styles.buttonSecondary)}>
                    Вторинна кнопка
                  </button>
                  <button
                    className={clsx(styles.button, styles.buttonSecondary)}
                    style={{ backgroundColor: tokens.colors.hover }}
                  >
                    Наведення
                  </button>
                </div>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Третинна кнопка</h3>
                <div className={styles.componentPreview}>
                  <button className={clsx(styles.button, styles.buttonTertiary)}>
                    Третинна кнопка
                  </button>
                  <button
                    className={clsx(styles.button, styles.buttonTertiary)}
                    style={{ backgroundColor: tokens.colors.surface }}
                  >
                    Наведення
                  </button>
                </div>
              </div>
            </Section>

            <Section id="inputs" title="Поля введення">
              <div className={styles.subsection}>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Мітка поля</label>
                  <input
                    type="text"
                    placeholder="Плейсхолдер тексту"
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Поле у фокусі</label>
                  <input
                    type="text"
                    value="Текст у полі"
                    className={clsx(styles.input, styles.inputFocused)}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Помилка</label>
                  <input
                    type="text"
                    value="Невірне значення"
                    className={clsx(styles.input, styles.inputError)}
                  />
                  <div className={styles.inputHelper}>Повідомлення про помилку</div>
                </div>
              </div>
            </Section>

            <Section id="cards" title="Картки">
              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Стандартна картка</h3>
                <div className={clsx(styles.card, styles.cardStandard)}>
                  <h3 className={styles.cardTitle}>Заголовок картки</h3>
                  <p className={styles.cardText}>
                    Це приклад стандартної картки з тінню та відступами.
                  </p>
                </div>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Інтерактивна картка</h3>
                <div className={clsx(styles.card, styles.cardInteractive)}>
                  <h3 className={styles.cardTitle}>Інтерактивна картка</h3>
                  <p className={styles.cardText}>
                    Ця картка реагує на наведення з акцентною межею та тінню.
                  </p>
                </div>
              </div>
            </Section>

            <Section id="navigation" title="Навігація">
              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Верхня панель</h3>
                <div className={styles.navbarPreview}>
                  <div className={styles.navbarBrand}>GeniVerse</div>
                  <div className={styles.navbarMenu}>
                    <a href="#" className={styles.navbarItem}>Пункт меню</a>
                    <a href="#" className={clsx(styles.navbarItem, styles.navbarItemActive)}>
                      Активний
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Бічна панель</h3>
                <div className={styles.sidebarPreview}>
                  <div className={styles.sidebarHeader}>Меню</div>
                  <div className={styles.sidebarItem}>Пункт меню</div>
                  <div className={clsx(styles.sidebarItem, styles.sidebarItemActive)}>
                    Активний пункт
                  </div>
                  <div className={clsx(styles.sidebarItem, styles.sidebarItemSecondary)}>
                    Інший пункт
                  </div>
                </div>
              </div>
            </Section>

            <Section id="code" title="Блоки коду">
              <div className={styles.subsection}>
                <pre className={styles.codeBlock}>
                  <code>{`function example() {
  return "Приклад коду";
}`}</code>
                </pre>
              </div>
            </Section>

            <Section id="tables" title="Таблиці">
              <div className={styles.subsection}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Заголовок 1</th>
                      <th>Заголовок 2</th>
                      <th>Заголовок 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Рядок 1</td>
                      <td>Дані</td>
                      <td>Значення</td>
                    </tr>
                    <tr>
                      <td>Рядок 2</td>
                      <td>Дані</td>
                      <td>Значення</td>
                    </tr>
                    <tr>
                      <td>Рядок 3</td>
                      <td>Дані</td>
                      <td>Значення</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <Section id="accessibility" title="Доступність">
              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Контраст кольорів</h3>
                <ul className={styles.accessibilityList}>
                  <li>Текст на фоні: мінімальне співвідношення 4.5:1</li>
                  <li>Великий текст: мінімальне співвідношення 3:1</li>
                  <li>Інтерактивні елементи: мінімальне співвідношення 3:1</li>
                </ul>

                <h3 className={styles.subsectionTitle}>Стани фокусу</h3>
                <ul className={styles.accessibilityList}>
                  <li>Кільце фокусу: 2px суцільний акцентний колір (#34E1A1)</li>
                  <li>Зміщення фокусу: 2px</li>
                  <li>Навігація з клавіатури: всі інтерактивні елементи доступні</li>
                </ul>

                <div className={styles.focusExample}>
                  <button className={clsx(styles.button, styles.buttonPrimary, styles.focusRing)}>
                    Приклад фокусу
                  </button>
                </div>
              </div>
            </Section>
          </main>
        </div>
      </div>
    </Layout>
  );
}

