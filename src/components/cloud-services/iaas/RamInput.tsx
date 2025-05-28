import { useIaasStore } from "@/store/iaasStore";
import InputIaaS from "./InputIaaS";
import { useLocale } from "@/lib/useLocale";

const translations: Record<"ru" | "uz", { label: string }> = {
  ru: { label: "Объем RAM, ГБ" },
  uz: { label: "RAM hajmi, GB" },
};

const RamInput = () => {
  const { ram, increaseRam, decreaseRam, setRam } = useIaasStore();
  const { currentLocale } = useLocale();

  return (
    <InputIaaS
      label={translations[currentLocale].label}
      data={ram}
      setData={setRam}
      increaseData={increaseRam}
      decreaseData={decreaseRam}
      min={4}
      max={256}
    />
  );
};

export default RamInput;
