import { useEffect } from 'react'
import styles from '@/components/Navbar/index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeSoundEffect } from '@/stores/settings'
import { Mute, Volume } from '@/components/Icons'

const SoundEffect = () => {
  const { soundEffect } = useSelector((state) => state.settings)
  const dispatch = useDispatch()

  //   localStorage kontrolü
  useEffect(() => {
    const soundEffect = localStorage.getItem('soundEffect')

    if (!!soundEffect) {
      dispatch(changeSoundEffect(soundEffect))
    } else {
      dispatch(changeSoundEffect('on'))
    }
  }, [])

  return (
    <>
      {soundEffect !== null && (
        <div
          className={styles.box}
          onClick={() =>
            dispatch(changeSoundEffect(soundEffect === 'on' ? 'off' : 'on'))
          }
          title={`Sound Effect`}
        >
          <div className={styles.top}>
            <div className={styles.cover}>
              {soundEffect === 'on' ? <Volume /> : <Mute />}
            </div>
            <div className={styles.description}>
              <p>{soundEffect === 'on' ? 'ON' : 'OFF'}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SoundEffect
