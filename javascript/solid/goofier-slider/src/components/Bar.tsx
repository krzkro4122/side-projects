export default function Bar({ value }: any) {
  return (
    <div class='h-5 w-128 bg-white rounded-lg relative top-0.5'>
        <div
            id="marker"
            class={'bg-red-700 w-9 h-9 rounded-full relative bottom-2'}
            style={{
                left: `${Math.ceil(value() * 0.3)}rem`,
            }}
        >
        </div>
    </div>
  )
}
