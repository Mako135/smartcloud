import { useIaasStore } from "@/store/iaasStore";
import InputIaaS from "./InputIaaS";
import { useLocale } from "@/lib/useLocale";

const translations: Record<"ru" | "uz", { label: string }> = {
  ru: { label: "Объем диска, ГБ" },
  uz: { label: "Disk hajmi, GB" },
};

const StorageInput = () => {
  const { storage, increaseStorage, decreaseStorage, setStorage } =
    useIaasStore();
  
 const { currentLocale } = useLocale();
  return (
    <InputIaaS
      label={translations[currentLocale].label}
      data={storage}
      setData={setStorage}
      increaseData={increaseStorage}
      decreaseData={decreaseStorage}
      min={60}
      max={8190}
    />
  );
};

export default StorageInput;
