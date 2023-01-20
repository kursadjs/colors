import styles from './index.module.css'
import ColorFormat from '@/components/Navbar/ColorFormat'
import Picker from '@/components/Navbar/Picker'
import SoundEffect from '@/components/Navbar/SoundEffect'

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
