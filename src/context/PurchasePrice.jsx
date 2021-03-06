import { createContext, useState } from "react";

export const purchasePrice = createContext({});

export function PurchasePriceProvider({ children }) {
  const [product, setProduct] = useState([]);
  
  const [price, setPrice] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);
  
  const [freight, setFreight] = useState(10);

  const toRemove = (gameID,priceItem) => {
    product.splice(product.indexOf(gameID));
    setPrice(price - priceItem);
    calculateFreight();
  };
  console.log(product);

  function calculatePrice() {
    const total = product.reduce(getTotal,0)
    console.log(total);
  }

  function getTotal(total, item) {
    return total + item.price;
   }


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
        calculatePrice,
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
