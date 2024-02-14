import { useContacts } from "@/contexts/contactsProvider";

export default function Contacts() {
  const { contacts } = useContacts();

  return (
    <div>
      {contacts.map((contact) => {
        contact;
      })}
    </div>
  );
}
