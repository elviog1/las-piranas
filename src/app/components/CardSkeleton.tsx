export default function CardSkeleton() {
    return (
      <div className="border-2 overflow-hidden animate-pulse">
        <div className="bg-gray-300 h-[300px] w-full" />
        <div className="bg-gray-400 h-10 w-full" />
        <div className="p-4">
          <div className="bg-gray-300 h-4 w-1/2 rounded" />
        </div>
      </div>
    );
  }
  