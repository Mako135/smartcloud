import { useIaasStore } from "@/store/iaasStore";
import InputIaaS from "./InputIaaS";

const BackupInput = () => {
  const { backup, increaseBackup, decreaseBackup, setBackup } = useIaasStore();
  return (
    <InputIaaS
      label="Резервное копирование, ГБ"
      data={backup}
      setData={setBackup}
      increaseData={increaseBackup}
      decreaseData={decreaseBackup}
      min={0}
      max={8190}
    />
  );
};

export default BackupInput;
