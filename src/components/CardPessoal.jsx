import React from 'react'
import { Pessoal, ImagePessoal, ItemsPessoal, Barra, Progresso, ParagBlack, Alinhador } from '../Style'

const CardPessoal = () => {
  return (
    <Pessoal>
        <ItemsPessoal>
            <Alinhador>
            <ParagBlack>Css</ParagBlack>
            <Barra>
             <Progresso style={{width: '80%'}}></Progresso>
            </Barra>
            </Alinhador>
            <Alinhador>
            <ParagBlack>JavaScript</ParagBlack>
            <Barra>
             <Progresso style={{width: '50%', background: '#dd6611dd'}}></Progresso>
            </Barra>
            </Alinhador>
            <Alinhador>
            <ParagBlack>React Js</ParagBlack>
            <Barra>
             <Progresso style={{width: '70%' ,  background: '#bb11dddd'}}></Progresso>
            </Barra>
            </Alinhador>
            <Alinhador>
            <ParagBlack>API</ParagBlack>
            <Barra>
             <Progresso style={{width: '40%',  background: '#11bedddd'}}></Progresso>
            </Barra>
            </Alinhador>
       
        </ItemsPessoal>
        <ImagePessoal src = "../src/img/imagePessoal.jpg"></ImagePessoal>
    </Pessoal>
  )
}

export default CardPessoal