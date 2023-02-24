import { Link } from "react-router-dom"
import "./styles.sass"

export default function ProjectsMenu(){
  return(
    <div className="projects-menu">
      <Link to={"/projetos"} className="project-menu-item">Todos os projetos</Link>
      <Link to={"/arquitetura"} className="project-menu-item">Arquitetura</Link>
      <Link to={"/interiores"} className="project-menu-item">Interiores</Link>
      <Link to={"/em-desenvolvimento"} className="project-menu-item">Em desenvolvimento</Link>
    </div>
  )
}