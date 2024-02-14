import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useContacts } from "@/contexts/contactsProvider";
import { useConversations } from "@/contexts/conversationsProvider";

// New {currentTab == CONVERSATIONS_KEY ? "Conversation" : "Contact"}

export default function CreateContactModal() {
  const [open, setOpen] = useState(false);
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  function handleCheckboxChange(contactId) {
    setSelectedContactIds((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
        return [...prevSelectedContactIds, contactId];
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    createConversation(selectedContactIds);

    setOpen(false);
  };

  return (
    <Dialog className="max-w-10" open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="border border-border border-solid text-md p-4">
          New Conversation
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Conversation</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Cupiditate, facilis.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {contacts.map((contact) => (
            <div key={contact.id} className="flex flex-row gap-3 my-1">
              <Checkbox
                id={contact.id}
                onCheckedChange={() => handleCheckboxChange(contact.id)}
              />
              <Label htmlFor={contact.id}>{contact.name}</Label>
            </div>
          ))}
          <Button type="submit" className="mt-6 w-30 md:ml-auto">
            Create Conversation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
