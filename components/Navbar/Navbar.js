import styles from './index.module.css'
import ColorFormat from '@/components/Navbar/ColorFormat'
import Picker from '@/components/Navbar/Picker'
import SoundEffect from '@/components/Navbar/SoundEffect'
import { changeHeaderStatus } from '@/stores/settings'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = ({ noPicker }) => {
  // Redux Store
  const { headerStatus } = useSelector((state) => state.settings)
  const dispatch = useDispatch()

  return (
    <div className={styles.navbar}>
      <div className={styles.headerOpen}>
        <button onClick={() => dispatch(changeHeaderStatus(!headerStatus))}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {!noPicker && <Picker />}
      <ColorFormat />
      <SoundEffect />
    </div>
  )
}

export default Navbar
