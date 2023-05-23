import React, { useEffect, useState } from 'react'

function avisarAPI() {
  console.log('Lista salva!')
}

const UseEffectstoma: React.FC = () => {
  const [list, setList] = useState<string[]>([])

  useEffect(() => {
    avisarAPI()
  }, [list])

  function addToList() {
    setList((state) => [...state, 'Novo item'])
  }

  return (
    <div>
      <ul>
        {list.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={addToList}>add to list</button>
    </div>
  )
}

export default UseEffectstoma
