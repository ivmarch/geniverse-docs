# Система дизайну

Система дизайну GeniVerse формує узгоджену візуальну мову та бібліотеку компонентів, які забезпечують послідовність, доступність і сучасний користувацький досвід на всіх платформах та інтерфейсах.

---

## Дизайн-токени

Дизайн-токени — це стандартизовані значення (кольори, типографіка, відступи, радіуси, тіні), які використовуються у всіх компонентах і продуктах платформи. Вони забезпечують цілісність UI та спрощують підтримку темування.

---

### Кольорова палітра

#### Основні кольори

import { ColorSwatch, ColorGrid } from '@site/src/components/ColorSwatch';

<ColorGrid>
  <ColorSwatch name="Фон" color="#0B0D0C" description="Глибокий темний фон для зменшення напруги очей" />
  <ColorSwatch name="Поверхня" color="#141716" description="Підняті поверхні та картки" />
  <ColorSwatch name="Акцент" color="#34E1A1" description="Основний акцент для CTA та виділень" />
  <ColorSwatch name="Текст основний" color="#E8F9F0" description="Основний колір тексту для високого контрасту" />
  <ColorSwatch name="Текст вторинний" color="#B8D4C5" description="Вторинний текст для меншого акценту" />
</ColorGrid>

#### Семантичні кольори

<ColorGrid>
  <ColorSwatch name="Успіх" color="#34E1A1" description="Стани успіху та позитивний зворотний зв'язок" />
  <ColorSwatch name="Попередження" color="#FFB84D" description="Попередження та повідомлення про ризики" />
  <ColorSwatch name="Помилка" color="#FF6B6B" description="Помилки та критичні сповіщення" />
  <ColorSwatch name="Інформація" color="#4DABF7" description="Інформаційні повідомлення" />
</ColorGrid>

#### Нейтральні кольори

<ColorGrid>
  <ColorSwatch name="Межа" color="#1F2321" description="Межі та роздільники" />
  <ColorSwatch name="Наведення" color="rgba(52, 225, 161, 0.1)" description="Стан наведення" />
  <ColorSwatch name="Активний" color="rgba(52, 225, 161, 0.15)" description="Активний стан" />
  <ColorSwatch name="Накладання" color="rgba(11, 13, 12, 0.9)" description="Модальні вікна та затемнення" />
</ColorGrid>

---

### Типографіка

#### Сімейства шрифтів

- **заголовки**: Garet — геометричний sans-serif для заголовків
- **основний текст**: Inter — читабельний sans-serif для основного тексту
- **моноширинний**: JetBrains Mono — код та технічний контент

#### Шкала розмірів

<div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 24px; margin: 24px 0; color: #E8F9F0;">
  <div style="font-family: 'Garet', sans-serif; font-size: 2.5rem; line-height: 3rem; font-weight: 600; margin-bottom: 16px;">H1 Заголовок сторінки</div>
  <div style="font-family: 'Garet', sans-serif; font-size: 2rem; line-height: 2.5rem; font-weight: 600; margin-bottom: 16px;">H2 Заголовок розділу</div>
  <div style="font-family: 'Garet', sans-serif; font-size: 1.5rem; line-height: 2rem; font-weight: 600; margin-bottom: 16px;">H3 Заголовок підрозділу</div>
  <div style="font-family: 'Garet', sans-serif; font-size: 1.25rem; line-height: 1.75rem; font-weight: 600; margin-bottom: 16px;">H4 Менший заголовок</div>
  <div style="font-family: 'Inter', sans-serif; font-size: 1.125rem; line-height: 1.75rem; font-weight: 400; margin-bottom: 16px;">Основний великий текст — виділений основний текст</div>
  <div style="font-family: 'Inter', sans-serif; font-size: 1rem; line-height: 1.5rem; font-weight: 400; margin-bottom: 16px;">Основний текст — стандартний основний текст</div>
  <div style="font-family: 'Inter', sans-serif; font-size: 0.875rem; line-height: 1.25rem; font-weight: 400; margin-bottom: 16px;">Основний малий текст — вторинний текст</div>
  <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; line-height: 1rem; font-weight: 400;">Підпис — підписи та мітки</div>
</div>

#### Ваги шрифту

<div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 24px; margin: 24px 0; color: #E8F9F0;">
  <div style="font-weight: 300; margin-bottom: 8px;">Легкий (300) — тонкий текст</div>
  <div style="font-weight: 400; margin-bottom: 8px;">Звичайний (400) — стандартний текст</div>
  <div style="font-weight: 500; margin-bottom: 8px;">Середній (500) — підкреслений текст</div>
  <div style="font-weight: 600; margin-bottom: 8px;">Напівжирний (600) — напівжирний текст</div>
  <div style="font-weight: 700;">Жирний (700) — жирний текст</div>
</div>

---

### Відступи

Базова одиниця: 8px.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 16px; text-align: center; color: #E8F9F0;">
    <div style="width: 4px; height: 4px; background: #34E1A1; margin: 0 auto 8px; border-radius: 2px;"></div>
    <strong>xs</strong><br/>4px
  </div>
  <div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 16px; text-align: center; color: #E8F9F0;">
    <div style="width: 8px; height: 8px; background: #34E1A1; margin: 0 auto 8px; border-radius: 2px;"></div>
    <strong>s</strong><br/>8px
  </div>
  <div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 16px; text-align: center; color: #E8F9F0;">
    <div style="width: 16px; height: 16px; background: #34E1A1; margin: 0 auto 8px; border-radius: 2px;"></div>
    <strong>m</strong><br/>16px
  </div>
  <div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 16px; text-align: center; color: #E8F9F0;">
    <div style="width: 24px; height: 24px; background: #34E1A1; margin: 0 auto 8px; border-radius: 2px;"></div>
    <strong>l</strong><br/>24px
  </div>
  <div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 16px; text-align: center; color: #E8F9F0;">
    <div style="width: 32px; height: 32px; background: #34E1A1; margin: 0 auto 8px; border-radius: 2px;"></div>
    <strong>xl</strong><br/>32px
  </div>
  <div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 16px; text-align: center; color: #E8F9F0;">
    <div style="width: 48px; height: 48px; background: #34E1A1; margin: 0 auto 8px; border-radius: 2px;"></div>
    <strong>2xl</strong><br/>48px
  </div>
  <div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 16px; text-align: center; color: #E8F9F0;">
    <div style="width: 64px; height: 64px; background: #34E1A1; margin: 0 auto 8px; border-radius: 2px;"></div>
    <strong>3xl</strong><br/>64px
  </div>
  <div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 16px; text-align: center; color: #E8F9F0;">
    <div style="width: 96px; height: 96px; background: #34E1A1; margin: 0 auto 8px; border-radius: 2px;"></div>
    <strong>4xl</strong><br/>96px
  </div>
</div>

---

### Радіуси меж

<div style="display: flex; gap: 16px; flex-wrap: wrap; margin: 24px 0;">
  <div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 16px; color: #E8F9F0;">
    <div style="width: 80px; height: 80px; background: #34E1A1; border-radius: 4px; margin-bottom: 8px;"></div>
    <strong>Малий</strong><br/>4px
  </div>
  <div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 16px; color: #E8F9F0;">
    <div style="width: 80px; height: 80px; background: #34E1A1; border-radius: 6px; margin-bottom: 8px;"></div>
    <strong>Стандартний</strong><br/>6px
  </div>
  <div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 16px; color: #E8F9F0;">
    <div style="width: 80px; height: 80px; background: #34E1A1; border-radius: 8px; margin-bottom: 8px;"></div>
    <strong>Картки</strong><br/>8px
  </div>
  <div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 16px; color: #E8F9F0;">
    <div style="width: 80px; height: 80px; background: #34E1A1; border-radius: 12px; margin-bottom: 8px;"></div>
    <strong>Великий</strong><br/>12px
  </div>
  <div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 16px; color: #E8F9F0;">
    <div style="width: 80px; height: 80px; background: #34E1A1; border-radius: 16px; margin-bottom: 8px;"></div>
    <strong>Модальні</strong><br/>16px
  </div>
</div>

---

### Тіні

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 24px; color: #E8F9F0;">
    <div style="width: 100%; height: 80px; background: #141716; border-radius: 8px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"></div>
    <strong>Мала</strong><br/>
    <code>0 1px 2px rgba(0, 0, 0, 0.1)</code>
  </div>
  <div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 24px; color: #E8F9F0;">
    <div style="width: 100%; height: 80px; background: #141716; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); margin-bottom: 8px;"></div>
    <strong>Середня</strong><br/>
    <code>0 4px 8px rgba(0, 0, 0, 0.15)</code>
  </div>
  <div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 24px; color: #E8F9F0;">
    <div style="width: 100%; height: 80px; background: #141716; border-radius: 8px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); margin-bottom: 8px;"></div>
    <strong>Велика</strong><br/>
    <code>0 8px 16px rgba(0, 0, 0, 0.2)</code>
  </div>
  <div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 24px; color: #E8F9F0;">
    <div style="width: 100%; height: 80px; background: #141716; border-radius: 8px; box-shadow: 0 4px 12px rgba(52, 225, 161, 0.2); margin-bottom: 8px;"></div>
    <strong>Акцент</strong><br/>
    <code>0 4px 12px rgba(52, 225, 161, 0.2)</code>
  </div>
</div>

---

## Бібліотека компонентів

Бібліотека компонентів реалізує дизайн-токени у вигляді узгоджених UI-компонентів для веб, мобільних та XR-інтерфейсів.

---

### Кнопки

#### Основна кнопка

<div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 24px; margin: 24px 0;">
  <button style="background: #34E1A1; color: #0B0D0C; border: none; border-radius: 6px; padding: 12px 24px; font-size: 1rem; font-weight: 600; cursor: pointer; margin-right: 8px;">Основна кнопка</button>
  <button style="background: #34E1A1; color: #0B0D0C; border: none; border-radius: 6px; padding: 12px 24px; font-size: 1rem; font-weight: 600; cursor: pointer; opacity: 0.8;">Наведення</button>
  <button style="background: #34E1A1; color: #0B0D0C; border: none; border-radius: 6px; padding: 12px 24px; font-size: 1rem; font-weight: 600; cursor: pointer; opacity: 0.6; box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);">Активний</button>
</div>

- фон: акцент (#34E1A1)
- текст: колір фону або дуже темний контрастний
- наведення: темніший відтінок акценту
- активний стан: натиснутий стан із тінню

#### Вторинна кнопка

<div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 24px; margin: 24px 0;">
  <button style="background: transparent; color: #34E1A1; border: 1px solid #34E1A1; border-radius: 6px; padding: 12px 24px; font-size: 1rem; font-weight: 600; cursor: pointer; margin-right: 8px;">Вторинна кнопка</button>
  <button style="background: rgba(52, 225, 161, 0.1); color: #34E1A1; border: 1px solid #34E1A1; border-radius: 6px; padding: 12px 24px; font-size: 1rem; font-weight: 600; cursor: pointer;">Наведення</button>
</div>

- фон: прозорий
- межа: акцент (#34E1A1)
- текст: акцент
- наведення: акцентний фон з низькою непрозорістю

#### Третинна кнопка

<div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 24px; margin: 24px 0;">
  <button style="background: transparent; color: #E8F9F0; border: none; border-radius: 6px; padding: 12px 24px; font-size: 1rem; font-weight: 600; cursor: pointer; margin-right: 8px;">Третинна кнопка</button>
  <button style="background: #141716; color: #E8F9F0; border: none; border-radius: 6px; padding: 12px 24px; font-size: 1rem; font-weight: 600; cursor: pointer;">Наведення</button>
</div>

- фон: прозорий
- текст: основний колір тексту (#E8F9F0)
- наведення: фон поверхні (#141716)

---

### Форми

#### Поля введення

<div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 24px; margin: 24px 0;">
  <div style="margin-bottom: 16px;">
    <label style="display: block; font-size: 0.875rem; font-weight: 600; color: #E8F9F0; margin-bottom: 8px;">Мітка поля</label>
    <input type="text" placeholder="Плейсхолдер тексту" style="width: 100%; max-width: 400px; background: #141716; border: 1px solid #1F2321; border-radius: 6px; padding: 12px; color: #E8F9F0; font-size: 1rem;" />
  </div>
  <div style="margin-bottom: 16px;">
    <label style="display: block; font-size: 0.875rem; font-weight: 600; color: #E8F9F0; margin-bottom: 8px;">Поле у фокусі</label>
    <input type="text" value="Текст у полі" style="width: 100%; max-width: 400px; background: #141716; border: 2px solid #34E1A1; border-radius: 6px; padding: 12px; color: #E8F9F0; font-size: 1rem; box-shadow: 0 0 0 2px rgba(52, 225, 161, 0.1);" />
  </div>
  <div>
    <label style="display: block; font-size: 0.875rem; font-weight: 600; color: #E8F9F0; margin-bottom: 8px;">Помилка</label>
    <input type="text" value="Невірне значення" style="width: 100%; max-width: 400px; background: rgba(255, 107, 107, 0.1); border: 1px solid #FF6B6B; border-radius: 6px; padding: 12px; color: #E8F9F0; font-size: 1rem;" />
    <div style="color: #FF6B6B; font-size: 0.875rem; margin-top: 4px;">Повідомлення про помилку</div>
  </div>
</div>

- фон: поверхня (#141716)
- межа: межа (#1F2321)
- текст: основний колір тексту (#E8F9F0)
- фокус: акцентна межа (#34E1A1) та легке свічення
- плейсхолдер: вторинний колір тексту (#B8D4C5)
- стани помилок: межа (#FF6B6B), текст (#FF6B6B), фон (помилка з низькою непрозорістю)

---

### Картки

#### Стандартна картка

<div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 24px; margin: 24px 0; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);">
  <h3 style="margin-top: 0; color: #E8F9F0;">Заголовок картки</h3>
  <p style="color: #B8D4C5; margin-bottom: 0;">Це приклад стандартної картки з тінню та відступами.</p>
</div>

- фон: поверхня (#141716)
- межа: межа (#1F2321)
- радіус: 8px
- відступ: 24px
- тінь: середня (0 4px 8px rgba(0, 0, 0, 0.15))

#### Інтерактивна картка

<div style="background: #141716; border: 1px solid #34E1A1; border-radius: 8px; padding: 24px; margin: 24px 0; box-shadow: 0 4px 12px rgba(52, 225, 161, 0.2); transition: all 0.2s;">
  <h3 style="margin-top: 0; color: #E8F9F0;">Інтерактивна картка</h3>
  <p style="color: #B8D4C5; margin-bottom: 0;">Ця картка реагує на наведення з акцентною межею та тінню.</p>
</div>

- наведення: акцентна межа (#34E1A1)
- тінь: акцентна тінь (0 4px 12px rgba(52, 225, 161, 0.2))
- перехід: плавні переходи

---

### Навігація

#### Верхня панель

<div style="background: #0B0D0C; border-bottom: 1px solid #1F2321; height: 64px; display: flex; align-items: center; padding: 0 24px; margin: 24px 0; border-radius: 8px 8px 0 0;">
  <div style="color: #E8F9F0; font-weight: 600;">GeniVerse</div>
  <div style="margin-left: auto; display: flex; gap: 16px;">
    <a href="#" style="color: #E8F9F0; text-decoration: none; padding: 8px 16px; border-radius: 6px;">Пункт меню</a>
    <a href="#" style="color: #34E1A1; text-decoration: none; padding: 8px 16px; border-radius: 6px; background: rgba(52, 225, 161, 0.15);">Активний</a>
  </div>
</div>

- фон: фон (#0B0D0C) з нижньою межею
- висота: 64px
- межа: 1px з кольором межі (#1F2321)

#### Бічна панель

<div style="display: flex; gap: 24px; margin: 24px 0;">
  <div style="background: #141716; border-right: 1px solid #1F2321; width: 280px; padding: 16px; border-radius: 8px;">
    <div style="color: #E8F9F0; font-weight: 600; margin-bottom: 16px;">Меню</div>
    <div style="padding: 12px 16px; border-radius: 6px; margin-bottom: 4px; color: #E8F9F0;">Пункт меню</div>
    <div style="padding: 12px 16px; border-radius: 6px; margin-bottom: 4px; background: rgba(52, 225, 161, 0.15); color: #34E1A1;">Активний пункт</div>
    <div style="padding: 12px 16px; border-radius: 6px; color: #B8D4C5;">Інший пункт</div>
  </div>
</div>

- фон: поверхня (#141716)
- межа: права межа з кольором межі (#1F2321)
- ширина: 280px, у згорнутому стані 64px
- елементи меню: відступ 12px 16px, радіус 6px, наведення з акцентним фоном, активний стан з акцентним фоном та текстом

---

### Типографічні компоненти

#### Заголовки

<div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 24px; margin: 24px 0;">
  <h1 style="font-family: 'Garet', sans-serif; font-weight: 600; letter-spacing: -0.02em; color: #E8F9F0; margin-top: 0;">H1 Заголовок Garet</h1>
  <h2 style="font-family: 'Garet', sans-serif; font-weight: 600; letter-spacing: -0.02em; color: #E8F9F0;">H2 Заголовок Garet</h2>
</div>

- шрифт: Garet
- вага: напівжирний (600)
- міжлітерний інтервал: -0.02em
- колір: основний колір тексту (#E8F9F0)

#### Основний текст

<div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 24px; margin: 24px 0;">
  <p style="font-family: 'Inter', sans-serif; font-weight: 400; line-height: 1.5; color: #E8F9F0; margin: 0;">Це приклад основного тексту з шрифтом Inter, звичайною вагою та висотою рядка 1.5 для оптимальної читабельності.</p>
</div>

- шрифт: Inter
- вага: звичайний (400)
- висота рядка: 1.5
- колір: основний колір тексту (#E8F9F0)

#### Посилання

<div style="background: #141716; border: 1px solid #1F2321; border-radius: 8px; padding: 24px; margin: 24px 0;">
  <a href="#" style="color: #34E1A1; text-decoration: none;">Посилання з акцентним кольором</a><br/>
  <a href="#" style="color: #58E6B2; text-decoration: underline;">Посилання при наведенні</a>
</div>

- колір: акцент (#34E1A1)
- наведення: світліший відтінок акценту (#58E6B2)
- підкреслення: при наведенні, за потреби

---

### Блоки коду

```javascript
function example() {
  return "Приклад коду";
}
```

- фон: поверхня (#141716)
- межа: межа (#1F2321)
- шрифт: JetBrains Mono
- тема: темна з акцентними виділеннями

---

### Таблиці

| Заголовок 1 | Заголовок 2 | Заголовок 3 |
|------------|-------------|-------------|
| Рядок 1    | Дані        | Значення    |
| Рядок 2    | Дані        | Значення    |
| Рядок 3    | Дані        | Значення    |

- заголовок: фон поверхні (#141716)
- рядки: чергування фону поверхні
- межі: колір межі (#1F2321)
- наведення: акцентний фон з низькою непрозорістю

---

## Патерни макету

### Система сітки

12-колонкова сітка:

- максимальна ширина: 1280px
- проміжок: 24px
- точки перелому:
  - мобільний: < 768px
  - планшет: 768px–1024px
  - десктоп: > 1024px

### Розміри контейнерів

- малий: до 640px
- середній: до 960px
- великий: до 1280px
- повний: 100%

### Патерни відступів

- відступ розділу: 64px вертикально
- відступ компонента: 32px вертикально
- відступ елемента: 16px вертикально
- внутрішній відступ: 8px горизонтально

---

## Доступність

### Контраст кольорів

- текст на фоні: мінімальне співвідношення 4.5:1
- великий текст: мінімальне співвідношення 3:1
- інтерактивні елементи: мінімальне співвідношення 3:1

### Стани фокусу

- кільце фокусу: 2px суцільний акцентний колір (#34E1A1)
- зміщення фокусу: 2px
- навігація з клавіатури: всі інтерактивні елементи доступні

### Підтримка екранних читачів

- семантичний HTML для базових компонентів
- aria-атрибути для складних компонентів
- альтернативний текст для зображень
- коректні орієнтири та структури сторінки

---

## Адаптивний дизайн

### Підхід mobile-first

Дизайн проєктується від мобільних екранів і масштабується до більших.

### Брейкпоінти

- мобільний: до 768px
- планшет: 768px–1024px
- десктоп: понад 1024px

### Адаптивні компоненти

- навігація переходить у гамбургер-меню на мобільних
- таблиці стають прокручуваними або відображаються у картковому форматі
- форми оптимізуються для мобільних пристроїв

---

## Темна тема

Всі компоненти підтримують темну тему з коректними контрастами та станами.

**Перемикання теми:**

- автоматичне визначення системних налаштувань
- ручне перемикання користувачем
- збереження вибору користувача

---

## Анімації та переходи

### Принципи анімації

- тривалість: 200–300 ms
- easing: природні криві згладжування
- мета: анімації підсилюють UX і не відволікають від навчання

### Типи анімацій

- переходи між станами компонентів
- індикатори завантаження та скелетони
- відгук на дії користувача
- мікровзаємодії для підтвердження взаємодій

---

## Патерни взаємодії в XR

- погляд як метод вибору в XR-сценаріях
- вказівка та підтвердження дії
- захоплення та маніпуляції об'єктами
- жести як окремий тип введення за підтримки пристрою

---

## Впровадження

### CSS-змінні

Дизайн-токени доступні як CSS-змінні для темування та налаштування.

### Бібліотека компонентів

React-компоненти впроваджують систему дизайну та використовуються у вебінтерфейсі платформи.

### Інструменти дизайну

Figma-файли та бібліотеки компонентів підтримуються для узгодженості рішень і швидкої розробки.

---

## Настанови з використання

- використовуйте стандартні компоненти для послідовності
- налаштовуйте компоненти лише за потреби
- завжди враховуйте доступність
- дотримуйтеся шкал відступів та типографіки

---

## Найкращі практики

- послідовність: використовуйте компоненти системи дизайну
- доступність: перевіряйте контраст, фокус і навігацію з клавіатури
- продуктивність: оптимізуйте компоненти та анімації
- адаптивність: перевіряйте всі критичні сценарії на різних екранах
