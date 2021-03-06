import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { purchasePrice } from "../context/PurchasePrice";
import { Header } from "../components";

import { ListPurchase, Item ,BuyMore,BackIcon} from "../styles/pages/stylesCar";
import backIcon from "../assets/back.png"

function Car() {
  const { product, freight, price,priceTotal,toRemove } = useContext(purchasePrice);
  console.log(product);

  return (
    <div className="containerCar">
      <Header />
      <BuyMore>
        <p>
          <Link to="/"> <BackIcon src={backIcon} /> Voltar as compras</Link>
        </p>
      </BuyMore>

      <>
        {product[0] ? (
          <ListPurchase>
            <ul>
              {product.map((item) => (
                <Item className="">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <button onClick={()=> toRemove(item.gameID,item.price)}>Remover</button>
                </Item>
              ))}
              <Item>
                <p>Frete </p>
                <p>{freight}</p>
              </Item>
              <Item>
                <p>SupTotal </p>
                <p>{price}</p>
              </Item>
              <Item>
                <p>Total + frete </p>
                <p>{priceTotal}</p>
              </Item>
            </ul>
          </ListPurchase>
        ) : (
          <p>
            <Link to="/">pega um item na loja</Link>
          </p>
        )}
      </>
    </div>
  );
}

export default Car;
