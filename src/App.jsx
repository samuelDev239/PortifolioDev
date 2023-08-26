import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Cards from "./data/Cards";
import {
  Div,
  DivTexto,
  DivTextoP,
  DivTitulo,
  DivTresCaixa,
  Section,
  Section2,
  TituloParallax,
  TituloTexto,
  Caixa,
  CaixaDois,
  CaixaTres,
  DivTextoCaixa,
  Section3,
  DivCards,
  PaiGrid,
  SectionTre,
  TituloParallaxAlt,
  WhiteDiv,
  CircleDiv,
  GridText,
  GridTextBig,
  ParagBlack,
  Parag,
  ImageProjeto,
  Footer,
  Alinhator
} from "./Style";
import "./App.css";
import Nav from "./components/Nav";
import CardPadrao from "./components/CardPadrao";
import GridTable from "./components/GridTable";
import CardPessoal from "./components/CardPessoal";


function App() {
  const color =  '#23232E'
 
  return (

    <Div>
      <Nav cor = {color}></Nav>
      <Section>
        <DivTitulo>
          <TituloParallax>Seja bem vindo ao meu portifólio</TituloParallax>
        </DivTitulo>
      </Section>
      <DivTexto>
        <TituloTexto>O que você precisa?</TituloTexto>
        <DivTextoP>
          <Parag>
            Aqui você poderá ver alguns projetos realizados e pensados por mim,
            além de informações e meios de se contatar comigo.{" "}
          </Parag>
          <br></br>
          <Parag>
            Eu quero provar que sou a pessoa que você deve contratar, mas para
            isso, é melhor você conhecer um pouco sobre mim, nao acha? Veja isso
            na sessão abaixo.
          </Parag>
        </DivTextoP>
      </DivTexto>
      <Section2>
        <TituloParallax>Sobre mim</TituloParallax>
      </Section2>
      <DivTresCaixa>
        <Caixa>
          <DivTextoCaixa>
            <TituloTexto>Quem sou eu</TituloTexto>

            <Parag>
              Me chamo Samuel, tenho nacionalidade Brasileira e atualmente moro
              no Brasil, tenho curso tecnico de tecnologia da informação, Sou
              desenvolvedor front-End, trabalho com React Js/React native e
              tenho conhecimentos basicos de algumas linguagens usadas no
              back-end, agora que você já tem algumas informações sobre mim, que
              tal dar uma olhada nos meus projetos?
            </Parag>
          </DivTextoCaixa>
        </Caixa>
        <CaixaDois>
          <DivTextoCaixa>
            <TituloTexto>Como posso te ajudar</TituloTexto>

            <Parag>
              Procura alguém para ser o front-end da sua empresa? Então sou a
              pessoa certa, sou front-end, webdesigner e Designer gráfico,
              Trabalho com React.js, React Native, Figma, PHP, JavaScript,
              Styled Components e procuro sempre aprender.
            </Parag>
          </DivTextoCaixa>
        </CaixaDois>
        <CaixaTres>
          <DivTextoCaixa>
            <TituloTexto>Está interessado?</TituloTexto>
            <Parag>
              Já que você leu até aqui, penso que estamos no caminho certo.{" "}
              <br></br>Espero que a esse ponto da nossa “Conversa” você esteja
              interessado, mas agora vem o mais importante...
            </Parag>
          </DivTextoCaixa>
        </CaixaTres>
      </DivTresCaixa>
      <Section3>
        <ImageProjeto src="https://github.com/samuelDev239/PortifolioDev/blob/main/src/img/projetos.png?raw=true"></ImageProjeto>
      </Section3>
      <PaiGrid>
      <DivCards>
        {Cards.map((item) => 
        
        <CardPadrao
        
        url = {item.url}
        link = {item.link}
        titulo = {item.titulo}
        legenda = {item.legenda}
        tipo = {item.tipo}
        color = {item.color}
        key = {item.id}></CardPadrao>)}
      </DivCards>
      </PaiGrid>
      <SectionTre>
        <TituloParallaxAlt>Contato</TituloParallaxAlt>
      </SectionTre>
      <WhiteDiv>
        <CardPessoal></CardPessoal>
      </WhiteDiv>
      <WhiteDiv>
        <GridTable></GridTable>
      </WhiteDiv>
      <WhiteDiv>
        <CircleDiv><GridTextBig>Gostou?</GridTextBig></CircleDiv>
        <ParagBlack>Entre em contato comigo, estou esperando você!</ParagBlack>
      </WhiteDiv>
   
      <Footer>
       
        <Parag> © SamuelDev 2023 </Parag>
       
      </Footer>
    
    </Div>
  );
}

export default App;
