import React, { useState, useRef, useEffect } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '@site/src/pages/design-system.module.css';

// Theme presets
const themes = {
  Core: {
    colors: {
      bg: '#0B0D0C',
      surface: '#141716',
      accent: '#34E1A1',
      text: '#E8F9F0',
      textSecondary: '#B8D4C5',
      border: '#1F2321',
      success: '#34E1A1',
      warning: '#FFB84D',
      error: '#FF6B6B',
      info: '#4DABF7',
      hover: 'rgba(52, 225, 161, 0.1)',
      active: 'rgba(52, 225, 161, 0.15)',
      overlay: 'rgba(11, 13, 12, 0.9)',
    },
    radius: 12,
    shadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    spacingMultiplier: 1,
    fontScale: 1,
    motion: true,
    density: 'default',
  },
  Kids: {
    colors: {
      bg: '#1A1F2E',
      surface: '#252B3D',
      accent: '#FF6B9D',
      text: '#FFFFFF',
      textSecondary: '#C8D0E8',
      border: '#2F3547',
      success: '#4ECDC4',
      warning: '#FFE66D',
      error: '#FF6B6B',
      info: '#95E1D3',
      hover: 'rgba(255, 107, 157, 0.15)',
      active: 'rgba(255, 107, 157, 0.25)',
      overlay: 'rgba(26, 31, 46, 0.95)',
    },
    radius: 16,
    shadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    spacingMultiplier: 1.2,
    fontScale: 1.1,
    motion: true,
    density: 'roomy',
  },
  Teens: {
    colors: {
      bg: '#0F1419',
      surface: '#1A1F26',
      accent: '#00D9FF',
      text: '#E8F0F5',
      textSecondary: '#A8B8C8',
      border: '#252A33',
      success: '#00FF88',
      warning: '#FFB84D',
      error: '#FF4757',
      info: '#5B8DEF',
      hover: 'rgba(0, 217, 255, 0.1)',
      active: 'rgba(0, 217, 255, 0.2)',
      overlay: 'rgba(15, 20, 25, 0.95)',
    },
    radius: 10,
    shadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    spacingMultiplier: 1,
    fontScale: 1,
    motion: true,
    density: 'default',
  },
  Exam: {
    colors: {
      bg: '#FFFFFF',
      surface: '#F5F5F5',
      accent: '#0066CC',
      text: '#1A1A1A',
      textSecondary: '#666666',
      border: '#E0E0E0',
      success: '#00AA44',
      warning: '#FF8800',
      error: '#CC0000',
      info: '#0066CC',
      hover: 'rgba(0, 102, 204, 0.1)',
      active: 'rgba(0, 102, 204, 0.15)',
      overlay: 'rgba(255, 255, 255, 0.95)',
    },
    radius: 8,
    shadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    spacingMultiplier: 1,
    fontScale: 1,
    motion: false,
    density: 'compact',
  },
  HighContrast: {
    colors: {
      bg: '#000000',
      surface: '#1A1A1A',
      accent: '#00FF00',
      text: '#FFFFFF',
      textSecondary: '#CCCCCC',
      border: '#FFFFFF',
      success: '#00FF00',
      warning: '#FFFF00',
      error: '#FF0000',
      info: '#00FFFF',
      hover: 'rgba(0, 255, 0, 0.2)',
      active: 'rgba(0, 255, 0, 0.3)',
      overlay: 'rgba(0, 0, 0, 0.95)',
    },
    radius: 4,
    shadow: 'none',
    spacingMultiplier: 1.1,
    fontScale: 1.1,
    motion: false,
    density: 'default',
  },
  Projector: {
    colors: {
      bg: '#0A0A0A',
      surface: '#1A1A1A',
      accent: '#FFD700',
      text: '#FFFFFF',
      textSecondary: '#CCCCCC',
      border: '#333333',
      success: '#00FF00',
      warning: '#FFAA00',
      error: '#FF4444',
      info: '#00AAFF',
      hover: 'rgba(255, 215, 0, 0.2)',
      active: 'rgba(255, 215, 0, 0.3)',
      overlay: 'rgba(10, 10, 10, 0.95)',
    },
    radius: 8,
    shadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
    spacingMultiplier: 1.15,
    fontScale: 1.15,
    motion: false,
    density: 'roomy',
  },
};

type ThemePreset = keyof typeof themes;
type Mode = 'light' | 'dark';
type Density = 'roomy' | 'default' | 'compact';
type TokenFormat = 'hex' | 'css';

// Helper function to copy to clipboard
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

// Color Swatch Component
const ColorSwatch: React.FC<{
  name: string;
  value: string;
  format: TokenFormat;
  theme: typeof themes.Core;
}> = ({ name, value, format, theme }) => {
  const [copied, setCopied] = useState(false);
  const displayValue = format === 'hex' ? value : `var(--color-${name.toLowerCase().replace(/\s+/g, '-')})`;
  
  const handleCopy = () => {
    copyToClipboard(format === 'hex' ? value : displayValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Calculate contrast (simplified)
  const getContrast = (color: string, bg: string) => {
    // Simplified contrast check
    if (name.toLowerCase().includes('text') && color === theme.colors.text) {
      return 'OK';
    }
    return '';
  };

  return (
    <div className={styles.colorSwatch}>
      <div
        className={styles.colorSwatchPreview}
        style={{
          backgroundColor: value,
          border: value === theme.colors.bg || value === theme.colors.surface || value === theme.colors.border
            ? `1px solid ${theme.colors.border}`
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
        {getContrast(value, theme.colors.bg) && (
          <div className={styles.contrastBadge}>{getContrast(value, theme.colors.bg)}</div>
        )}
      </div>
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
  const { i18n } = useDocusaurusContext();
  const isUkrainian = i18n.currentLocale === 'uk';
  
  const [themePreset, setThemePreset] = useState<ThemePreset>('Core');
  const [mode, setMode] = useState<Mode>('dark');
  const [density, setDensity] = useState<Density>('default');
  const [motion, setMotion] = useState(true);
  const [fontScale, setFontScale] = useState(100);
  const [tokenFormat, setTokenFormat] = useState<TokenFormat>('hex');
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  // Translations
  const t = {
    themePreset: isUkrainian ? 'Тема' : 'Theme Preset',
    mode: isUkrainian ? 'Режим' : 'Mode',
    density: isUkrainian ? 'Щільність' : 'Density',
    motion: isUkrainian ? 'Анімація' : 'Motion',
    fontScale: isUkrainian ? 'Масштаб шрифту' : 'Font Scale',
    showTokensAs: isUkrainian ? 'Показувати токени як' : 'Show tokens as',
    light: isUkrainian ? 'Світла' : 'Light',
    dark: isUkrainian ? 'Темна' : 'Dark',
    roomy: isUkrainian ? 'Простора' : 'Roomy',
    default: isUkrainian ? 'За замовчуванням' : 'Default',
    compact: isUkrainian ? 'Компактна' : 'Compact',
    full: isUkrainian ? 'Повна' : 'Full',
    reduced: isUkrainian ? 'Зменшена' : 'Reduced',
    hex: 'HEX',
    cssVars: isUkrainian ? 'CSS Змінні' : 'CSS Vars',
    playground: isUkrainian ? 'Налаштування інтерфейсу' : 'Interface Settings',
  };

  const currentTheme = themes[themePreset];
  const effectiveFontScale = (fontScale / 100) * currentTheme.fontScale;
  
  // Calculate density multiplier
  const densityMultiplier = density === 'roomy' ? 1.2 : density === 'compact' ? 0.8 : 1;
  const effectiveSpacing = currentTheme.spacingMultiplier * densityMultiplier;
  
  // Apply mode adjustments (for light mode, adjust colors if theme supports it)
  const modeAdjustedColors = mode === 'light' && themePreset === 'Core'
    ? {
        bg: '#FFFFFF',
        surface: '#F5F5F5',
        text: '#1A1A1A',
        textSecondary: '#666666',
        border: '#E0E0E0',
        success: currentTheme.colors.success,
        warning: currentTheme.colors.warning,
        error: currentTheme.colors.error,
        info: currentTheme.colors.info,
        hover: currentTheme.colors.hover,
        active: currentTheme.colors.active,
        overlay: currentTheme.colors.overlay,
      }
    : currentTheme.colors;

  // Apply theme via CSS variables
  // Use base spacing for playground panel (not affected by density)
  const baseSpacing = currentTheme.spacingMultiplier;
  
  const themeVars = {
    '--ds-bg': modeAdjustedColors.bg,
    '--ds-surface': modeAdjustedColors.surface,
    '--ds-accent': currentTheme.colors.accent,
    '--ds-text': modeAdjustedColors.text,
    '--ds-text-secondary': modeAdjustedColors.textSecondary,
    '--ds-border': modeAdjustedColors.border,
    '--ds-success': currentTheme.colors.success,
    '--ds-warning': currentTheme.colors.warning,
    '--ds-error': currentTheme.colors.error,
    '--ds-info': currentTheme.colors.info,
    '--ds-hover': currentTheme.colors.hover,
    '--ds-active': currentTheme.colors.active,
    '--ds-overlay': currentTheme.colors.overlay,
    '--ds-radius': `${currentTheme.radius}px`,
    '--ds-shadow': currentTheme.shadow,
    '--ds-spacing': effectiveSpacing,
    '--ds-spacing-base': baseSpacing, // Base spacing for playground panel
    '--ds-font-scale': effectiveFontScale,
    '--ds-motion': motion ? 'all 0.2s ease' : 'none',
    '--ds-mode': mode,
    '--ds-density': density,
  } as React.CSSProperties;

  const sections = [
    { id: 'architecture', title: isUkrainian ? 'Архітектура' : 'Architecture' },
    { id: 'tokens', title: isUkrainian ? 'Токени' : 'Tokens' },
    { id: 'typography', title: isUkrainian ? 'Типографіка' : 'Typography' },
    { id: 'components', title: isUkrainian ? 'Компоненти' : 'Components' },
    { id: 'accessibility', title: isUkrainian ? 'Доступність' : 'Accessibility' },
  ];

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
    <Layout title="Система дизайну" description="Інтерактивна дизайн-система GeniVerse">
      <div className={styles.designSystem} style={themeVars}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Система дизайну GeniVerse</h1>
            <p className={styles.heroDescription}>
              Адаптивна дизайн-система, створена для освітніх платформ K–12. 
              Система підтримує різні вікові групи через спеціалізовані теми та режими, 
              забезпечує доступність та відповідає нормативним вимогам. 
              Всі компоненти побудовані на основі токенів дизайну, що дозволяє швидко 
              адаптувати інтерфейс під конкретні потреби установи та учнів.
            </p>
          </div>
        </div>

        {/* TOC Navigation */}
        <div className={styles.tocNav}>
          {sections.map((section) => (
            <button
              key={section.id}
              className={styles.tocNavItem}
              onClick={() => scrollToSection(section.id)}
            >
              {section.title}
            </button>
          ))}
        </div>

        <div className={styles.contentWrapper}>
          {/* Playground Controls Sidebar */}
          <aside className={styles.playgroundSidebar}>
            <div className={styles.playgroundPanel}>
              <h3 className={styles.playgroundTitle}>{t.playground}</h3>
              
              <div className={styles.controlGroup}>
                <label className={styles.controlLabel}>{t.themePreset}</label>
                <select
                  className={styles.controlSelect}
                  value={themePreset}
                  onChange={(e) => setThemePreset(e.target.value as ThemePreset)}
                >
                  {Object.keys(themes).map((preset) => (
                    <option key={preset} value={preset}>{preset}</option>
                  ))}
                </select>
              </div>

              <div className={styles.controlGroup}>
                <label className={styles.controlLabel}>{t.mode}</label>
                <div className={styles.controlToggle}>
                  <button
                    className={clsx(styles.toggleButton, mode === 'light' && styles.toggleButtonActive)}
                    onClick={() => setMode('light')}
                  >
                    {t.light}
                  </button>
                  <button
                    className={clsx(styles.toggleButton, mode === 'dark' && styles.toggleButtonActive)}
                    onClick={() => setMode('dark')}
                  >
                    {t.dark}
                  </button>
                </div>
              </div>

              <div className={styles.controlGroup}>
                <label className={styles.controlLabel}>{t.density}</label>
                <div className={styles.controlToggle}>
                  <button
                    className={clsx(styles.toggleButton, density === 'roomy' && styles.toggleButtonActive)}
                    onClick={() => setDensity('roomy')}
                  >
                    {t.roomy}
                  </button>
                  <button
                    className={clsx(styles.toggleButton, density === 'default' && styles.toggleButtonActive)}
                    onClick={() => setDensity('default')}
                  >
                    {t.default}
                  </button>
                  <button
                    className={clsx(styles.toggleButton, density === 'compact' && styles.toggleButtonActive)}
                    onClick={() => setDensity('compact')}
                  >
                    {t.compact}
                  </button>
                </div>
              </div>

              <div className={styles.controlGroup}>
                <label className={styles.controlLabel}>{t.motion}</label>
                <div className={styles.controlToggle}>
                  <button
                    className={clsx(styles.toggleButton, motion && styles.toggleButtonActive)}
                    onClick={() => setMotion(true)}
                  >
                    {t.full}
                  </button>
                  <button
                    className={clsx(styles.toggleButton, !motion && styles.toggleButtonActive)}
                    onClick={() => setMotion(false)}
                  >
                    {t.reduced}
                  </button>
                </div>
              </div>

              <div className={styles.controlGroup}>
                <label className={styles.controlLabel}>{t.fontScale}</label>
                <div className={styles.controlRange}>
                  <input
                    type="range"
                    min="100"
                    max="125"
                    step="5"
                    value={fontScale}
                    onChange={(e) => setFontScale(Number(e.target.value))}
                    className={styles.rangeInput}
                  />
                  <span className={styles.rangeValue}>{fontScale}%</span>
                </div>
              </div>

              <div className={styles.controlGroup}>
                <label className={styles.controlLabel}>{t.showTokensAs}</label>
                <div className={styles.controlToggle}>
                  <button
                    className={clsx(styles.toggleButton, tokenFormat === 'hex' && styles.toggleButtonActive)}
                    onClick={() => setTokenFormat('hex')}
                  >
                    {t.hex}
                  </button>
                  <button
                    className={clsx(styles.toggleButton, tokenFormat === 'css' && styles.toggleButtonActive)}
                    onClick={() => setTokenFormat('css')}
                  >
                    {t.cssVars}
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className={styles.mainContent}>
            {/* Architecture Section */}
            <Section id="architecture" title={isUkrainian ? "Архітектура дизайн-системи" : "Design System Architecture"}>
              <div className={styles.architectureDiagram}>
                <div className={styles.archFlow}>
                  <div className={clsx(styles.archNode, styles.archNodeActive)}>
                    <div className={styles.archNodeLabel}>Tokens</div>
                    <div className={styles.archNodeDesc}>Кольори, типографіка, відступи</div>
                  </div>
                  <div className={styles.archArrow}>→</div>
                  <div className={clsx(styles.archNode, themePreset !== 'Core' && styles.archNodeActive)}>
                    <div className={styles.archNodeLabel}>Themes</div>
                    <div className={styles.archNodeDesc}>{themePreset}</div>
                  </div>
                  <div className={styles.archArrow}>→</div>
                  <div className={styles.archNode}>
                    <div className={styles.archNodeLabel}>Components</div>
                    <div className={styles.archNodeDesc}>Кнопки, форми, картки</div>
                  </div>
                  <div className={styles.archArrow}>→</div>
                  <div className={styles.archNode}>
                    <div className={styles.archNodeLabel}>Modes</div>
                    <div className={styles.archNodeDesc}>{mode === 'dark' ? t.dark : t.light}</div>
                  </div>
                  <div className={styles.archArrow}>→</div>
                  <div className={styles.archNode}>
                    <div className={styles.archNodeLabel}>UI</div>
                    <div className={styles.archNodeDesc}>Інтерфейс платформи</div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Tokens Section */}
            <Section id="tokens" title={isUkrainian ? "Токени дизайну" : "Design Tokens"}>
              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Кольорова палітра</h3>
                <div className={styles.colorGrid}>
                  <ColorSwatch name="Фон" value={currentTheme.colors.bg} format={tokenFormat} theme={currentTheme} />
                  <ColorSwatch name="Поверхня" value={currentTheme.colors.surface} format={tokenFormat} theme={currentTheme} />
                  <ColorSwatch name="Акцент" value={currentTheme.colors.accent} format={tokenFormat} theme={currentTheme} />
                  <ColorSwatch name="Текст" value={currentTheme.colors.text} format={tokenFormat} theme={currentTheme} />
                  <ColorSwatch name="Текст вторинний" value={currentTheme.colors.textSecondary} format={tokenFormat} theme={currentTheme} />
                  <ColorSwatch name="Межа" value={currentTheme.colors.border} format={tokenFormat} theme={currentTheme} />
                  <ColorSwatch name="Успіх" value={currentTheme.colors.success} format={tokenFormat} theme={currentTheme} />
                  <ColorSwatch name="Попередження" value={currentTheme.colors.warning} format={tokenFormat} theme={currentTheme} />
                  <ColorSwatch name="Помилка" value={currentTheme.colors.error} format={tokenFormat} theme={currentTheme} />
                  <ColorSwatch name="Інформація" value={currentTheme.colors.info} format={tokenFormat} theme={currentTheme} />
                </div>
              </div>
            </Section>

            {/* Typography Section */}
            <Section id="typography" title={isUkrainian ? "Типографіка" : "Typography"}>
              <div className={styles.subsection}>
                <div className={styles.typographyPreview}>
                  <div className={styles.typographyItem}>
                    <div
                      className={styles.typographySample}
                      style={{
                        fontFamily: "'Garet', sans-serif",
                        fontSize: `calc(2.5rem * var(--ds-font-scale))`,
                        lineHeight: `calc(3rem * var(--ds-font-scale))`,
                        fontWeight: 600,
                      }}
                    >
                      H1 Заголовок сторінки
                    </div>
                  </div>
                  <div className={styles.typographyItem}>
                    <div
                      className={styles.typographySample}
                      style={{
                        fontFamily: "'Garet', sans-serif",
                        fontSize: `calc(2rem * var(--ds-font-scale))`,
                        lineHeight: `calc(2.5rem * var(--ds-font-scale))`,
                        fontWeight: 600,
                      }}
                    >
                      H2 Заголовок розділу
                    </div>
                  </div>
                  <div className={styles.typographyItem}>
                    <div
                      className={styles.typographySample}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: `calc(1rem * var(--ds-font-scale))`,
                        lineHeight: `calc(1.5rem * var(--ds-font-scale))`,
                      }}
                    >
                      Основний текст. GeniVerse використовує шрифт Inter для основного тексту, 
                      що забезпечує відмінну читабельність на всіх пристроях. Шрифт оптимізований 
                      для екранів та підтримує широкий діапазон розмірів.
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Components Section */}
            <Section id="components" title={isUkrainian ? "Компоненти" : "Components"}>
              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Кнопки</h3>
                <div className={styles.componentPreview}>
                  <button className={clsx(styles.button, styles.buttonPrimary)}>Primary</button>
                  <button className={clsx(styles.button, styles.buttonPrimary, styles.buttonHover)}>Hover</button>
                  <button className={clsx(styles.button, styles.buttonPrimary, styles.buttonActive)}>Active</button>
                  <button className={clsx(styles.button, styles.buttonPrimary, styles.buttonFocus)}>Focus</button>
                  <button className={clsx(styles.button, styles.buttonPrimary, styles.buttonDisabled)} disabled>Disabled</button>
                  <button className={clsx(styles.button, styles.buttonPrimary, styles.buttonLoading)}>Loading...</button>
                </div>
                <div className={styles.componentPreview}>
                  <button className={clsx(styles.button, styles.buttonSecondary)}>Secondary</button>
                  <button className={clsx(styles.button, styles.buttonTertiary)}>Tertiary</button>
                </div>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Поля введення</h3>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Мітка поля</label>
                  <input type="text" placeholder="Плейсхолдер" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Поле у фокусі</label>
                  <input type="text" value="Текст у полі" className={clsx(styles.input, styles.inputFocused)} />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Помилка</label>
                  <input type="text" value="Невірне значення" className={clsx(styles.input, styles.inputError)} />
                  <div className={styles.inputHelper}>Повідомлення про помилку</div>
                </div>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Картки</h3>
                <div className={styles.cardGrid}>
                  <div className={clsx(styles.card, styles.cardStandard)}>
                    <h4 className={styles.cardTitle}>Стандартна картка</h4>
                    <p className={styles.cardText}>Приклад стандартної картки з тінню та відступами.</p>
                  </div>
                  <div className={clsx(styles.card, styles.cardInteractive)}>
                    <h4 className={styles.cardTitle}>Інтерактивна картка</h4>
                    <p className={styles.cardText}>Картка з hover-ефектом та акцентною межею.</p>
                  </div>
                </div>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Таблиця</h3>
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
                  </tbody>
                </table>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Блок коду</h3>
                <pre className={styles.codeBlock}>
                  <code>{`function example() {
  return "Приклад коду";
}`}</code>
                </pre>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Навігація</h3>
                <div className={styles.navbarPreview}>
                  <div className={styles.navbarBrand}>GeniVerse</div>
                  <div className={styles.navbarMenu}>
                    <a href="#" className={styles.navbarItem}>Пункт меню</a>
                    <a href="#" className={clsx(styles.navbarItem, styles.navbarItemActive)}>Активний</a>
                  </div>
                </div>
                <div className={styles.sidebarPreview}>
                  <div className={styles.sidebarHeader}>Меню</div>
                  <div className={styles.sidebarItem}>Пункт меню</div>
                  <div className={clsx(styles.sidebarItem, styles.sidebarItemActive)}>Активний пункт</div>
                </div>
              </div>
            </Section>

            {/* Accessibility Section */}
            <Section id="accessibility" title={isUkrainian ? "Доступність та K–12" : "Accessibility & K–12"}>
              <div className={styles.subsection}>
                <ul className={styles.accessibilityList}>
                  <li>Контраст тексту відповідає WCAG 2.1 AA (мінімум 4.5:1 для основного тексту)</li>
                  <li>Всі інтерактивні елементи доступні з клавіатури з видимим фокусом (2px accent ring)</li>
                  <li>Підтримка екранних читачів через семантичний HTML та ARIA-атрибути</li>
                  <li>Тема Kids збільшує розміри та відступи для молодших учнів</li>
                  <li>Тема HighContrast забезпечує максимальний контраст для користувачів з порушенням зору</li>
                  <li>Режим Reduced Motion відключає анімації для користувачів з чутливістю до руху</li>
                  <li>Масштабування шрифтів від 100% до 125% для адаптації під індивідуальні потреби</li>
                </ul>
              </div>
            </Section>
          </main>
        </div>
      </div>
    </Layout>
  );
}
