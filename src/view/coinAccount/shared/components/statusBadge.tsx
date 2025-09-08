export default function   StatusBadge  ({ label, type = "default" }: any)  {
    const colors: any = {
      success: "bg-blue-50 text-blue-700 border-blue-200",
      warning: "bg-gray-100 text-gray-700 border-gray-200",
      danger: "bg-gray-800 text-white border-gray-700",
      default: "bg-gray-100 text-gray-700 border-gray-200"
    };
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${colors[type]}`}>
        {label}
      </span>
    );
  };