import React from 'react'
import { NavBar, Ul, Li, Icone} from '../Style';


const Nav = (props) => {
  
  return (
    <NavBar>
        <Icone src = "https://github.com/samuelDev239/PortifolioDev/blob/main/src/img/logo.png?raw=true"></Icone>
        <Ul>
            <Li><a href="./"></a>Inicio</Li>
            <Li><a href="./"></a>Sobre mim</Li>
            <Li><a href="./"></a>Projetos</Li>
            <Li><a href="./"></a>Contato</Li>
            
        </Ul>
        </NavBar>
  )
}

export default Nav