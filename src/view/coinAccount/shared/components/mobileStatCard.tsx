export default function  MobileStatCard ({ icon: Icon, title, value, subtitle, color = "blue" }: any)  {
    const colors: any = {
      blue: "from-blue-500 to-blue-600",
      gray: "from-gray-700 to-gray-800",
      black: "from-gray-800 to-gray-900"
    };

    const selectedColor: any = color === "green" || color === "purple" || color === "orange" || color === "red" ? "blue" : color;

    return (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${colors[selectedColor] || colors.blue} flex items-center justify-center`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
      </div>
    );
  };