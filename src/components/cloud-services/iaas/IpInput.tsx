import { useIaasStore } from "@/store/iaasStore";
import InputIaaS from "./InputIaaS";

const IpInput = () => {
  const { ip, increaseIp, decreaseIp, setIp } = useIaasStore();
  return (
    <InputIaaS
      label="Количество IP-адресов"
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
