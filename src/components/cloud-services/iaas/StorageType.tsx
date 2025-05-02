import { Tabs, TabsList, TabsTrigger } from "@/components/ui";
import { useIaasStore } from "@/store/iaasStore";
import { useState, useEffect } from "react";

const translations: Record<"ru" | "uz", { label: string }> = {
  ru: { label: "Тип диска" },
  uz: { label: "Disk turi" },
};
const StorageType = () => {
  const { type, setType } = useIaasStore();
  const [currentLocale, setCurrentLocale] = useState<"ru" | "uz">("ru");

  useEffect(() => {
    setCurrentLocale(window.location.pathname.startsWith("/uz") ? "uz" : "ru");
  }, []);

  const onTabChange = (value: string) => {
    if (value === "ssd" || value === "hdd") {
      setType(value);
    }
  };

  return (
    <div className="col-span-2">
      {translations[currentLocale].label}
      <Tabs
        defaultValue="ssd"
        value={type}
        onValueChange={onTabChange}
        className="mt-5"
      >
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="ssd">SSD</TabsTrigger>
          <TabsTrigger value="hdd">HDD</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default StorageType;
