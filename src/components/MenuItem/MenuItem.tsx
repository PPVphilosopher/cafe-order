import { Menu } from 'helpers'
import './style.scss'

type Props = Menu & {
  amount: number
  onClick: () => void
}

export const MenuItem = ({ id, name, price, amount, onClick }: Props) => (
  <div className='MenuItem'>
    <button id={id} className='MenuItem__button' onClick={onClick}>
      <span>{name}</span>
      <span>{price} yen</span>
    </button>
    <div id={`${id}-count`} className='MenuItem__count'>
      {amount}
    </div>
  </div>
)
