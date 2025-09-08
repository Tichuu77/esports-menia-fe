
export default function SkeletonDesktopCard() {

    return (
        <div className="p-6 rounded-lg border-2 border-gray-200 animate-pulse">
            <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded mb-2 w-20"></div>
                    <div className="h-8 bg-gray-200 rounded w-16"></div>
                </div>
            </div>
        </div>
    );
}