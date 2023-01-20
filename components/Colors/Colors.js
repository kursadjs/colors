import styles from './index.module.css'
import getContrastYIQ from '../../helper/contrast'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Colors = ({ children, grid, ...props }) => {
  return (
    <article className={`${styles.article} ${styles[grid]}`} {...props}>
      {children}
    </article>
  )
}

Colors.Section = function Section({ title, children, ...props }) {
  return (
    <section className={styles.section} {...props}>
      <div className={styles.pallette}>{children}</div>
      <h3 className={styles.title}>{title}</h3>
    </section>
  )
}

Colors.Item = function Item({ data, ...props }) {
  // Redux Store
  const { active } = useSelector((state) => state.settings.colorFormat)
  const [isCopy, setIsCopy] = useState(false)

  const { hex, rgb } = data

  const clipboard = (color) => {
    if (!isCopy) {
      setIsCopy(true)
      navigator.clipboard.writeText(color)

      setTimeout(() => {
        setIsCopy(false)
      }, 1000)
    }
  }

  return (
    <>
      <div
        className={styles.item}
        style={{ '--bg': `#${hex}`, '--ct': getContrastYIQ(hex) }}
        onClick={() => clipboard(active === 'hex' ? hex : rgb)}
        {...props}
      >
        <p>Copy</p>
      </div>
      {isCopy && <Colors.Copied data={data} />}
    </>
  )
}

Colors.Copied = function Copied({ data, ...props }) {
  // Redux Store
  const { active } = useSelector((state) => state.settings.colorFormat)
  const { soundEffect } = useSelector((state) => state.settings)
  const { hex, rgb } = data
  return (
    <div
      className={styles.copied}
      style={{
        '--bg': `#${hex}`,
        '--ct': getContrastYIQ(hex),
        '--zt': getContrastYIQ(hex) === 'black' ? 'white' : 'black'
      }}
      {...props}
    >
      <div className={styles.container}>
        <h1>Copied!</h1>
        <p>{active === 'hex' ? hex : rgb.join(',')}</p>
      </div>

      {soundEffect === 'on' && (
        <audio autoPlay className={styles.sound}>
          <source src="/copy.mp3" type="audio/mpeg" />
        </audio>
      )}
    </div>
  )
}

export default Colors
