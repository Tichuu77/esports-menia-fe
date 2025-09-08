export default function   DesktopStatCard  ({ icon: Icon, title, value, subtitle, color = "blue" }: any)  {
    const colors: any = {
      blue: "bg-blue-50 border-blue-200",
      gray: "bg-gray-50 border-gray-200",
      black: "bg-gray-100 border-gray-300"
    };

    const iconColors: any = {
      blue: "text-blue-600",
      gray: "text-gray-600", 
      black: "text-gray-800"
    };

    const selectedColor: any = color === "green" || color === "purple" || color === "orange" || color === "red" ? "blue" : color;

    return (
      <div className={`p-6 rounded-lg border-2 ${colors[selectedColor] || colors.blue}`}>
        <div className="flex items-center gap-4">
          <Icon className={`w-8 h-8 ${iconColors[selectedColor] || iconColors.blue}`} />
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="text-3xl font-bold text-gray-800">{value}</p>
            {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
          </div>
        </div>
      </div>
    );
  };