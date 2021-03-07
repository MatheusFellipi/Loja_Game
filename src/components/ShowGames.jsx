import React, { useContext } from 'react';
import { purchasePrice  } from '../context/PurchasePrice';
import dadosGames from "../products.json"


import sc from "../assets/fifa-18.png"
import {CardGame,Container,Span,Title,
  TitlePrice,CardText,CardGameImg,Button} from "../styles/components/stylesShowGames"

function ShowGames() {

  const {setProduct} = useContext(purchasePrice);

  
  const purchaseItem =(priceItem,gameId,gameName)=>{
   const product = {
    gameId:gameId, 
    name:gameName,
    price:priceItem
   }   
   setProduct((oldArr)=>[...oldArr,product])
  }

  return (
    <Container>
      <>
        {dadosGames.map((games)=>(
          <CardGame key={games.id}>

            <CardGameImg>
              <img src={sc} alt=""/>
              <Span> <p>{games.score}</p> </Span>
            </CardGameImg>

            <CardText>
              
              <Title > {games.name}  </Title>
              <TitlePrice >R$ {games.price} </TitlePrice>
              <Button onClick={() => purchaseItem(games.price,games.id,games.name)}>comprar</Button>
            </CardText>
          </CardGame>
        ))}
      </>
    </Container>
  );
}

export default ShowGames;