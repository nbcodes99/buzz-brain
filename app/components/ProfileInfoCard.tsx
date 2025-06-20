type ProfileInfoCardProps = {
  title: string;
  value: any;
};

export default function ProfileInfoCard({
  title,
  value,
}: ProfileInfoCardProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-zinc-800 shadow-sm rounded-md gap-y-1 sm:gap-x-2 py-3 px-4 w-full text-center sm:text-left">
      <p className="text-zinc-300 font-semibold whitespace-nowrap">
        <span className="block sm:hidden">{title}</span>
        <span className="hidden sm:inline">{title} →</span>
      </p>
      <p className="text-zinc-400 break-words text-sm w-full sm:w-auto">
        {value}
      </p>
    </div>
  );
}
