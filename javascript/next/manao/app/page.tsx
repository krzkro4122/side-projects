import Footer from "@/components/Footer";
import Panel from "@/components/Panel";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col text-2xl">
      <header>Hello</header>
      <div className="grid h-fit place-content-center flex-auto">
        <Panel />
        <Button>Click me</Button>
      </div>
      <Footer />
    </div>
  );
}
