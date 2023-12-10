import { ALL_MENU } from 'helpers'
import { MenuItem } from 'components'
import { useState, useMemo } from 'react'
import './App.scss'
import sum from 'lodash/sum'

const App = () => {
  const [amount, setAmount] = useState<number[]>(
    new Array(ALL_MENU.length).fill(0)
  )

  const onMenuClick = (index: number) => {
    setAmount((prev) => prev.map((a, i) => (i === index ? a + 1 : a)))
  }

  const total = useMemo(
    () => ({
      amount: sum(amount),
      price: sum(amount.map((a, i) => a * ALL_MENU[i].price)),
    }),
    [amount]
  )

  return (
    <div className='App'>
      <div className='App__menu-list'>
        {ALL_MENU.map((menu, i) => (
          <MenuItem
            key={menu.name}
            {...menu}
            amount={amount[i]}
            onClick={() => onMenuClick(i)}
          />
        ))}
      </div>
      <div className='App__summary'>
        <div>Your bill</div>
        <div className='App__summary__line' />
        <div>Items ordered : {total.amount}</div>
        <div>Total Price : {total.price} yen</div>
      </div>
    </div>
  )
}

export default App
