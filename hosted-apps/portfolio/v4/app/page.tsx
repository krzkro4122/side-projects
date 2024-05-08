import { Body } from "./Body";
import { Header } from "./Header";

export default function Home() {
  return (
    <div className="bg-white h-svh">
      <Header className="border-b-2 h-[10svh]" />
      <Body className="h-[90svh] p-5 overflow-hidden" />
    </div>
  );
}
