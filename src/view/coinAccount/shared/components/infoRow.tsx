export default function   InfoRow  ({ icon: Icon, label, value, color = "gray" }: any)  {
    const iconColors: any = {
      gray: "text-gray-500",
      blue: "text-blue-500",
      black: "text-gray-800"
    };

    return (
      <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
        <div className="flex items-center gap-3">
          <Icon className={`w-5 h-5 ${iconColors[color]}`} />
          <span className="text-sm font-medium text-gray-700">{label}</span>
        </div>
        <span className="text-sm font-semibold text-gray-900">{value}</span>
      </div>
    );
  };