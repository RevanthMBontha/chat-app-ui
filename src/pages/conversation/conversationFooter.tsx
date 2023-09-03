import { BiSend } from 'react-icons/bi';
import { Input } from '../../components/input';
export function ConversationFooter() {
  return (
    <div className="flex justify-between items-center w-full h-[80px] p-4">
      <Input placeholder="Type your message..." inputStyle="bg-white focus:bg-white h-12" />
      <button className="flex justify-start items-center p-2 bg-[#0077b6] hover:bg-[#03045e] rounded-full transition-colors duration-200 ease-in-out">
        {<BiSend className="text-white pl-1" size={30} />}
      </button>
    </div>
  );
}
