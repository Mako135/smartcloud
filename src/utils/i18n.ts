import translationsRu from "@/locales/ru.json";
import translationsUz from "@/locales/uz.json";

type TranslationKeys = keyof typeof translationsRu;

export type TranslationSection<K extends TranslationKeys> =
  (typeof translationsRu)[K];

export function getTranslations<K extends TranslationKeys>(
  locale: "ru" | "uz",
  pageKey: K
): TranslationSection<K> {
  const translations = locale === "uz" ? translationsUz : translationsRu;
  return translations[pageKey] as TranslationSection<K>;
}
