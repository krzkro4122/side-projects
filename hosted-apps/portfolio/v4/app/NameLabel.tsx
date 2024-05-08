import { Age } from "./Age";

export function NameLabel() {
  return (
    <div className="text-black flex flex-col justify-between">
      <span className="font-semibold text-3xl">Krzysztof Król</span>
      <span className="font-normal text-xl">Software Engineer</span>
      <Age />
    </div>
  );
}
