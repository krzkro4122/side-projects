import { Body } from "./Body";
import { Header } from "./Header";

export default function Home() {
  return (
    <div className="bg-white h-svh">
      <Header className="border-b-2 h-[10svh]" />
      <Body className="h-[90svh] p-2 xl:p-2 flex flex-col gap-2 overflow-auto" />
    </div>
  );
}
