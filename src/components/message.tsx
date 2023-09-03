export function Message({ self }: { self: boolean }) {
  return (
    <div className={`flex ${self ? 'justify-end' : 'justify-start'} w-full h-fit`}>
      <div className="w-3/4 px-2 py-4">
        <div
          className={
            self
              ? 'bg-[#00b4d8] text-white p-2 mb-1 rounded-tl-lg rounded-tr-lg rounded-bl-lg'
              : 'bg-white p-2 mb-1 rounded-tl-lg rounded-tr-lg rounded-br-lg'
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius accumsan elit, et elementum nulla
          varius vel.
        </div>
        <div className={`flex ${self ? 'justify-end' : 'justify-start'} px-2 relative w-full`}>
          <div className="text-sm text-gray-600">23 Aug 2023, 8:00 PM</div>
        </div>
      </div>
    </div>
  );
}
