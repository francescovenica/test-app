import React from "react";
import List from "../../components/List";
import { useAppContext } from "../../context/app";
import { Title } from "./styles";

const Ranking = () => {
  const { ranking } = useAppContext();
  return (
    <>
      <Title>Ranking</Title>
      <List ranking={ranking} />
    </>
  );
};

export default Ranking;
