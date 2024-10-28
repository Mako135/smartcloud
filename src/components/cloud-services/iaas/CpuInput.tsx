import { useIaasStore } from "@/store/iaasStore";
import InputIaaS from "./InputIaaS";

const CpuInput = () => {
  const { cpu, increaseCpu, decreaseCpu, setCpu } = useIaasStore();
  return (
    <InputIaaS
      label="Количество vCPU"
      data={cpu}
      setData={setCpu}
      increaseData={increaseCpu}
      decreaseData={decreaseCpu}
      min={2}
      max={128}
    />
  );
};

export default CpuInput;
