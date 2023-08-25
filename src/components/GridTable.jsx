import React from 'react'
import { GridDiv, GridText, GridTextBlack, IconeContato, ItemGrid, ItemGridBlack, Separator } from '../Style'

const GridTable = () => {
  return (
    <GridDiv>
      <Separator>  <ItemGrid><IconeContato src = 'https://github.com/samuelDev239/PortifolioDev/blob/main/src/img/git.png?raw=true'></IconeContato></ItemGrid>
        <ItemGridBlack href = 'https://github.com/samuelDev239'><GridText>Clique-aqui</GridText></ItemGridBlack>
        <ItemGrid><GridTextBlack>Git Hub</GridTextBlack></ItemGrid></Separator>
      <Separator> <ItemGrid><IconeContato src = 'https://github.com/samuelDev239/PortifolioDev/blob/main/src/img/email.png?raw=true'></IconeContato></ItemGrid>
        <ItemGridBlack><GridText>Clique-aqui</GridText></ItemGridBlack>
        <ItemGrid><GridTextBlack>E-mail</GridTextBlack></ItemGrid></Separator>
      <Separator><ItemGrid><IconeContato src = 'https://github.com/samuelDev239/PortifolioDev/blob/main/src/img/insta.png?raw=true'></IconeContato></ItemGrid>
        <ItemGridBlack href = 'https://www.instagram.com/samuel_esouzaz/'><GridText>Clique-aqui</GridText></ItemGridBlack>
        <ItemGrid><GridTextBlack>instagram</GridTextBlack></ItemGrid></Separator>
      <Separator>  
        <ItemGrid><IconeContato src = 'https://github.com/samuelDev239/PortifolioDev/blob/main/src/img/linkedin.png?raw=true'></IconeContato></ItemGrid>
        <ItemGridBlack href = 'https://www.linkedin.com/in/samuel-luciano-225099251/'><GridText>Clique-aqui</GridText></ItemGridBlack>
        <ItemGrid><GridTextBlack>linkedin</GridTextBlack></ItemGrid></Separator>
    </GridDiv>
  )
}

export default GridTable