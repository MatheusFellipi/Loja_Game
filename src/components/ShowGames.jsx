import React, { useContext, useState } from 'react';
import { purchasePrice  } from '../context/PurchasePrice';
import dadosGames from "../products.json"


import sc from "../assets/fifa-18.png"
import {CardGame,Container,Span,Title} from "../styles/components/stylesShowGames"
function ShowGames() {
  const {setPrice,calculateFreight,setProduct} = useContext(purchasePrice);
  
  const [priceTotal,setPriceTotal] = useState(0);

  const purchaseItem =(priceItem,gameId,gameName)=>{
   const total = priceTotal + priceItem

   const product = {
    gameId:gameId, 
    name:gameName,
    price:priceItem
   }

   setPriceTotal(total);
   setPrice(total);
   setProduct((oldArr)=>[...oldArr,product])

   calculateFreight();
  }


  
  function sortArr(array) {
    return function(a, b) {
        if (a[array] > b[array]) {
            return 1;
        } else if (a[array] < b[array]) {
            return -1;
        }
        return 0;
    }
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