import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIaasStore } from "@/store/iaasStore";

const StorageType = () => {
  const { type, setType } = useIaasStore();

  const onTabChange = (value: string) => {
    if (value === "ssd" || value === "hdd") {
      setType(value);
    }
  };

  return (
    <div className="col-span-2">
      Тип диска
      <Tabs
        defaultValue="account"
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
