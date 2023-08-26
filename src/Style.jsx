import styled from 'styled-components'
import { devices } from './data/Bp';



export const Div = styled.div`
background: #1d1d1d;
width: 100%;
min-height: 100vh;
max-height: auto;
display: flex;
flex-direction: column;
` ;

export const NavBar = styled.nav`
width: 100%;
height: 80px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
position: fixed;
z-index: 50;
justify-content: center;
  padding: 0;
backdrop-filter: blur(5px);
`;
export const Icone = styled.img`
width: 280px;
height: 50px;
cursor: pointer;

`;

export const Ul = styled.ul`
display: flex;
flex-direction: row;
margin-right: 244px;
gap: 2rem;
list-style: none;
color: #ffff;
font-size: 22px;
font-family: 'Sora', sans-serif;
display: none;


`
export const Li = styled.li`
cursor: pointer;
`
export const Section = styled.section `
display: flex;
flex-direction: column;
justify-content: center;
height: 100vh;
width: 100%;
position: relative;
background-repeat: no-repeat;
background-size: cover;
-moz-background-size: cover;
-webkit-background-size: cover;
-o-background-size: cover;
background-attachment: fixed;
background-image: url('https://github.com/samuelDev239/PortifolioDev/blob/main/src/img/fundo.jpg?raw=true');
@media (max-width: 500px) {
    background-attachment: scroll;
}
  
&:after{
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 50;
    background: -moz-linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100%);
    background: -webkit-linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100%);
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100%);
}

`
export const SectionTre = styled.section `
@media (max-width: 500px) {
    background-attachment: scroll;
}
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
position: relative;
background-repeat: no-repeat;
background-size: cover;
-moz-background-size: cover;
-webkit-background-size: cover;
-o-background-size: cover;
background-attachment: fixed;
background-image: url('https://github.com/samuelDev239/PortifolioDev/blob/main/src/img/parallaxaltt.jpg?raw=true');
z-index: 101;
&:after{

}

`
export const ItemGrid = styled.div`
width: 300px;
height: 180px;
border: 2px solid black;
display: flex;
align-items: center;
justify-content: center;
`
export const IconeContato = styled.img`
width: 100px;
height: 100px;`
export const ItemGridBlack = styled.a`
text-decoration: none;
width: 300px;
height: 180px;
border: 2px solid black;
display: flex;
align-items: center;
justify-content: center;
background-color: #1D1D1D;
`
export const GridDiv = styled.div`
    width: 1210px;
    height: auto;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    margin-top: 2rem;
    gap: 0;
    @media (max-width: 1250px) {
    width: 95%;
 
  
  }

`
export const Separator = styled.div`
text-decoration: none;
    width: 320px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
`
export const CircleDiv = styled.div`
width: 500px;
height: 500px;
border-radius: 100%;
background-color: #1d1d1d;
display: flex;
justify-content: center;
align-items: center;
`
export const WhiteDiv = styled.section`
z-index: 200;
width: 100vw;
height: auto;
padding: 10rem 0;
background: #EAE9E7;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10rem;
`
export const Section2 = styled.section `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
z-index: 101;
position: relative;
background-repeat: no-repeat;
background-size: cover;
-moz-background-size: cover;
-webkit-background-size: cover;
-o-background-size: cover;
background-attachment: fixed;
background-image: url('https://github.com/samuelDev239/PortifolioDev/blob/main/src/img/parallax3.png?raw=true');
background-position: 50% 30%;
@media (max-width: 500px) {
    background-attachment: scroll;
}
&:after{
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 101;
    background: -moz-linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100%);
    background: -webkit-linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100%);
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100%);
}

`
export const Section3 = styled.section `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
z-index: 101;
position: relative;
background-repeat: no-repeat;
background-size: cover;
-moz-background-size: cover;
-webkit-background-size: cover;
-o-background-size: cover;
background-attachment: fixed;
@media (max-width: 500px) {
    background-attachment: scroll;
}
background-image: url('https://github.com/samuelDev239/PortifolioDev/blob/main/src/img/moss.jpg?raw=true');
background-position: 30% 80%;
&:after{
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 101;
    background: -moz-linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100%);
    background: -webkit-linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100%);
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100%);
}

`
export const DivTexto = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 1rem;
height: 500PX;
background: #23232E;
z-index: 60;
@media (max-width: 825px) {

  height: 400PX;
}
    @media (max-width: 620px) {
        height: 300PX;
}
@media (max-width: 500px) {
   height: 300px;
}

`
export const DivTitulo = styled.div`
width: 70%;

margin-left: 144px;

@media (max-width: 850px) {
    text-align: center;
    margin: 0 auto;

 

}
@media (max-width: 400px) {
    width: 90%;


}

`
export const DivTextoP = styled.div`
width: 70%;
@media (max-width: 825px) {
    width: 80%;
}
    @media (max-width: 620px) {
        width: 90%;
}

`
export const TituloParallax = styled.h1`
font-size: 122px;
color: #fff;
letter-spacing: 5px;
font-family: 'Bebas Neue', sans-serif;
@media (max-width: 850px) {
    font-size: 80px;
}
@media (max-width: 500px) {
    font-size: 68px;
}
@media (max-width: 400px) {
    
}
`
export const GridText = styled.h1`
font-size: 50px;
color: #fff;
letter-spacing: 2px;
font-family: 'Bebas Neue', sans-serif;
`
export const GridTextBig = styled.h1`
font-size: 84px;
color: #fff;
letter-spacing: 2px;
font-family: 'Bebas Neue', sans-serif;
`
export const ParagBlack = styled.p`
     color: #1d1d1d;
    font-size: 28px;
    font-family: 'Sora', sans-serif;
    font-weight: 400;
    text-align: center;
    `

export const GridTextBlack = styled.h1`
font-size: 50px;
color: #1d1d1d;
letter-spacing: 2px;
font-family: 'Bebas Neue', sans-serif;
`
export const TituloParallaxAlt = styled.h1`
color: #1d1d1d;
font-size: 122px;
letter-spacing: 5px;
font-family: 'Bebas Neue', sans-serif;
@media (max-width: 850px) {
    font-size: 80px;
}
@media (max-width: 500px) {
    font-size: 68px;
}
@media (max-width: 400px) {
    
}
`
export const Parag = styled.p`
color: #fff;
    font-size: 28px;
    font-family: 'Sora', sans-serif;
    font-weight: 300;
    @media (max-width: 825px) {
    font-size: 22px;
}
    @media (max-width: 620px) {
    font-size: 16px;
}
@media (max-width: 500px) {
  
  font-size: 14px;
}
  

`
export const ImageProjeto = styled.img`
@media (max-width: 700px) {
  
  width: 500px;
  height: 250px;
}
@media (max-width: 550px) {
  
  width: 300px;
  height: 150px;
}


`


export const TituloTexto = styled.h1`
font-family: 'Sora', sans-serif;
color: #fff;
font-size: 82px;
font-weight: 600;
@media (max-width: 1000px) {
    font-size: 64px;
}
@media (max-width: 825px) {
    font-size: 44px;
}
@media (max-width: 500px) {
   font-size: 28px;
}
  

`
export const DivTresCaixa = styled.div`
width: 100%;
max-height: auto;
display: flex;
flex-direction: column;
gap: 4rem;
z-index: 60;
background: rgb(0,0,0);
background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(29,29,29,1) 100%);




`
export const Caixa = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`
export const CaixaDois = styled.div`
width: 100%;
height: auto;
display: flex;
overflow: hidden;
`
export const CaixaTres = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: end;
justify-content: end;
overflow: hidden;
`
export const DivTextoCaixa = styled.div`
width: 70%;
display: flex;
justify-content: center;
align-items: start;
flex-direction: column;
gap: 1rem;
height: 500px;
background: #23232E;
padding: 0rem 4rem;
overflow: hidden;
@media (max-width: 825px) {

  height: 400PX;
}
    @media (max-width: 620px) {
        height: 300PX;
}
`;
export const DivCards = styled.div`
width: 70%;
height: auto;
display: grid;
gap: 2rem;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
justify-items: center;
margin-top: 2rem;



`
export const PaiGrid = styled.div`
width: auto;
height: auto;
display: flex;
justify-content: center;
padding-bottom: 4rem;
z-index: 60;
background: rgb(0,0,0);
background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(29,29,29,1) 100%);


`
export const CardCorpo = styled.a`
text-decoration: none;
width: 250px;
height: 500px;
display: flex;
justify-content: center;
flex-direction: column;
background: #23232E;
border-radius: 20px;

`
export const CardConteudo = styled.div`
width: 250px;
height: 60%;
display: flex;
flex-direction: column;

align-items: center;
text-align: center;
padding: 1rem 0;
gap: 0.5rem;
background: #23232E;


`
export const CardImage = styled.img`
width: 100%;
height: 50%;
`
export const CardTitulo = styled.h1`
font-family: 'Sora', sans-serif;
font-weight: 400;
font-size: 22px;
color: white;
`
export const CardButton = styled.button`
border: none;

font-family: 'Sora', sans-serif;
font-weight: 400;
font-size: 22px;
color: white;
background-color: #429D5B;
width: 100%;
height: 10%;
display: flex;
align-items: center;
justify-content: center;

`

export const Footer = styled.footer`
padding: 4rem 0;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background: #1d1d1d;
flex-direction: column;
gap: 2rem;
`
export const Alinhator = styled.div`
display: flex;
flex-direction: column;
`
export const Pessoal = styled.div`
height: 500px;
width: 80%;
display: flex;
gap: 2rem;
border-bottom: 2px solid black;
align-items: center;
justify-content: space-around;
@media (max-width: 600px) {

flex-direction: column-reverse;
align-items: center;
gap: 1rem;
height: auto;
padding: 1rem;
}
`
export const ImagePessoal = styled.img`
width: 400px;
height: 400px;
border-radius: 20px;
@media (max-width: 600px) {

    width: 300px;
height: 300px;
}

`
    
export const ItemsPessoal = styled.div`
width: 50%;
height: 450px;
display: flex;
flex-direction: column;
gap: 2rem;
@media (max-width: 600px) {

width: 80%;
text-align: center;

}

`
export const Progresso = styled.div`
    
    background-color: #2de10d;
    `
export const Barra = styled.div`
width: 80%;
height: 20px;
border-radius: 20px;
background-color: #d4d4d4;
> ${Progresso} {
    height: 100%;
    border-radius: 20px;
}

`
export const Alinhador = styled.div`
width: auto;
height: 100px;
display: flex;
justify-content: start;
flex-direction: column;
gap: 1rem;
align-items: start;
@media (max-width: 600px) {


${ParagBlack} {
    text-align: center;

}

}

`


