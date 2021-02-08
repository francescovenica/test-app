import React from "react";
import ListItem from "./ListItem";
import { StyledList } from "./styles";

interface Props {
  ranking: Ranking[];
}

const List = ({ ranking }: Props) => (
  <StyledList>
    {ranking.map((item) => (
      <ListItem name={item.name} points={item.points} />
    ))}
  </StyledList>
);

export default List;
