import { useState, useRef, useEffect } from 'react'

export const Counter = () => {
  const [count, setCount] = useState({ a: 0, b: 0, c: 0, d: 0 })

  const handleClick = (e) => {
    ref.current[e.target.name] += 1
  }

  const handleUpdate = () => {
    setCount({ ...ref.current })
  }

  const ref = useRef(null)

  useEffect(() => {
    ref.current = { a: 0, b: 0, c: 0, d: 0 }
  }, [])

  return (
    <>
      <button name="a" type="button" onClick={handleClick}>
        Click {count.a}
      </button>
      <button name="b" type="button" onClick={handleClick}>
        Click1 {count.b}
      </button>
      <button name="c" type="button" onClick={handleClick}>
        Click2 {count.c}
      </button>
      <button name="d" type="button" onClick={handleClick}>
        Click3 {count.d}
      </button>
      <button type="button" onClick={handleUpdate}>
        Update
      </button>
    </>
  )
}
