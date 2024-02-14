import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Conversations from "@/components/conversations";
import Contacts from "@/components/contacts";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

import CreateContactModal from "@/components/createContactModal";
import CreateConversationModal from "@/components/createConversationModal";

export default function Sidebar({ id }) {
  const CONVERSATIONS_KEY = "conversations";
  const CONTACTS_KEY = "contacts";

  const [currentTab, setCurrentTab] = useState(CONVERSATIONS_KEY);

  const handleTabChange = (value) => {
    setCurrentTab(value);
  };

  return (
    <div className="h-dvh w-72 grid grid-rows-10 grid-cols-1 grid-flow-col border-border border border-solid">
      <Tabs
        defaultValue={CONVERSATIONS_KEY}
        className="row-span-8 flex flex-col"
        onValueChange={handleTabChange}
        id="tabs"
      >
        <div className="py-3">
          <TabsList>
            <TabsTrigger value={CONVERSATIONS_KEY}>Conversations</TabsTrigger>
            <TabsTrigger value={CONTACTS_KEY}>Contacts</TabsTrigger>
          </TabsList>
        </div>
        <ScrollArea className="h-min" id="scroll-area">
          <TabsContent value={CONVERSATIONS_KEY}>
            <Conversations />
          </TabsContent>
          <TabsContent value={CONTACTS_KEY}>
            <Contacts />
          </TabsContent>
        </ScrollArea>
      </Tabs>
      <div className="flex flex-row justify-center items-center row-span-1">
        {currentTab == CONVERSATIONS_KEY ? (
          <CreateConversationModal />
        ) : (
          <CreateContactModal />
        )}
      </div>
      <div className="row-span-1 border border-solid border-border flex flex-col justify-center">
        <p>
          Your ID: <span className="text-muted-foreground">{id}</span>
        </p>
      </div>
    </div>
  );
}
