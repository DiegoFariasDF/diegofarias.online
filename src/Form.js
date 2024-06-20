import toplog2 from './toplogo-transformed2.png';
import toplogo2 from './toplogo-transformed2.png';
import './Forms.css';



export default function Form(){

    return(
        
        <div className="formulario" id="caixa3" method="post" action="form.php">

            <div>
                <img className="img6" src={toplogo2} alt='img'/>
            </div>

            <div className="interface"> 
                <h1> CONTATO</h1>

                <form action="https://api.staticforms.xyz/submit" method="post" className="card" >
                    <input type="hidden" name="accessKey" value="d393224d-f738-4248-8956-1024df093cb4" />
                    <input type="hidden" name="redirectTo" value="https://diegofarias.online" />

                    <label for="inputNome"></label>
                    <input type="text" name="name" id="nome" placeholder="Seu nome:" required /> 

                    <label for="inputEmail"></label>
                    <input type="email" name="email" id="email" placeholder="Seu e-mail:" required /> 
                    <span></span>

                    <label for="textAreaMensagem"></label>
                    <textarea name="mensagem" id="message" placeholder="Sua mensagem" required></textarea>
                    <span></span>

                    <div class="btn-enviar"><input type="submit" value="Enviar" /></div>
                </form>

            </div>
        </div>
    );
}