import React, { useState } from 'react'

// import { Container } from './styles';

const UseEffectstoma: React.FC = () => {
  const [list, setList] = useState<string[]>([])

  function addToList() {
    setList((state) => [...state, 'Novo item'])
  }

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={addToList}>add to list</button>
    </div>
  )
}

export default UseEffectstoma
