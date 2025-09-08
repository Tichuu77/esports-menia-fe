
export default function SkeletonCard(){
    return (  
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 animate-pulse">
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-xl bg-gray-200"></div>
      </div>
      <div>
        <div className="h-4 bg-gray-200 rounded mb-2 w-16"></div>
        <div className="h-8 bg-gray-200 rounded w-12"></div>
      </div>
    </div>
    )
}