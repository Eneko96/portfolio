/* eslint-disable import/no-absolute-path */
import {
  Sidebar,
  SidebarButton,
  SidebarDivider
} from '@TagDs/components/sidebar/sidebar'
import { Footer } from '../../Components/v2/Footer/Footer'
import { PreFooter } from '../../Components/v2/PreFooter/PreFooter'
import { useLocation, useNavigate } from 'react-router-dom'
import { handleDownloadResumee } from '../../utils/downloadCV'
import { useEffect, useState } from 'react'
import logo from '/Logo.svg'
import { isMobile } from '@Utils/isMobile'
import { Icons } from '../../Icons/LayoutIcons'
import './styles.css'

const TITLE_OFFSET = 100

export const Layout: React.FC<any> = ({ children }) => {
  const [selected, setSelected] = useState('button2')
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const handleScroll = (id: string) => {
    if (location.pathname !== '/') navigate('/')
    const element = document.getElementById(id)
    if (element) {
      document.body.scrollTop = element.offsetTop - TITLE_OFFSET
    }
  }

  const handleHome = () => {
    if (location.pathname !== '/') navigate('/')
    document.body.scrollTop = 0
  }

  useEffect(() => {
    const { pathname } = location
    const focuser = document.getElementsByClassName('focuser')
    let focus: any
    if (focuser.length > 0) {
      focus = focuser[0] as HTMLElement
    }
    if (pathname.includes('/Study')) {
      setSelected('button6')
      if (focus) {
        focus.style.top = `${document.getElementById('button6')!.offsetTop}px`
      }
    }
    if (pathname.includes('/Book')) {
      setSelected('button8')
      if (focus) {
        focus.style.top = `${document.getElementById('button8')!.offsetTop}px`
      }
    }
  }, [location])

  return (
    <div className="tag-ds layout">
      <div className="layout-inner">
        <Sidebar
          open={open}
          logo={
            <img
              src={logo}
              alt="logo"
              style={{ width: '34px', height: '49px', objectFit: 'cover' }}
              onClick={handleHome}
            />
          }
          collapsed
        >
          <SidebarDivider key={0}>sections</SidebarDivider>
          <SidebarButton
            key={1}
            className={selected === 'button2' ? 'selected' : ''}
            icon={<Icons.LocationIcon active={selected === 'button2'} />}
            id="button2"
            href=""
            label="About"
            onPressed={() => {
              setSelected('button2')
              handleScroll('about')
              if (isMobile) setOpen(false)
            }}
            selected={selected === 'button2'}
          />
          <SidebarButton
            key={2}
            icon={<Icons.WorkIcon active={selected === 'button3'} />}
            className={selected === 'button3' ? 'selected' : ''}
            id="button3"
            href=""
            label="Work"
            onPressed={() => {
              setSelected('button3')
              handleScroll('work')
            }}
            selected={selected === 'button3'}
          />
          <SidebarButton
            key={3}
            icon={<Icons.BookIcon active={selected === 'button4'} />}
            className={selected === 'button4' ? 'selected' : ''}
            id="button4"
            href=""
            label="Studies"
            onPressed={() => {
              setSelected('button4')
              handleScroll('studies')
            }}
            selected={selected === 'button4'}
          />
          <SidebarButton
            key={4}
            icon={<Icons.ViewIcon active={selected === 'button5'} />}
            className={selected === 'button5' ? 'selected' : ''}
            id="button5"
            href=""
            label="Tech Stack"
            onPressed={() => {
              setSelected('button5')
              handleScroll('teckstack')
            }}
            selected={selected === 'button5'}
          />
          <SidebarButton
            key={5}
            icon={<Icons.FolderIcon active={selected === 'button6'} />}
            className={selected === 'button6' ? 'selected' : ''}
            id="button6"
            href=""
            label="Case Studies"
            onPressed={() => {
              setSelected('button6')
              handleScroll('casestudies')
            }}
            selected={selected === 'button6'}
          />
          <SidebarDivider key={9}>contact</SidebarDivider>
          <SidebarButton
            key={7}
            icon={<Icons.ChatIcon active={selected === 'button8'} />}
            className={selected === 'button8' ? 'selected' : ''}
            id="button8"
            label="Book a Call"
            href=""
            onPressed={() => {
              setSelected('button8')
              if (isMobile) setOpen(false)
              navigate('/Book')
            }}
          />
          <SidebarButton
            key={8}
            href=""
            icon={<Icons.DownloadIcon active={selected === 'button9'} />}
            className={selected === 'button9' ? 'selected' : ''}
            id="button9"
            label="Resume"
            onPressed={() => {
              if (isMobile) {
                handleDownloadResumee()
                setOpen(false)
              } else navigate('/CV')
            }}
          />
          {isMobile && (
            <SidebarButton
              label="Menu"
              icon={
                <span className="material-icons-outlined">
                  {open ? 'close' : 'menu'}
                </span>
              }
              className={selected === 'button10' ? 'selected' : ''}
              id="button10"
              onPressed={() => {
                setOpen(!open)
              }}
            />
          )}
        </Sidebar>
        <div className="layout-content">{children}</div>
      </div>
      {location.pathname !== '/Book' && location.pathname !== '/Dashboard' && (
        <PreFooter />
      )}
      {location.pathname !== '/Dashboard' && <Footer />}
    </div>
  )
}
