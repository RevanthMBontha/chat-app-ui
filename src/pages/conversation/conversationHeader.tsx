import { BsThreeDotsVertical } from 'react-icons/bs';
export function ConversationHeader() {
  return (
    <div className="flex justify-between h-[80px] w-full py-2 px-4 items-center">
      <div className="flex gap-2 items-center">
        <div>
          <h1 className="text-2xl">John Doe</h1>
          <p className="text-sm text-gray-500">last seen at 8:05 PM</p>
        </div>
      </div>
      <div className="flex items-center h-fit p-2 hover:bg-gray-200 rounded-md">
        <BsThreeDotsVertical />
      </div>
    </div>
  );
}
