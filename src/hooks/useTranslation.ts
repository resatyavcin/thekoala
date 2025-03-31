import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import en from "../constants/en.json";
import tr from "../constants/tr.json";

const translations: Record<string, Record<string, string>> = { en, tr };

const useTranslation = () => {
  const language = useSelector(
    (state: RootState) => state.language.currentLanguage
  );

  return {
    t: translations[language] || translations.tr,
    currentLang: language,
  };
};

export default useTranslation;
