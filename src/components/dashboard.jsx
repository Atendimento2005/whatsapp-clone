import Sidebar from "@/components/sidebar";

export default function Dashboard({ id }) {
  return (
    <main className="flex flex-row w-screen h-dvh justify-start">
      <Sidebar id={id} />
    </main>
  );
}
