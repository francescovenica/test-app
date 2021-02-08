import React from "react";
import { Container, ImageContainer, Name, Parameter } from "./styles";

type Props = {
  name: string;
  height?: number;
  hyperdriveRating?: number;
  compareBy: "height" | "hyperdriveRating";
};

const Card = ({ compareBy, name, ...rest }: Props) => (
  <Container>
    <ImageContainer>
      <img
        src="https://static1.funidelia.com/55466-f6_big2/lampada-da-muro-3d-star-wars-logo.jpg"
        alt="Logo"
      />
    </ImageContainer>
    <Name>{name}</Name>
    <Parameter>
      {compareBy} <b>{rest[compareBy]}</b>
    </Parameter>
  </Container>
);

export default Card;
