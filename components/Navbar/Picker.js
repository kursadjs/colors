import styles from '@/components/Navbar/index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { TwitterPicker } from 'react-color'
import { changeColor } from '@/stores/settings'

const Picker = () => {
  const { color } = useSelector((state) => state.settings)
  const dispatch = useDispatch()

  return (
    <div tabIndex={0} className={`${styles.box} ${styles.picker}`}>
      <div className={styles.top}>
        <span className={styles.cover} style={{ backgroundColor: color }} />
        <div className={styles.description}>
          <p>{color.toString().toUpperCase()}</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <TwitterPicker
          color={color}
          onChange={(c) => dispatch(changeColor(c.hex))}
          width={'100%'}
          colors={[
            '#e74c3c',
            '#e67e22',
            '#f1c40f',
            '#cddc39',
            '#2ecc71',
            '#1abc9c',
            '#2196f3',
            '#3f51b5',
            '#673ab7',
            '#9b59b6',
            '#e91e63',
            '#34495e',
            '#95a5a6',
            '#ecf0f1'
          ]}
        />
      </div>
    </div>
  )
}

export default Picker
