import { ConversationListing } from './pages/conversationListing/conversationListing';
import { Conversation } from './pages/conversation/conversation';

export function PageLayout() {
  return (
    <div className="flex h-full">
      <div className="min-w-[200px] flex-initial w-1/4">
        <ConversationListing />
      </div>
      <div className="border-l border-2 border-gray-200 my-8"></div>
      <div className="flex-grow h-full">
        <Conversation />
      </div>
    </div>
  );
}
