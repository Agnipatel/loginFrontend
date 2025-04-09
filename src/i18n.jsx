import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        gita: "Gita",
        chapters: "Chapters",
        login: "Login",
        signup: "Sign Up",
        switchToEnglish: "Switch to English",
        switchToHindi: "Switch to Hindi",
        title: "Welcome to Gita Website",
        description: "This is a bilingual website supporting English and Hindi.",
      },
    },
    hi: {
      translation: {
        home: "होम",
        gita: "गीता",
        chapters: "अध्याय",
        login: "लॉगिन",
        signup: "साइन अप",
        switchToEnglish: "अंग्रेजी में स्विच करें",
        switchToHindi: "हिंदी में स्विच करें",
        title: "गीता वेबसाइट में आपका स्वागत है",
        description: "यह एक द्विभाषी वेबसाइट है जो अंग्रेजी और हिंदी का समर्थन करती है।",
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
