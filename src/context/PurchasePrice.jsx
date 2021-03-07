import { createContext, useEffect, useState } from "react";

export const purchasePrice = createContext({});

export function PurchasePriceProvider({ children }) {
  const [product, setProduct] = useState([]);

  const [price, setPrice] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);

  const [freight, setFreight] = useState();

  useEffect(() => {
    calculatePrice();
  }, [product]);

  useEffect(() => {

    if (price < 250) {
      setFreight(10);
      const total = priceTotal + freight;
      setPriceTotal(total);
    }
    if (price >= 250) {
      setFreight(0);
    }
  }, [price,freight]);
  
  const toRemove = (gameID, priceItem) => {
    product.splice(product.indexOf(gameID));
    setPrice(price - priceItem);
    setPriceTotal(priceTotal - priceItem);
    if (price < 250) {
      setFreight(10);
    }
  };

  function calculatePrice() {
    const total = product.reduce(getTotal, 0);
    setPrice(total);
    setPriceTotal(total);
  }

  function getTotal(total, item) {
    return total + item.price;
  }

  return (
    <purchasePrice.Provider
      value={{
        price,
        setPrice,
        priceTotal,
        freight,
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
