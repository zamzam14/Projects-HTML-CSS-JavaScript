# Responsive Profile Card | بطاقة تعريف متجاوبة

<div align="center">

An interactive personal card that flips between a **profile** side and a **contact** side.
Built with vanilla HTML, CSS & JavaScript — zero external libraries.

🔗 **Live demo:** [zamzamissa-portfolio.vercel.app](https://zamzamissa-portfolio.vercel.app)

`العربية بالأسفل ⬇` · `English above`

</div>

---

## 🇬🇧 English

### ✨ Features
- 🔄 **3D flip** — the card rotates smoothly between both faces with `rotateY`.
- 📋 **Click to copy** — the email is copied automatically on click, with a fallback for older browsers.
- 🖼️ **Responsive background** — the image changes with screen size via a `<picture>` element.
- ⌨️ **Terminal-style cursor** — a blinking cursor like a code screen.
- ♿ **Accessible** — `aria-hidden` updates for both faces, `prefers-reduced-motion` support, and a clear focus outline.
- 🎨 **Easy theming** — all colors live in CSS variables in one place.

### 🛠️ Tech Stack
| | |
|---|---|
| **HTML5** | Page structure |
| **CSS3** | Styling, animation (`transform-style`, `backface-visibility`), CSS variables |
| **JavaScript (Vanilla)** | Flip logic + email copy |
| **JetBrains Mono** | Monospace font (Google Fonts) |

### 📁 Structure
```
.
├── index.html      # Card structure (front + back faces)
├── style.css       # Styling, animation & variables
├── script.js       # Flip + email copy
└── img/
    └── unnamed.jpg # Profile picture
```

### 🚀 Getting Started
No setup required — just:
```bash
git clone https://github.com/zamzam14/<repo-name>.git
cd <repo-name>
```
Then open `index.html` in your browser, or run a simple local server:
```bash
python -m http.server 8000
```

### 🎨 Customization
All colors are defined at the top of `style.css` inside `:root`:
```css
:root {
  --c1: #3c4245;   /* dark charcoal */
  --c2: #5f6769;   /* grey        */
  --c3: #719192;   /* teal grey   */
  --c4: #dfcdc3;   /* light beige */
}
```
Change these values to get a completely different look.

---

<div dir="rtl">

## 🇴🇲 العربية

### ✨ المميزات
- 🔄 **انقلاب ثلاثي الأبعاد** — البطاقة تدور بين الوجهين بحركة `rotateY` سلسة.
- 📋 **نسخ بضغطة** — الإيميل يُنسخ تلقائيًا عند الضغط، مع بديل للمتصفحات القديمة.
- 🖼️ **خلفية متجاوبة** — صورة تتغيّر حسب حجم الشاشة عبر عنصر `<picture>`.
- ⌨️ **مؤشّر يشبه الطرفية** — مؤشّر وامض على غرار شاشة الكود.
- ♿ **يراعي الوصولية** — تحديث `aria-hidden` للوجهين، دعم `prefers-reduced-motion`، وإطار تركيز واضح.
- 🎨 **ألوان قابلة للتعديل بسهولة** — كل الألوان في متغيّرات CSS مكان واحد.

### 🛠️ التقنيات
| | |
|---|---|
| **HTML5** | بنية الصفحة |
| **CSS3** | التصميم، الحركة (`transform-style`, `backface-visibility`)، متغيّرات CSS |
| **JavaScript (Vanilla)** | منطق الانقلاب ونسخ الإيميل |
| **JetBrains Mono** | خط مونوسبيس (Google Fonts) |

### 📁 هيكل الملفات
```
.
├── index.html      # بنية البطاقة (الوجه الأمامي + الخلفي)
├── style.css       # التصميم والحركة والمتغيّرات
├── script.js       # الانقلاب + نسخ الإيميل
└── img/
    └── unnamed.jpg # الصورة الشخصية
```

### 🚀 التشغيل
ما تحتاج أي إعدادات — فقط:
```bash
git clone https://github.com/zamzam14/<repo-name>.git
cd <repo-name>
```
ثم افتحي `index.html` في المتصفح مباشرة، أو شغّلي خادم محلي بسيط:
```bash
python -m http.server 8000
```

### 🎨 تغيير الألوان
كل الألوان معرّفة في أعلى ملف `style.css` داخل `:root`:
```css
:root {
  --c1: #3c4245;   /* dark charcoal */
  --c2: #5f6769;   /* grey        */
  --c3: #719192;   /* teal grey   */
  --c4: #dfcdc3;   /* light beige */
}
```
غيّري هذه القيم فقط لتحصلي على مظهر مختلف بالكامل.

</div>

---

## 👩‍💻 Author | المطوّرة

**Zamzam Issa** — Front-end Developer from Oman 🇴🇲

- GitHub: [@zamzam14](https://github.com/zamzam14)
- Portfolio: [zamzamissa-portfolio.vercel.app](https://zamzamissa-portfolio.vercel.app)

> "Turning ideas into functional apps." · "تحويل الأفكار إلى تطبيقات تعمل."