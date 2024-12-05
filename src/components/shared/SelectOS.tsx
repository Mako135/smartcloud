import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function SelectOS({ version }: { version: string[] }) {
  return (
    <Select>
      <SelectTrigger className="border-0 shadow-none focus:ring-0 text-md inline-flex gap-2 items-center w-auto max-w-[250px]">
        <SelectValue placeholder={version[0]} />
      </SelectTrigger>
      <SelectContent className="w-auto">
        <SelectGroup>
          {version.map((v) => (
            <SelectItem value={v} key={v} className="text-md font-medium">
              {v}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
