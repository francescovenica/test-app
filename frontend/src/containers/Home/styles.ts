import styled from "styled-components";
import Button from "../../components/Button";

export const Title = styled.h2`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const Page = styled.div``;
export const Head = styled.div`
  width: 100%;
`;
export const Teams = styled.div`
  text-align: center;
  button {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
export const Cards = styled.div`
  justify-content: space-between;
  margin: 50px auto;
  display: flex;
  width: 800px;
  height: 40vh;
`;
export const Points = styled.div`
  padding-top: 15px;
  text-align: center;
  span {
    margin-bottom: 15px;
    font-size: 20px;
    display: block;
  }
`;

export const PlayButton = styled(Button)`
  margin: 0 auto;
  display: block;
`;
