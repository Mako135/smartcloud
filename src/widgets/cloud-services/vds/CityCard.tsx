import { Button, Tabs, TabsList, TabsTrigger } from "@/components/ui";
import { useLocale } from "@/lib/useLocale";
import { getTranslations } from "@/utils/i18n";

const translations: Record<
  "ru" | "uz",
  {
    label: string;
    city1: string;
    city2: string;
  }
> = {
  ru: {
    label: "Размещайте виртуальные серверы в двух зонах доступности",
    city1: "Карасу",
    city2: "Юнусабад",
  },
  uz: {
    label: "Bizning serverlar ikkita shaharni egallaydi",
    city1: "Karasu",
    city2: "Yunusobod",
  },
};

export const CityCard = () => {
  const { currentLocale } = useLocale();
  const t = translations[currentLocale];

  return (
    <div className="w-full h-full px-6 py-4 flex flex-col justify-between items-center shadow-lg rounded-lg border border-secondary">
      <div>
        <h3 className="text-4xl"> {t.label}</h3>
      </div>
      <Tabs defaultValue="ssd" className="w-full">
        <TabsList className="h-auto w-full">
          <TabsTrigger value="ssd" className="w-full">
            <span className="text-2xl">{t.city1}</span>
          </TabsTrigger>
          <TabsTrigger value="hdd" className="w-full">
            <span className="text-2xl">{t.city2}</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
