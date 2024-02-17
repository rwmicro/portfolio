export default function Loading() {
  return (
    <div className="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}
