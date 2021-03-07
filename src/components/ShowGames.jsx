import React, { useContext, useEffect, useState } from "react";
import { purchasePrice } from "../context/PurchasePrice";
import dadosGames from "../products.json";

import sc from "../assets/fifa-18.png";
import {
  CardGame,
  Container,
  Span,
  Title,
  TitlePrice,
  CardText,
  CardGameImg,
  Button,
} from "../styles/components/stylesShowGames";

function ShowGames() {
  const [dados, setDados] = useState(dadosGames);
  const [value, setValue] = useState(dadosGames);

  const { setProduct } = useContext(purchasePrice);

  const purchaseItem = (priceItem, gameId, gameName) => {
    const product = {
      gameId: gameId,
      name: gameName,
      price: priceItem,
    };
    setProduct((oldArr) => [...oldArr, product]);
  };

  function hadleClick(e) {
    setValue(e);
    sortList();
  }
  
  function sortList() {
    if (value === "1") {
      dadosGames.sort(sortArr("name"));
    }
    if (value === "2") {
      dadosGames.sort(sortArr("score"));
    }
    if (value === "3") {
      dadosGames.sort(sortArr("price"));
    }
  }

  function sortArr(array) {
    return function (a, b) {
      if (a[array] > b[array]) {
        return 1;
      } else if (a[array] < b[array]) {
        return -1;
      }
      return 0;
    };
  }

  return (
    <Container>
      <button onClick={() => hadleClick("1")}>nome</button>
      <button onClick={() => hadleClick("2")}>score</button>
      <button onClick={() => hadleClick("3")}>precos</button>
      <>
        {dados.map((games) => (
          <CardGame key={games.id}>
            <CardGameImg>
              <img src={sc} alt="" />
              <Span>
                {" "}
                <p>{games.score}</p>{" "}
              </Span>
            </CardGameImg>

            <CardText>
              <Title> {games.name} </Title>
              <TitlePrice>R$ {games.price} </TitlePrice>
              <Button
                onClick={() => purchaseItem(games.price, games.id, games.name)}
              >
                comprar
              </Button>
            </CardText>
          </CardGame>
        ))}
      </>
    </Container>
  );
}

export default ShowGames;
