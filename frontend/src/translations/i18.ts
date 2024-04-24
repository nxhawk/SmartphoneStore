import i18next from "i18next";
import global_en from "./en/global.json";
import global_vi from "./vi/global.json";
import global_ch from "./ch/global.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: localStorage.getItem("language")?.replace('"','').replace('"','')??"vi", // language to use
  resources: {
    en: {
      global: global_en,
    },
    vi: {
      global: global_vi,
    },
    ch: {
      global:global_ch,
    }
  },
});

export default i18next;