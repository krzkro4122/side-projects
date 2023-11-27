export default function Holder({ controls, onDrag }: any) {

    return (
        <div onDrag={onDrag} onClick={() => controls.use(10)} class="h-6 w-6 rounded-full bg-gray-700 outline outline-3 outline-white hover:scale-125 cursor-grab"></div>
    )
  }
