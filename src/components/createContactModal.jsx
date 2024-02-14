import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

import { useContacts } from "@/contexts/contactsProvider";

// New {currentTab == CONVERSATIONS_KEY ? "Conversation" : "Contact"}

export default function CreateContactModal() {
  const idRef = useRef();
  const nameRef = useRef();
  const { createContact } = useContacts();

  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    createContact(idRef.current.value, nameRef.current.value);

    setOpen(false);
  };

  return (
    <Dialog className="max-w-10" open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="border border-border border-solid text-md p-4">
          New Contact
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Contact</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Cupiditate, facilis.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="flex flex-col items-start gap-1">
            ID
            <Input type="text" ref={idRef} required />
          </label>
          <label className="flex flex-col items-start gap-1">
            Name
            <Input type="text" ref={nameRef} required />
          </label>
          <Button type="submit" className="mt-6 w-30 md:ml-auto">
            Create Contact
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
