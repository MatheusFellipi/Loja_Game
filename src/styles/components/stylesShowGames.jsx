import styled from "styled-components"

export const Container = styled.div`
  margin: 5rem 1rem;
  font-size: 16px;
  font-weight: 400;
  color: #000;

  display: flex;
  flex-direction: column;
`;
export const CardGame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;
  height: 350px;
  border-bottom: solid 1px
`;

export const CardGameImg = styled.div`
  display: flex; 
`;

export const CardText = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  text-align:justify;
  margin-left:1rem ;
  flex: 1;
`;
export const TitlePrice = styled.div`
  width: 100%;
  font-size: 24px;
`;

export const Title = styled.p`
  width:100%;
  font-size: 18px;
  text-align:start;
  margin:-2rem 1rem 2rem 1rem;
`;

export const Span = styled.span`
  display: flex;
  justify-content:center;
  align-items:center;

  border-radius: 1rem;
  width:3.5rem;
  height:3.5rem;

  margin-left:-1rem;

  background-color: #E0E0DE ;
`;

export const Button = styled.button`
  margin-top: 1rem;
  font-weight:bold;
  font-size: 18px;
  border:0;
  border-radius:3px;
  background-color:#E0E0DE ;
  width:5.5rem;
  height:2.5rem;
  :hover{
    background-color:#616160 ;
    color:#fff;
  }
`;