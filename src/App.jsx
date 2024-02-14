import "./App.css";
import Login from "@/components/login";
import Dashboard from "@/components/dashboard";
import useLocalStorage from "./hooks/useLocalStorage";
import { ThemeProvider } from "@/components/theme-provider";
import { ContactsProvider } from "@/contexts/contactsProvider";
import { ConversationsProvider } from "@/contexts/conversationsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );

  return (
    <ThemeProvider defaultTheme="system" storageKey="whatsapp-clone-ui-theme">
      {id ? dashboard : <Login onIdSubmit={setId} />}
    </ThemeProvider>
  );
}

export default App;
