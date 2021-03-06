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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  height: 350px;
`;
export const Title = styled.p`
  padding: 1rem;
  margin-top: 0.5rem;
  text-align: center;
`;

export const Span = styled.span`
  width: 30px;
  height: 50px;
  border: solid 1px #e9e9e9;
  border-radius: 10px;
  background: #e9e9e9;
  padding: 10px;

`;