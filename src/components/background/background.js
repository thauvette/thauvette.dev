import React, { useEffect, useState } from 'react'
import * as styles from './background.module.scss'

const Background = () => {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  })
  useEffect(() => {
    const track = e => {
      setMouse({
        x: e.x,
        y: e.y,
      })
    }

    window.addEventListener('mousemove', track)

    return () => {
      window.removeEventListener('mousemove', track)
    }
  }, [])

  const bg = `radial-gradient(300px at ${mouse.x}px ${mouse.y}px, rgba(7,15,28, 0), rgba(7,15,28, 1))`

  // radial-gradient(600px at 1099px 516px, rgba(29, 78, 216, 0.15), transparent 80%);

  return (
    <div
      className={styles.background}
      bg={bg}
      style={{
        background: bg,
      }}
    />
  )
}

export default Background
