import { useIaasStore } from "@/store/iaasStore";
import InputIaaS from "./InputIaaS";

const RamInput = () => {
  const { ram, increaseRam, decreaseRam, setRam } = useIaasStore();
  return (
    <InputIaaS
      label="Объем RAM, ГБ"
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
