import './fluxo.css'
import Ansible from './img/ansible.png'
import Branch from './img/branch.png'
import Docker from './img/docker.png'
import Git from './img/git.png'
import Language from './img/reactjs.png'

function Fluxo(){
    return(
    <>

        <div className='fluxograma'>

            <h1>Fluxo CI/CD</h1>

            <img src={Language}/>
            <h2>| Desenvolvimento |</h2>
            
            <img src={Branch}/>
            <h2>| Versionamento para branch |</h2>
            
            <img src={Git}/>
            <h2>| CI/CD com GitLab |</h2>
            
            <img src={Docker}/>
            <h2>| Criação de imagem docker |</h2>
            
            <img src={Ansible}/>
            <h2>| Implantação com Ansible |</h2>

        </div>
    </>
        )
    }
    
    export default Fluxo