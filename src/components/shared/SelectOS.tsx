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
      <SelectTrigger className="border-0 shadow-none focus:ring-0 text-md">
        <SelectValue placeholder={version[0]} />
      </SelectTrigger>
      <SelectContent>
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
