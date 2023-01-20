import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeColorFormat } from '@/stores/settings'
import styles from './index.module.css'
import { Copy } from '@/components/icons'

const ColorFormat = () => {
  // Redux Store
  const { active, list } = useSelector((state) => state.settings.colorFormat)
  const dispatch = useDispatch()

  //   localStorage kontrolü
  useEffect(() => {
    const copyFormat = localStorage.getItem('copyFormat')

    if (!!copyFormat) {
      dispatch(changeColorFormat(copyFormat))
    } else {
      dispatch(changeColorFormat('hex'))
    }
  }, [])

  return (
    <div
      className={styles.box}
      onClick={() => {
        dispatch(changeColorFormat(active === 'hex' ? 'rgb' : 'hex'))
      }}
      title={`Copy Format`}
    >
      <div className={styles.top}>
        <div className={styles.cover}>
          <Copy />
        </div>
        <div className={styles.description}>
          <p>{active?.toUpperCase()}</p>
        </div>
      </div>
    </div>
  )
}

export default ColorFormat
