import React, { , useEffect, useState } from 'react';
import dadosGames from "../products.json"
import {CardGame,Container,Span,Title} from "../styles/components/stylesShowGames"

function ShowGames() {
  
  const [priceTotal,setPriceTotal] = useState(0);


  const purchaseItem =(priceItem)=>{
   const total = priceTotal + priceItem
   setPriceTotal(total);
  }

  return (
    <Container>
      <>
        {dadosGames.map((games)=>(
          <CardGame key={games.id}>
            <img src={sc} alt=""/>
            <Title > {games.name} <Span >{games.score}</Span> </Title>
            <Title >Valor: {games.price} </Title>
            <button onClick={() => purchaseItem(games.price,games.id,games.name)}>comprar</button>
          </CardGame>
        ))}
      </>
    </Container>
  );
}

export default ShowGames;