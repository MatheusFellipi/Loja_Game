import styled from "styled-components"

export const Container = styled.div`
  margin: 5rem 1rem;
  font-size: 16px;
  font-weight: 400;
  color: #000;

`;

export const ContainerMain = styled.div`
  display:flex;
  justify-content:center;
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction:column;
  margin-top:12rem;

  width:250px;
  height:350px;

  
  @media(max-width: 700px) {
    display:none;
  }


`;
export const Ul = styled.ul`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  padding:1rem;
`;



export const ContainerCard = styled.div`
  margin: 5rem 0rem 0 0;
  font-size: 16px;
  font-weight: 400;
  color: #000;

  display: flex;
  flex-wrap:wrap;
  justify-content:flex-end;
  align-items:center;
  margin-left: 10rem;

  width: 1000px;

  @media(max-width: 600px) {
    display:flex;
    flex-direction:column;
    margin-left: -1rem;
  }

  
`;

export const CardGame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;
  height: 350px;
  border: solid 1px #EBECF0;
  border-radius:1rem;
  margin:0.5rem;
  :hover{
    background:#EBECF0;
  }
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

export const ContainerButton = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  text-align:justify;
  
  font-size:20px;
  
  @media(min-width: 1080px) {
    align-items: flex-end;
    justify-content: center;
  }
`;


export const DivButton = styled.div`
  display: flex;
  display:none;
  align-items: center;
  justify-content: center;
  text-align:justify;
  @media(max-width: 600px) {
    display:block;
  }

`;

