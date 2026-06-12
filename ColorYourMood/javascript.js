const content = {
  ar: {
    title: "مرحباً بك! 👋",
    subtitle: "خلّ الشاشة تحكي مزاجك",
    colorLabel: "اختر لونك المفضل 🎨",
    applyBtn: "تم ✓",
    langBtn: "EN",
    messages: [
      "ذوقك رائع! هذا اللون يعكس شخصيتك المميزة ✨",
      "اختيار جميل! الألوان تعبّر عما تشعر به بداخلك 🎨",
      "يبدو أن اليوم سيكون رائعاً بهذا اللون الجميل 🌟"
    ]
  },
  en: {
    title: "Welcome! 👋",
    subtitle: "Let the screen tell your mood",
    colorLabel: "Choose your favorite color 🎨",
    applyBtn: "Done ✓",
    langBtn: "عربي",
    messages: [
      "Great taste! This color reflects your unique personality ✨",
      "Beautiful choice! Colors express what you feel inside 🎨",
      "Looks like today is going to be amazing with this lovely color 🌟"
    ]
  }
};

let currentLang = 'ar';

const picker = document.getElementById('colorPicker');
const preview = document.getElementById('colorPreview');
const hexLabel = document.getElementById('colorHex');
const applyBtn = document.getElementById('applyBtn');

function getLuminance(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000;
}

function updateButtonColor(hex) {
  applyBtn.style.background = hex;
  applyBtn.style.boxShadow = `0 4px 15px ${hex}88`;
  applyBtn.style.color = getLuminance(hex) > 128 ? '#1a1a2e' : '#ffffff';
}

picker.addEventListener('input', () => {
  preview.style.backgroundColor = picker.value;
  hexLabel.textContent = picker.value;
  updateButtonColor(picker.value);
});

preview.style.backgroundColor = picker.value;
updateButtonColor(picker.value);

function toggleLang() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  const html = document.documentElement;
  const c = content[currentLang];

  html.setAttribute('lang', currentLang);
  html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

  document.getElementById('title').textContent = c.title;
  document.getElementById('subtitle').textContent = c.subtitle;
  document.getElementById('colorLabel').textContent = c.colorLabel;
  document.getElementById('applyBtn').textContent = c.applyBtn;
  document.getElementById('langBtn').textContent = c.langBtn;

  const box = document.getElementById('messageBox');
  box.classList.remove('visible');
}

function applyColor() {
  document.body.style.backgroundColor = picker.value;

  const msgs = content[currentLang].messages;
  const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
  const box = document.getElementById('messageBox');

  box.classList.remove('visible');
  setTimeout(() => {
    box.textContent = randomMsg;
    box.classList.add('visible');
  }, 100);
}
