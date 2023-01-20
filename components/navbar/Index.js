import styles from './index.module.css'
import ColorFormat from '@/components/navbar/ColorFormat'
import Picker from '@/components/navbar/Picker'
import SoundEffect from '@/components/navbar/SoundEffect'

const Navbar = ({ noPicker }) => {
  return (
    <div className={styles.navbar}>
      {!noPicker && <Picker />}
      <ColorFormat />
      <SoundEffect />
    </div>
  )
}

export default Navbar
