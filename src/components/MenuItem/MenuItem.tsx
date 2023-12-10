import { Menu } from 'helpers'
import './style.scss'

type Props = Menu & {
  amount: number
  onSetAmount: (value: number) => void
}

export const MenuItem = ({ id, name, price, amount, onSetAmount }: Props) => (
  <button id={id} className='MenuItem' onClick={() => onSetAmount(amount + 1)}>
    <span>{name}</span>
    <span>{price} yen</span>

    <div id={`${id}-count`} className='MenuItem__badge'>
      {amount}
    </div>

    {amount > 0 && (
      <div
        className='MenuItem__badge MenuItem__badge--minus'
        onClick={(e) => {
          e.stopPropagation()
          onSetAmount(amount - 1)
        }}
      >
        -
      </div>
    )}
  </button>
)
