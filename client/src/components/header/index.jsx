import './style.css'
import Github from './imagens/img/github50.png'
import Linkedin from './imagens/img/linkedin50.png'
import Cab from './imagens/img/cab-transformed.png'
import Spot from './imagens/img/spot-transformed.png'
import Marinha from './imagens/img/marinha-transformed.png'

function Home(){
    return(
<>
    <header className='menu'>

    <div class="logo-github">
        <img src={Github}/>
        <a class="git" href="https://github.com/aprigio311">/Aprigio-Devops</a>
    </div>

    <div class="logo-linkedin">
        <img src={Linkedin}/>
        <a class="git" href="https://www.linkedin.com/in/gilberto-aprigio-devops/">/Gilberto Aprigio</a>
    </div>
 
    </header>

    <main>
        
        <h1>Quem é Gilberto Aprigio?</h1>

        <div className='info-aprigio'>

            <div className='info-aprigio-text'>
            
            Um apaixonado por tecnologia e automação, buscando aprender as novidades tecnologicas
            em multicloud para se manter atualizado e melhorar cada vez mais a sua gama de ferramentas DevOps.
            A cada dia mergulha mais fundo nesse imenso mar de conhecimento infinito, sempre em busca da evolução!
            
            </div>

        </div>
        
        <h1>Experiências profissionais</h1>

        <div className='trabalhos'>

            

            <div className='card-marinha'>
                
                <img src={Marinha}/>
                
                    <div className='card-info'>

                        Analista de suporte e infraestrutura
                    
                        <div className='card-info-text'>
                        Configuração roteadores e servidores com serviços agendados, manutenção de computadores,
                        manutenção em cabeamentos e estrutura de redes, auxiliar o pessoal com suporte em sistemas
                        específicos da Marinha.

                        </div>
                    </div>

            </div>
            
            <div className='card-cab'>
                
                <img src={Cab}/>
                
                    <div className='card-info'>

                        Analista de suporte e infraestrutura
                    
                        <div className='card-info-text'>
                        Configuração de roteadores, servidores Windows e Linux, manutenção de computadores, manutenção em
                        cabeamentos e estrutura de redes, auxiliar o pessoal com suporte em sistemas ERP e WMS: Atak, Arius, Pleno,
                        Alterdata, MRS Tlantic, Automatiza (gerenciamento de Farmácia), sistemas de frente de PDV (KW
                        Informática). Configuração de rede, conhecimentos básicos em router mikrotik, configuração de Antenas Unifi
                        Ubiquiti de longo alcance, configuração de firewall (PFsense) e automação de processos de backup e fluxos do 
                        dia a dia. Manutenção de infraestrutura tecnológica, Implementação e acompanhamento de processos no setor de T.I.
                        </div>

                    </div>
            </div>

            <div className='card-spot'>
                
                <img src={Spot}/>
                
                    <div className='card-info'>

                    Analista de infraestrutura/DevOps
                    
                        <div className='card-info-text'>
                        Configuração de redes e servidores Windows e Linux, desenvolvimento de novos processos com integração
                        de sistemas e servidores com auxílio de linguagens de programação diversificadas(python, nodeJS, 
                        powershell e shellscripts). Integração de processos de backup com procedures em banco de dados. 
                        Desenvolvimento de automações de processos e rotinas diárias, configuração e manutenção de processos 
                        de CI/CD, provisionamento de infraestrutura com cloudformation (Iac) e scripts SQL e T-SQL (transact SQL).

                        </div>
                    </div>

            </div>
    
        </div>
    </main>
    
    </>

    )
}

export default Home