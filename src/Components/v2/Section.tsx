import { useAppContextV2 } from '@Context/ContextV2'
import { SeeMore } from './SeeMore/SeeMore'
import { WorkV2 } from './Work_v2/Work_V2'
import './section.css'
import { useMemo, useState } from 'react'

export const Section = () => {
  const { baseData } = useAppContextV2()
  const [more, setMore] = useState(false)
  const toggleMore = () => setMore(!more)

  if (baseData) {
    const { work_v2 } = baseData
    const workData = useMemo(
      () =>
        more
          ? work_v2.sort(
              (a, b) =>
                new Date(b.intern_date).getTime() -
                new Date(a.intern_date).getTime()
            )
          : work_v2
              .sort(
                (a, b) =>
                  new Date(b.intern_date).getTime() -
                  new Date(a.intern_date).getTime()
              )
              .slice(0, 3),
      [work_v2, more]
    )
    return (
      <div className="section-v2-container" id="work">
        <h2 className="section-v2-title">Work Experience</h2>
        <div className="section-v2-work-container">
          {work_v2 &&
            work_v2.length &&
            workData.map(({ project_type: projectType, ...rest }, index) => (
              <WorkV2
                key={index + 'work-section'}
                projectType={projectType}
                {...rest}
              />
            ))}
        </div>
        <SeeMore
          styles={{ marginTop: '72px' }}
          more={more}
          setMore={toggleMore}
        />
      </div>
    )
  }
  return null
}
