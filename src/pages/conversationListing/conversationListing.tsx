import { ConversationListingHeader } from './conversationListingHeader';
import { ConversationListingBody } from './conversationListingBody';

export function ConversationListing() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-initial">
        <ConversationListingHeader />
      </div>
      <div className="border-t border-2 border-gray-200 mx-4"></div>
      <div className="flex-grow min-h-0 overflow-y-auto">
        <ConversationListingBody />
      </div>
    </div>
  );
}
