import React from 'react'
import { CardButton, CardConteudo, CardCorpo, CardImage, CardTitulo, DivTextoP } from '../Style'

const CardPadrao = (props, color) => {
  
  return (
    <CardCorpo href = {props.link}   >
        <CardImage src = {props.url} ></CardImage>
        <CardConteudo>
          <CardTitulo>{props.titulo}</CardTitulo>
          <DivTextoP><p style = {{fontSize: '18px', fontWeigth: '300'}}>{props.legenda}</p></DivTextoP>
        </CardConteudo>
       <CardButton style = {{background: {color}}}><CardTitulo>{props.tipo}</CardTitulo></CardButton>
    </CardCorpo>
  )
}

export default CardPadrao