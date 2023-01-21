import styles from './index.module.css'
import {
  ColorPallette,
  ColorPalletteFill,
  Github,
  Instagram,
  Linkedin,
  Logo,
  ThemeGenerator,
  ThemeGeneratorFill,
  ToneGenerator,
  ToneGeneratorFill
} from '@/components/Icons'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeHeaderStatus } from '@/stores/settings'

const Header = () => {
  // Redux Store
  const { headerStatus } = useSelector((state) => state.settings)
  const dispatch = useDispatch()

  const router = useRouter()
  const active = router.asPath

  const menu = [
    {
      name: 'color-pallette',
      title: 'Color Pallette',
      icon: <ColorPallette />,
      iconFill: <ColorPalletteFill />,
      src: '/'
    },
    {
      name: 'tone-generator',
      title: 'Tone Generator',
      icon: <ToneGenerator />,
      iconFill: <ToneGeneratorFill />,
      src: '/tone-generator'
    },
    {
      name: 'theme-generator',
      title: 'Theme Generator',
      icon: <ThemeGenerator />,
      iconFill: <ThemeGeneratorFill />,
      src: '/theme-generator'
    }
  ]

  const social = [
    {
      title: 'LinkedIn',
      icon: <Linkedin />,
      src: 'https://www.linkedin.com/in/kursadjs/'
    },
    {
      title: 'Github',
      icon: <Github />,
      src: 'https://github.com/kursadjs'
    },
    {
      title: 'Instagram',
      icon: <Instagram />,
      src: 'https://www.instagram.com/kursadjs'
    }
  ]

  return (
    <div
      className={`${styles.header} ${
        headerStatus === false ? styles.open : ''
      }`}
    >
      <div className={styles.logo}>
        <button onClick={() => router.push('/')}>
          <Logo />
          <p>
            UI<b>Colors</b>
          </p>
        </button>
      </div>

      <div className={styles.menu}>
        <span className={styles.subtitle}>Tools</span>
        {menu.map((item) => (
          <button
            key={item.name}
            className={item.src === active ? styles.active : ''}
            onClick={() => {
              router.push(item.src)
              dispatch(changeHeaderStatus(!headerStatus))
            }}
          >
            {item.src === active ? item.iconFill : item.icon}
            <p>{item.title}</p>
          </button>
        ))}
      </div>

      <div className={styles.footer}>
        <ul>
          {social.map((i) => (
            <li key={i.title} title={i.title}>
              <button
                onClick={() =>
                  window.open(i.src, '_blank', 'noopener,noreferrer')
                }
              >
                <>{i.icon}</>
              </button>
            </li>
          ))}
        </ul>

        <h4>© 2023 KursadJS</h4>
        <p>
          Created by{' '}
          <button
            onClick={() =>
              window.open(
                'https://kursadsimsek.com/',
                '_blank',
                'noopener,noreferrer'
              )
            }
          >
            <>@KursadJS</>
          </button>{' '}
          with NextJS.
        </p>
      </div>

      <div className={styles.closeButton}>
        <button onClick={() => dispatch(changeHeaderStatus(!headerStatus))}>
          Close Menu
        </button>
      </div>
    </div>
  )
}

export default Header
