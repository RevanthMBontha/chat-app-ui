import { Message } from '../../components/message';

export function ConversationBody() {
  return (
    <div className="h-full w-full">
      <Message self={false} />
      <Message self={true} />
      <Message self={false} />
      <Message self={false} />
      <Message self={true} />
      <Message self={false} />
      <Message self={true} />
      <Message self={false} />
      <Message self={true} />
      <Message self={false} />
    </div>
  );
}
