import { useParams } from "react-router"
import { useQuery, gql } from "@apollo/client"
import { FaMapMarkerAlt } from "react-icons/fa"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ScrollRevealProvider from "../../components/ScrollRevealProvider"
import "./styles.sass"

const GET_PROJECT = gql`
  query getProjects($id: ID!) {
    projects(where: {id: $id}) {
      id
      title
      adress
      images(first: 100) {
        url
      }
      principalDescription
    }
  }
`

export default function ProjectDetails(){
  const { id } = useParams()
  const {loading, error, data} = useQuery(GET_PROJECT, {
    variables: {id: id}
  })

  window.scrollTo(0,0)

  if(loading) return <p>Loading...</p>
  if (error) return `Error! ${error}`

  return(
    <main>
      <ScrollRevealProvider>
        <section className="project-details">
          <h1 className="project-detail-title">{data.projects[0].title}</h1>

          {data.projects[0].adress && (
            <div className="project-adress">
              <FaMapMarkerAlt size={22} color={"#000"}/>
              <p className="adress">{data.projects[0].adress}</p>
            </div>
          )}

          {data.projects[0].principalDescription && (
            <div className="principal-description">
              {data.projects[0].principalDescription}
            </div>
          )}

          {navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) ? (
            <div className="mobile-image-gallery">
              {data.projects[0].images.map((element, index) => {
                return(
                  <ScrollRevealProvider key={index}>
                    <img src={element.url} loading="lazy" className="mobile-image" width={330}/>
                  </ScrollRevealProvider>
                )
              })}
            </div>
          ) : (
            <ScrollRevealProvider>
              <ImageList variant="masonry" cols={3} gap={8}>
                {data.projects[0].images.map((element, index) => {
                  return(
                      <ImageListItem key={index}>
                        <img src={element.url} loading="lazy" width={500}/>
                      </ImageListItem>
                  )
                })}
              </ImageList>
            </ScrollRevealProvider>
          )}
        </section>
      </ScrollRevealProvider>
    </main>
  )
}