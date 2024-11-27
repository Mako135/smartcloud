import SelectOS from "./SelectOS";

type Props = {
  title: string;
  version: string[] | string;
  icon: string;
};

const OsCard = ({ title, version, icon }: Props) => {
  const isVersionArray = Array.isArray(version);
  return (
    <label className="cursor-pointer flex flex-col items-center justify-center border rounded-lg p-4 h-40 transition hover:border-blue-500 hover:shadow-lg">
      <img height={128} src={icon} alt={title} className="h-10 mb-3" />
      <h3 className="text-md font-semibold">{title}</h3>
      {isVersionArray ? (
        <SelectOS version={version} />
      ) : (
        <span className="text-sm mt-2">{version}</span>
      )}
    </label>
  );
};

export default OsCard;
