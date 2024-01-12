import { useQuery, gql } from "@apollo/client"
import { Link } from "react-router-dom"
import ProjectsMenu from "../../components/ProjectsMenu"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"
import { useEffect } from "react"
import ScrollRevealProvider from "../../components/ScrollRevealProvider"
import "./styles.sass"

const GET_PROJECTS = gql`
  query getProjects{
    projects(where: {category: "desenvolvimento"}, orderBy: updatedAt_DESC) {
      id
      title
      thumb {
        url
      }
      adress
      images {
        url
      }
      principalDescription
      category
    }
  }
`

export default function DevelopmentProjects(){
  const {loading, error, data} = useQuery(GET_PROJECTS)

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return(
    <main>
      <ScrollRevealProvider>

        <section className="development-projects-list">
          <ProjectsMenu/>
          <h1 className="section-title">Em desenvolvimento</h1>
          <div className="project-cards-container">
            {
              data && data.projects.map((element, index) => {
                return(
                  <ScrollRevealProvider key={element.id}>
                    <Link to={`/projetos/${element.id}`} className="project-card"> 
                      <div className="project-card-infos">
                        <img src={element.thumb.url} alt="thumb" className="project-thumb" width={350}/>
                        <div className="project-title-container">
                          <h2 className="project-card-title">{element.title}</h2>
                          <FaArrowRight size={26} color={"#000"} className="project-icon"/>
                        </div>
                        {element.adress && (
                          <div className="project-card-adress">
                            <FaMapMarkerAlt size={22} color={"#000"}/>
                            <p className="project-adress">{element.adress}</p>
                          </div>
                        )}
                      </div>
                    </Link>
                  </ScrollRevealProvider>
                )
              })
            }
          </div>
        </section>
      </ScrollRevealProvider>
    </main>
  )
}