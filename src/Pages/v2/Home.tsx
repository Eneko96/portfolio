import { Stack } from '../../Components/Stack/Stack'
import { CaseStudies } from '../../Components/v2/CaseStudies/CaseStudies'
import { Section } from '../../Components/v2/Section'
import { Studies } from '../../Components/v2/Studies/Studies'
import { HeadLine } from '@Components/v2/HeadLine/HeadLine'
import { useAppContextV2 } from '@Context/ContextV2'
import './styles.css'
import { useEffect, useState } from 'react'
import Notification, { NotificationHeader } from '@TagDs/components/notification/notification'

export const Home = () => {
  const { baseData } = useAppContextV2()
  const [astroApp, setAstroApp] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (!localStorage.getItem('isAstroAdvertised')) setAstroApp(true)
      localStorage.setItem('isAstroAdvertised', 'true')
    }, 5000)
  })
  if (baseData)
    return (
      <>
        <div role="main">
          <HeadLine title="Hey welcome to my portfolio!" />
          <div className="content home-container">
            <div className="home-hero-container">
              <div className="home-hero-brief">
                <h1 className="home-hero-title">
                  I am {baseData.name}, {baseData.position}
                </h1>
                <div className="subtitle">Based in</div>
                <div className="base">Dublin, Ireland</div>
                <br />
                <div className="subtitle">
                  Experience In the Following industries
                </div>
                <div className="base">{baseData.experience}</div>
                <br />
                <div className="subtitle">Core skills</div>
                <div className="base">{baseData.skills}</div>
                <br />
                <div className="subtitle">Cliffton Strengths</div>
                <div className="base">{baseData.strengths}</div>
              </div>
              <div className="home-hero-image">
                <picture>
                  <source
                    media="(max-width: 768px)"
                    type="image/png"
                    srcSet="/home_img_mobile.png"
                  />
                  <source type="image/webp" srcSet="/irish.webp" />
                  <source type="image/jpeg" srcSet="/irish.jpg" />
                  <img
                    loading="eager"
                    alt="head image"
                    className="header-image"
                  />
                </picture>
              </div>
            </div>
            <div className="separator" />
            <Section />
            <Studies />
            <Stack />
            <CaseStudies />
          </div>
        </div>
        <Notification icon={<span className="material-icons">info</span>} iconClose isInline show={astroApp} setShow={setAstroApp} info renderAsPortal>
          <NotificationHeader>
            <div style={{ display: 'inline' }}>
              Astro version of my portfolio is comming out soon! You can already check it out live in <a href='https://astro.enekofolio.info'>here</a>
            </div>
          </NotificationHeader>
        </Notification>
      </>
    )
  return null
}
