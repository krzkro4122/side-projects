import Chaser from "./components/Chaser";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-full w-full p-5 bg-yellow-500">
      <div className="w-max bg-white p-4 rounded-md">
        <h1 className="font-bold  text-center text-4xl text-black ">Hai Olaaaa 💗</h1>
      </div>
      <Chaser />
    </div>
  );
}
