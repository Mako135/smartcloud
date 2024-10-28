import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";

interface Props {
  label: string;
  increaseData: () => void;
  decreaseData: () => void;
  data: number;
  setData: (data: number) => void;
  min: number;
  max: number;
}
const InputIaaS = ({
  label,
  data,
  setData,
  increaseData,
  decreaseData,
  min,
  max,
}: Props) => {
  return (
    <div className="col-span-2">
      <label htmlFor="cpu" className="font-bold">{label}</label>
      <div className="flex items-center relative mt-5">
        <p className="absolute -top-[19px] text-[12px] left-2 font-bold">
          {min}
        </p>
        <button className="absolute left-3" onClick={decreaseData}>
          <Minus className="h-4 w-4" />
        </button>
        <Input
          id="cpu"
          value={data}
          className="text-center px-6 focus:outline-0 font-bold"
          type="number"
          onChange={(e) => setData(Number(e.target.value))}
        />
        <button className="absolute right-3" onClick={increaseData}>
          <Plus className="h-4 w-4" />
        </button>
        <p className="absolute -top-[19px] text-[12px] right-2 font-bold">
          {max}
        </p>
      </div>
    </div>
  );
};

export default InputIaaS;
