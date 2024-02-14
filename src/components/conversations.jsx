import { useConversations } from "@/contexts/conversationsProvider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Conversations() {
  const { conversations } = useConversations();

  return (
    <div className="flex flex-col items-center">
      {conversations.map((conversation, index) => (
        <>
          <Button
            key={index}
            variant="ghost"
            className="w-full h-16 rounded-none "
          >
            <span className="mr-auto ml-2">
              {conversation.recipients
                .map((recipient) => recipient.name)
                .join(", ")}
            </span>
          </Button>
          {index < conversations.length - 1 && (
            <Separator className="p-0 m-0" />
          )}
        </>
      ))}
    </div>
  );
}
