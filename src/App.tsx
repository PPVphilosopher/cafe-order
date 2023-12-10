import { MenuItem } from 'components'
import { ALL_MENU } from 'helpers'
import { useState } from 'react'
import './App.scss'

const App = () => {
  const [amount, setAmount] = useState<number[]>(
    new Array(ALL_MENU.length).fill(0)
  )

  const onMenuClick = (index: number) => {
    setAmount((prev) => prev.map((a, i) => (i === index ? a + 1 : a)))
  }

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
    </div>
  )
}

export default App
