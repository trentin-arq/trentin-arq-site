import { useQuery, gql } from "@apollo/client"
import { useState, useEffect } from "react"

const GET_PROJECTS = gql`
  query getProjects{
    projects{
      id
      title
      category
      thumb {
        url
      }
      adress
      images {
        url
      }
      principalDescription
    }
  }
`

export default function PrjectsList(){
  const {loading, error, data} = useQuery(GET_PROJECTS)
  const [projectCategory, setProjectCategory] = useState('')
  const [projects, setProjects] = useState()

  console.log('projects-list', data)

  function handleProjectMenu(category){
    setProjectCategory(category)
    filterPojectByCategory(projectCategory)
  }

  function filterPojectByCategory(category){
    const filter = projects.projects.filter((element) => {
      return element.category == category
    })

    if(filter.length <= 0){
      console.log('não tem nada dentro do filter')
      setProjects()
    }

    console.log('filter', filter)
  }

  useEffect(() => {
    setProjects(data)
  }, [])

  useEffect(() => {
    console.log('project', projects)
  }, [projects])


  return(
    <section className="projects-list">
      <div className="projects-menu">
        <button className="project-menu-option" onClick={() => handleProjectMenu()}>
          Todos os projetos
        </button>
        <button className="project-menu-option" onClick={() => handleProjectMenu("arquitetura")}>
          Arquitetura
        </button>
        <button className="project-menu-option" onClick={() => handleProjectMenu("interiores")}>
          Interiores
        </button>
        <button className="project-menu-option" onClick={() => handleProjectMenu("desenvolvimento")}>
          Em desenvolvimento
        </button>
      </div>

      <div>
        {projects && (projects.projects.map((element, index) => {
            return(
              <div key={index}>
                <div>{element.title}</div>
                <div>{element.category}</div>
              </div>
            )
          })) 
        }
      </div>
    </section>
  )
}