import React, {useCallback} from 'react'
import log from 'loglevel'
import {Link, NavLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import logo from '../assets/img/bitcoin-studio-black.svg'

type Props = {
  id: string
  isMenuOpen: boolean
}

export const Header: React.FC<Props> = ({isMenuOpen, id}) => {
  const {t, i18n} = useTranslation(['Header'])
  const pathMapping = [
    ['', ''],
    ['workshops', 'formations'],
    ['resources', 'ressources'],
    ['about', 'a-propos'],
    ['contact', 'contact'],
  ]

  const changeLanguage = useCallback((askedLng: string) => {
    i18n.changeLanguage(askedLng)
      // Rewrite current URL
      .then(() => {
        const subpaths = window.location.pathname.match(/\/([a-zA-Z-]*)/g)
        const currentLng = subpaths?.[0] === '/fr' ? 'fr' : 'en'
        // Use location.assign() to cause the window to load and display the document at the rewritten URL
        // It allows re-setting BrowserRouter 'basename' property in the index.tsx
        if (currentLng === 'en' && askedLng === 'fr') {
          const path = pathMapping.find((p) => subpaths?.[0].substring(1) === p[0])
          window.location.assign(`fr/${path?.[1]}`)
        } else if (currentLng === 'fr' && askedLng === 'en') {
          const path = pathMapping.find((p) => subpaths?.[1].substring(1) === p[1])
          window.location.assign(`/${path?.[0]}`)
        }
      })
      .catch((e) => log.error(e))
  }, [i18n, pathMapping])

  const tabIndex = isMenuOpen ? 0 : -1

  return (
    <div className="header" id={id}>
      <Link to="/">
        <img src={logo} alt="Bitcoin Studio Logo"/>
      </Link>
      <nav aria-hidden={!isMenuOpen} className={`header__links ${isMenuOpen ? 'nav__mobile--open' : ''}`}>
        <ul>
          <li>
            <NavLink exact={true} to="/" activeClassName="menu-item--active" tabIndex={tabIndex}>
              {t('Header:home')}
            </NavLink>
          </li>
          <li>
            <NavLink
              exact={true}
              to={`${i18n.language === 'fr' ? pathMapping[1][1] : pathMapping[1][0]}`}
              activeClassName="menu-item--active"
              tabIndex={tabIndex}
            >
              {t('Header:workshops')}
            </NavLink>
          </li>
          <li>
            <NavLink
              exact={true}
              to={`${i18n.language === 'fr' ? pathMapping[2][1] : pathMapping[2][0]}`}
              activeClassName="menu-item--active"
              tabIndex={tabIndex}
            >
              {t('Header:resources')}
            </NavLink>
          </li>
          <li>
            <NavLink
              exact={true}
              to={`${i18n.language === 'fr' ? pathMapping[3][1] : pathMapping[3][0]}`}
              activeClassName="menu-item--active"
              tabIndex={tabIndex}
            >
              {t('Header:about')}
            </NavLink>
          </li>
          <li>
            <NavLink
              exact={true}
              to={`${i18n.language === 'fr' ? pathMapping[4][1] : pathMapping[4][0]}`}
              activeClassName="menu-item--active"
              tabIndex={tabIndex}
            >
              {t('Header:contact')}
            </NavLink>
          </li>

          <li id="translation-btn">
            <button
              className="btn-link"
              onClick={() => changeLanguage('en')}
              tabIndex={tabIndex}
              type="button"
            >
              EN
            </button>
            /
            <button
              className="btn-link"
              onClick={() => changeLanguage('fr')}
              tabIndex={tabIndex}
              type="button"
            >
              FR
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
