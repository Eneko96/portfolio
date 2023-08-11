import Loader from '@TagDs/components/loader/loader'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../Card/Card'
import { SeeMore } from '../SeeMore/SeeMore'
import './styles.css'
import { tmpSort } from './utils/tmpSort'

const OMIT_NAMES = ['kings-league-project', 'developer.chrome.com']
const OWNER = 'Eneko96'
const BRANCH = 'main'

export const CustomChip: React.FC<any> = ({ children, className }) => (
  <small title={children} className={`custom-chip ${className ?? ''}`}>
    {children}
  </small>
)

export interface IRepos {
  clone_url: string
  id: number
  name: string
  homepage: string
  private_repo: boolean
  description: string
  created_at: string
  languages_url: string
  topics: string[]
}

export const CaseStudies = () => {
  const [repos, setRepos] = useState<IRepos[]>([])
  const [more, setMore] = useState(false)
  const [cats, setCats] = useState([])

  const toggleMore = () => setMore(!more)

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller
    const getRepos = async () => {
      const repos = await fetch(import.meta.env.VITE_GITHUB_URI, { signal })
      const res = await repos.json()
      const omitRes = res.filter(
        (elem: IRepos) => !OMIT_NAMES.includes(elem.name)
      )
      tmpSort(omitRes)
      setRepos(omitRes)
    }
    const getCats = async () => {
      const cats = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=28&api_key=live_UU7j7mB39u7n3ZYZRkMWdi5dFHIAHCCkdkqPj4oWRzCspI3d7My1bKMNrVi7g87O`
      )
      const res = await cats.json()
      setCats(res)
    }

    Promise.all([getRepos(), getCats()]).then((res: any) => {
      setCats(res[1] as unknown as [])
      const omitRes = res[0].filter(
        (elem: IRepos) => !OMIT_NAMES.includes(elem.name)
      )
      tmpSort(omitRes)
      setRepos(omitRes)
    })
    getRepos()
    getCats()
    return () => controller.abort()
  }, [])

  const memoRepos = useMemo(
    () => (more ? repos : repos.slice(0, 3)),
    [repos, more]
  )

  const navigate = useNavigate()

  if (repos) {
    return (
      <div className="case-studies-container" id="casestudies">
        <h2 className="case-studies-title">Projects</h2>
        <div className="case-studies">
          {memoRepos.map(
            (
              {
                id,
                clone_url: _,
                homepage,
                name,
                private_repo,
                description,
                created_at,
                languages_url,
                topics
              },
              idx
            ) => (
              <Card key={id} className="case-studies-card">
                <div className="card-img-container">
                  <img
                    className="card-img"
                    src={cats[idx]?.url ?? ''}
                    alt="project-image"
                    loading="lazy"
                  />
                </div>
                <CustomChip clas>
                  {private_repo ? 'private' : 'public' + ' Repository'}
                </CustomChip>
                <div className="card-title">{name}</div>
                <div className="card-description-container">
                  <div className="subtitle">{homepage}</div>
                  <div className="medium card-description-inner">
                    {description ??
                      'There is no short description at the moment'}
                  </div>
                </div>
                <button
                  className="button card-button-details"
                  onClick={() =>
                    navigate('Study/' + name, {
                      state: {
                        title: name,
                        owner: OWNER,
                        repo: name,
                        branch: BRANCH,
                        created_at,
                        languages_url,
                        topics
                      }
                    })
                  }
                >
                  See Details
                </button>
              </Card>
            )
          )}
        </div>
        <SeeMore more={more} setMore={toggleMore} className="study-see-more" />
      </div>
    )
  }
  return <Loader automatic />
}
