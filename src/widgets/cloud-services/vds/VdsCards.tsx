import VdsCard from "@/components/cloud-services/vds/VdsCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { vdsDataHdd, vdsDataSsd } from "@/lib/data/vdsData";
import { vdsDataHddUZ, vdsDataSsdUZ } from "@/lib/dataUZ/vdsData";
import { CityCard } from "./CityCard";
import { useLocale } from "@/lib/useLocale";

const translations: Record<"ru" | "uz", { label: string }> = {
  ru: { label: "Доступные конфигурации" },
  uz: { label: "Mavjud konfiguratsiyalar" },
};

export default function VdsCards() {
  const { currentLocale } = useLocale();

  const vdsSsdData = currentLocale === "uz" ? vdsDataSsdUZ : vdsDataSsd;
  const vdsHddData = currentLocale === "uz" ? vdsDataHddUZ : vdsDataHdd;

  return (
    <div>
      <h1 className="text-center text-extra-large font-medium mb-10">
        {translations[currentLocale].label}
      </h1>
      <Tabs defaultValue="ssd" className="flex flex-col mb-dynamic40">
        <TabsList className="w-full grid grid-cols-2 max-w-[400px] mb-10 mx-auto">
          <TabsTrigger value="ssd">SSD</TabsTrigger>
          <TabsTrigger value="hdd">HDD</TabsTrigger>
        </TabsList>
        <TabsContent value="ssd">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CityCard />
            {vdsSsdData.map((vds) => (
              <VdsCard
                key={vds.title}
                title={vds.title}
                price={vds.price}
                cpu={vds.cpu}
                ram={vds.ram}
                storage={vds.storage}
                ip={vds.ip}
                internet={vds.internet}
                period={vds.period}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="hdd">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CityCard />
            {vdsHddData.map((vds) => (
              <VdsCard
                key={vds.title}
                title={vds.title}
                price={vds.price}
                cpu={vds.cpu}
                ram={vds.ram}
                storage={vds.storage}
                ip={vds.ip}
                internet={vds.internet}
                period={vds.period}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
