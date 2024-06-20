import diegopic from './diegopicture1.jpg'
import './Sobre.css'

export default function Sobre()
{
    return(
        <div className="caixa" id="caixa">
            <img className="img3" src={diegopic} alt='Diegopic' />
            <p class="p1">Meu nome é Diego Farias dos Santos. Nasci em Jacareí/SP e trabalho para a Atento S/A como suporte ao cliente da operadora VIVO.
            Também faço estágio em TI no SAAE Jacareí e estou no segundo semestre do curso de Engenharia da Computação na UNIVESP.    
            Escolhi essa área porque sempre gostei de construir coisas e ver algo funcionar é uma sensação muito gratificante. Por exemplo,
            criar meu próprio portfólio foi algo que me deu satisfação. Para isso, busquei informações, conversei com colegas do estágio e coloquei a mão na massa. Para mim,
            um portfólio é uma obra de arte em constante evolução, que pode ser sempre aprimorado conforme meu conhecimento cresce.</p> 
        </div>

    );
}
