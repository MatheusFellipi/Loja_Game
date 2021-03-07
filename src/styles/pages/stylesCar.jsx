import styled from "styled-components";

export const ListPurchase = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 1rem;
`;
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 1rem 1rem;
  border-bottom: solid 1px #dfe2e8;
`;
export const BuyMore = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 5rem 2rem;
`;
export const BackIcon = styled.img`
  width:15px;
  height:15px;
`;
export const Text = styled.p`
  font-size:20px;
  display:flex;
  justify-content:center;
  align-items:center;
`;
export const Button = styled.button`
  margin-top: 1rem;
  font-size: 16px;
  border:0;
  border-radius:10px;
  background-color:#E0E0DE ;
  width:5.5rem;
  height:2rem;
  :howver{
    background-color:#616160 ;
    color:#fff;
  }
`;