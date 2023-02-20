import { useQuery, gql } from "@apollo/client"
import { Link } from "react-router-dom"
import ProjectsMenu from "../../components/ProjectsMenu"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"
import "./styles.sass"

const GET_PROJECTS = gql`
  query getProjects{
    projects(where: {category: "desenvolvimento"}) {
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
  return(
    <main>
      <section className="architecture-projects-list">
        <ProjectsMenu/>
        <h1 className="section-title">Em desenvolvimento</h1>
        <div className="project-cards-container">
          {
            data && data.projects.map((element, index) => {
              return(
                <Link to={`/projetos/${element.id}`} key={element.id} className="project-card"> 
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
              )
            })
          }
        </div>
      </section>
    </main>
  )
}