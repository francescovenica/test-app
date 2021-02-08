import styled from "styled-components";

export const Container = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  border: 10px solid #feaf0a;
  background-color: #feaf0a;
  margin: 10px;
  width: 100%;
`;
export const ImageContainer = styled.div`
  height: 50%;
  overflow: hidden;
  position: relative;
  img {
    transform: translateX(-50%) translateY(-50%) scale(0.1);
    position: absolute;
    height: auto !important;
    width: auto !important;
    max-width: initial !important;
    max-height: initial !important;
    min-height: 1010%;
    min-width: 1010%;
    left: 50%;
    top: 50%;
  }
  border-bottom: 10px solid #feaf0a;
`;
export const Name = styled.div`
  font-weight: bold;
  padding: 10px;
`;
export const Parameter = styled.div`
  padding: 10px;
`;
