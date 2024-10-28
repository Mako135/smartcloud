import { useIaasStore } from "@/store/iaasStore";
import InputIaaS from "./InputIaaS";

const StorageInput = () => {
  const { storage, increaseStorage, decreaseStorage, setStorage } =
    useIaasStore();
  return (
    <InputIaaS
      label="Объем диска, ГБ"
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
