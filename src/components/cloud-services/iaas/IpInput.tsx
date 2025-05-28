import { useIaasStore } from "@/store/iaasStore";
import InputIaaS from "./InputIaaS";
import { useLocale } from "@/lib/useLocale";

const translations: Record<"ru" | "uz", { label: string }> = {
  ru: { label: "Количество IP-адресов" },
  uz: { label: "IP-manzillar soni" },
};

const IpInput = () => {
  const { ip, increaseIp, decreaseIp, setIp } = useIaasStore();
  const { currentLocale } = useLocale();
  
  return (
    <InputIaaS
      label={translations[currentLocale].label}
      data={ip}
      setData={setIp}
      increaseData={increaseIp}
      decreaseData={decreaseIp}
      min={1}
      max={32}
    />
  );
};
export default IpInput;
