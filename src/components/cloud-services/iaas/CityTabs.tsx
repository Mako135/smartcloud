import { Tabs, TabsList, TabsTrigger } from "@/components/ui";
import { useLocale } from "@/lib/useLocale";
import { getTranslations } from "@/utils/i18n";

const translations: Record<"ru" | "uz", { label: string }> = {
  ru: { label: "Расположение" },
  uz: { label: "Joylashuv" },
};

export const CityTabs = () => {
  const { currentLocale } = useLocale();
  const t = getTranslations(currentLocale, "IaaS");

  return (
    <div className="col-span-2">
      {translations[currentLocale].label}
      <Tabs defaultValue="ssd" className="mt-5">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="ssd">{t.city1}</TabsTrigger>
          <TabsTrigger value="hdd">{t.city2}</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
