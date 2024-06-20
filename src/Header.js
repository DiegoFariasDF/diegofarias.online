import React from 'react';
import toplogo from './toplogo-transformed.png';
import github from './github.png';
import linkedin from './linkedin-logo.png';
import './Header.css';
import Menu from './menu.png';


export default function Header() {
    return (
        <header> 
            
            <a href="#caixa1">
                <img src={toplogo} alt="Logo Top" />
            </a>
            

            
            <nav className='pc'> 
                <a href="#caixa1">Home</a>
                <a href="#caixa">Sobre</a>
                <a href="#caixa2">Projetos</a>
                <a href="#caixa3">Contato</a>
                <a href="https://github.com/DiegoFariasDF">
                    <img className="img2" src={github} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/diego-farias-05378a216">
                    <img className="img2" src={linkedin} alt="LinkedIn" />
                </a>
            </nav>
            
            
            
            <nav className='menu'>
                <a href='#caixa1'> <img src={Menu} alt='menu'/> </a>
            </nav>
            
        </header>
    );
}
