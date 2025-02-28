import translationsRu from "@/locales/ru.json";
import translationsUz from "@/locales/uz.json";

type TranslationKeys = keyof typeof translationsRu;

export async function getTranslations(locale: "ru" | "uz", pageKey: TranslationKeys) {
  const translations = locale === "uz" ? translationsUz : translationsRu;
  return translations[pageKey] || {};
}
