import LocalJp from "localization/local-jp.json";
import LocalEn from "localization/local-en.json";
import { useEffect, useState } from "react";

const useLocalization = () => {
  const [lang, setLang] = useState("en");

  const strings = lang === "jp" ? LocalJp : LocalEn;

  useEffect(() => {
    console.log(lang);
  }, [strings]);

  return {
    ...strings,
    getLanguage: () => {
      return lang;
    },
    setLanguage: (lang) => setLang(lang),
  };
};

export default useLocalization;
