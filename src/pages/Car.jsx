import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { purchasePrice } from "../Context";
import { Header } from "../components";

function Car() {
  const { product } = useContext(purchasePrice);
  console.log(product);

  return (
    <div className="containerCar">
      <Header />
      <p>
        <Link to="/">loja</Link>
      </p>

      <div>
        {product[0] ? (
          
          <div className="listPurchase">
            <ul >
              {product.map((item) => (
                <li className="items">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </li>
              ))}
            </ul>
          </div>
          
        ) : (
          <p>
            <Link to="/">pega um item na loja</Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default Car;
