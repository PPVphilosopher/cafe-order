import { Menu } from 'helpers'
import './style.scss'

type Props = Menu & {
  amount: number
  onClick: () => void
}

export const MenuItem = ({ id, name, price, amount, onClick }: Props) => (
  <button id={id} className='MenuItem' onClick={onClick}>
    <span>{name}</span>
    <span>{price} yen</span>

    <div id={`${id}-count`} className='MenuItem__count'>
      {amount}
    </div>
  </button>
)
