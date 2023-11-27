import { createSignal } from 'solid-js'
import Holder from './Holder'
import Bar from './Bar'

export default function Slider() {
  const minValue = 0
  const maxValue = 100
  const [value, setValue] = createSignal(50)
  const [rotation, setRotation] = createSignal(0)

  const increase = (factor = 1) => {
    let target = value() + 1 * factor
    if (target >= maxValue) target = maxValue
    setValue(target)
  }

  const decrease = (factor = 1) => {
    let target = value() - 1 * factor
    if (target <= minValue) target = minValue
    setValue(target)
  }

  const follow = (event: MouseEvent) => {
    const a = event.x
    const c = event.y

    const b = Math.sqrt(
      Math.pow(a, 2) + Math.pow(c, 2) - 2 * a * c * Math.cos(90)
    )

    setRotation(
      Math.acos(
        (Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2))
        /
        (2 * b * c)
      )
    )
    console.log(a, c, rotation());
  }

  return (
    <div class='flex flex-col gap-5 h-auto justify-center items-center bg-gray-800'>
        <h1>Goofier slider</h1>
        <div
          class='flex gap-3'
          style={{
            rotate: `${rotation()}deg`
          }}
        >
          <Holder onDrag={follow} controls={{use: decrease}} />
          <Bar value={value} />
          <Holder onDrag={follow} controls={{use: increase}} />
        </div>
        <h2>Value: {value()}</h2>
    </div>
  )
}
