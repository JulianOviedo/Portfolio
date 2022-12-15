import React, { useState } from 'react'
import NavItem from '../NavItem/NavItem'
import styles from './NavBar.module.css'

const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'About Me', href: '/about' },
  { text: 'Contact', href: '/contact' }
]
const Navbar = () => {
  const [navActive, setNavActive] = useState(null)
  const [activeIdx, setActiveIdx] = useState(-1)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div
          onClick={() => setNavActive(!navActive)}
          className={'nav__menu-bar'}
        >
        </div>
        <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx)
                setNavActive(false)
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
