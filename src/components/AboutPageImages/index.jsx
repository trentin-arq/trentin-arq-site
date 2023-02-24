import "./styles.sass"

export default function AboutPageImages(){
  return(
    <div className="about-page-images">
      <div className="definitions">
        <img src="../images/murilo.jpg" alt="murilo-trentin" loading="lazy" className="about-image"/>
        <h3 className="name">Murilo Trentin</h3>
        <span className="definition-text">Arquiteto Diretor/Fundador</span>
        <span className="definition-text">Diretor criativo de projetos</span>
        <span className="definition-text">Arquitetura e Urbanismo - Unisinos (2021)</span>
      </div>
      <div className="definitions">
        <img src="../images/julia.png" alt="julia-allgayer" loading="lazy" className="about-image"/>
        <h3 className="name">Julia Allgayer</h3>
        <span className="definition-text">Marketing e Financeiro</span>
        <span className="definition-text">Publicidade e Propaganda - Unisinos (2020)</span>
        <span className="definition-text">Pós Graduação em Gestão Empresarial - Unisinos (2022)</span>
      </div>
     {/*  <div className="definitions">
        <img src="" alt="" className="about-image"/>
        <h3 className="name">Polenta</h3>
        <span className="definition-text">Mascote</span>
      </div>
      <div className="definitions">
        <img src="" alt="" className="about-image"/>
        <h3 className="name">Mumu</h3>
        <span className="definition-text">Mascote</span>
      </div> */}
    </div>
  )
}