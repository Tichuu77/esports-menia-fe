export default function SkeletonInfoRow() {
    return (
        <div className="flex items-center justify-between py-3 border-b border-gray-100 animate-pulse">
            <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>
    );
}