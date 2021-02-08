import React from "react";
import { StyledListItem, Name, Points } from "./styles";

interface IProps {
  name: string;
  points: number;
}
const ListItem = ({ name, points }: IProps) => (
  <StyledListItem>
    <Name>{name}</Name>
    <Points>{points}</Points>
  </StyledListItem>
);

export default ListItem;
