import { createContext, useState } from "react";

export const purchasePrice = createContext({});

export function PurchasePriceProvider({ children }) {
  const [price, setPrice] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);
  const [freight, setFreight] = useState(10);
  const [product, setProduct] = useState([]);

  console.log(product);
  const toRemove = (gameID,priceItem) => {
    product.splice(product.indexOf(gameID));
    
    setPrice(price - priceItem);
    
    calculateFreight();

    console.log(priceTotal);
    console.log(product);
  };

  const calculateFreight = () => {
    if (price >= 250) {
      setFreight(0);
    } else if (price < 250) {
      setPriceTotal(price + freight);
    }
  };

  return (
    <purchasePrice.Provider
      value={{
        price,
        setPrice,
        priceTotal,
        freight,
        calculateFreight,
        setProduct,
        setPriceTotal,
        toRemove,
        product,
      }}
    >
      {children}
    </purchasePrice.Provider>
  );
}
