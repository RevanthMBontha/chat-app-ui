import { ConversationHeader } from './conversationHeader';
import { ConversationBody } from './conversationBody';
import { ConversationFooter } from './conversationFooter';
export function Conversation() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-initial">
        <ConversationHeader />
      </div>
      <div className="flex-grow min-h-0 overflow-y-auto bg-gray-200 rounded-2xl rounded-b-none p-2 mx-4">
        <div className="">
          <ConversationBody />
        </div>
      </div>
      <div className="flex-grow-0 bg-gray-200 rounded-2xl rounded-t-none p-2 mx-4 mb-4">
        <ConversationFooter />
      </div>
    </div>
  );
}
