export function ChatTile() {
  return (
    <div className="flex w-full h-fit gap-2 justify-start items-center px-4 py-4 hover:bg-[#caf0f8]">
      <div className="flex items-center justify-center h-12 w-12 p-6 bg-[#0077b6] rounded-full text-white text-2xl">
        J{' '}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between w-full">
          <div className="text-black text-2xl">John Doe</div>
          <div className="flex items-center text-gray-600 text-md">8:00 PM</div>
        </div>

        <div className="flex justify-between w-full ">
          <div className="text-gray-600">Lorem ipsum dolor sit...</div>
          <div className="flex items-center justify-center text-white bg-[#00b4d8] w-6 h-6 rounded-full">2</div>
        </div>
      </div>
    </div>
  );
}
