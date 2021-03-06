import React, { useContext, useState } from 'react';
import { purchasePrice  } from '../context/PurchasePrice';
import dadosGames from "../products.json"


import sc from "../assets/fifa-18.png"
import {CardGame,Container,Span,Title} from "../styles/components/stylesShowGames"
function ShowGames() {
  const {setPrice,calculateFreight,setProduct,setPriceTotal} = useContext(purchasePrice);
  
  const [priceTotalCompo,setPriceTotalCompo] = useState();

  const purchaseItem =(priceItem,gameId,gameName)=>{
   const total = priceTotalCompo + priceItem
   
  console.log(priceTotalCompo);
   const product = {
    gameId:gameId, 
    name:gameName,
    price:priceItem
   }

   setPriceTotalCompo(total)
   setPriceTotal(total);
   setPrice(total);
   setProduct((oldArr)=>[...oldArr,product])

   calculateFreight();
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