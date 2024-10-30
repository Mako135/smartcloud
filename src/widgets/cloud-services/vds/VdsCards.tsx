import VdsCard from "@/components/cloud-services/vds/VdsCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { vdsDataHdd, vdsDataSsd } from "@/lib/data/vdsData";

export default function VdsCards() {
  return (
    <Tabs defaultValue="ssd" className="flex flex-col my-40">
      <TabsList className="w-full  grid grid-cols-2 max-w-[400px] mb-10 mx-auto">
        <TabsTrigger value="ssd">SSD</TabsTrigger>
        <TabsTrigger value="hdd">HDD</TabsTrigger>
      </TabsList>
      <TabsContent value="ssd">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vdsDataSsd.map((vds) => (
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
          {vdsDataHdd.map((vds) => (
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
  );
}
