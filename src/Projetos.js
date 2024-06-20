import  portfolio from './portfolio.png';
import global from './global-temp1.png';
import prof from './prof.png';
import calc from './calculadora.png';
import './Projetos.css';


export default function Projetos(){
    return(
    <div className="projetos" id="caixa2">

        <div className="proj"><h1>PROJETOS</h1></div>
        <div>
            <div className="note">
                <a href="https://diegofarias.online"><img src={portfolio} alt='portfolio'/></a>
            </div>
            <div className="note">
                <a href="https://global-temp.vercel.app/"><img src={global} alt='global-temp'/></a>
        </div>
        </div>


        <div>
            <div className="note">
                <a href="https://diegofariasdf.github.io/matheusbarros/"><img src={prof} alt='Professor'/></a>
            </div>
            <div className="note">
                <a href="https://calculadora-univesp.vercel.app/"><img src={calc} alt='Calculadora-Univesp'/></a>
            </div>
        </div>

    </div>
        

    );
}


