import React, { useState, useEffect } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";

import Button from "../../components/Button";
import Card from "../../components/Card";

import { TOTAL_COUNTS, PERSON, STARSHIP } from "../../graphql/queries";
import { Page, Head, Cards, Points, Title, Teams, PlayButton } from "./styles";
import { getRandomNumber } from "../../utils";
import { useAppContext } from "../../context/app";

const TYPE_PERSON = "person";
const TYPE_STARSHIP = "starship";

interface ICounts {
  person: number;
  starship: number;
}

interface ICard {
  name: string;
  height: number;
  hyperdriveRating: number;
}

const App = () => {
  const { ranking, setRanking } = useAppContext();
  const [team, setTeam] = useState<string>(TYPE_PERSON);
  const [compareBy, setCompareBy] = useState<"height" | "hyperdriveRating">(
    "height"
  );
  const [cards, setCards] = useState<ICard[]>([]);
  const [players, setPlayers] = useState<number>(2);
  const [points, setPoints] = useState<number[]>([]);
  const [playedCards, setPlayedCards] = useState<number[]>([]);
  const [totalCounts, setTotalCounts] = useState<ICounts>({
    [TYPE_PERSON]: 0,
    [TYPE_STARSHIP]: 0,
  });

  useQuery(TOTAL_COUNTS, {
    onCompleted: ({ allPeople, allStarships }) =>
      setTotalCounts({
        [TYPE_PERSON]: allPeople.totalCount,
        [TYPE_STARSHIP]: allStarships.totalCount,
      }),
  });

  const [fetchPerson, { loading: loadingPerson }] = useLazyQuery(PERSON, {
    onCompleted: ({ person }) => {
      // As there are not api to get players by ids I need to loop a single query
      // To improve the app we should create a new resolver that accept
      // an array of ids in order to run just 1 query instead of multiple queries
      setCards((prevState) => {
        const newState = [...prevState, person];
        if (newState.length < players) {
          fetchCards(false);
        }
        return newState;
      });
    },
    onError: (error) => {
      // If the api return an error "No entry in local cache"
      // I send a new request with different random ids
      fetchCards(false);
    },
  });

  const [fetchStarship, { loading: loadingStarship }] = useLazyQuery(STARSHIP, {
    onCompleted: ({ starship }) => {
      setCards((prevState) => {
        const newState = [...prevState, starship];
        if (newState.length < players) {
          fetchCards(false);
        }
        return newState;
      });
    },
    onError: (error) => {
      // If the api return an error "No entry in local cache"
      // I send a new request with different random ids
      fetchCards(false);
    },
  });

  const fetchCards = (isRound: boolean = true) => {
    if (isRound) {
      setCards([]);
    }
    if (team === TYPE_PERSON) {
      const personID = getRandomNumber(totalCounts[TYPE_PERSON], playedCards);
      fetchPerson({
        variables: {
          personID,
        },
      });
      setPlayedCards([...playedCards, personID]);
    } else {
      const starshipID = getRandomNumber(
        totalCounts[TYPE_STARSHIP],
        playedCards
      );
      fetchStarship({
        variables: {
          starshipID,
        },
      });
      setPlayedCards([...playedCards, starshipID]);
    }
  };

  const initGame = () => {
    setPlayedCards([]);
    setPoints(new Array(players).fill(0));
    setCompareBy(team === TYPE_PERSON ? "height" : "hyperdriveRating");
  };

  const onPLayClick = () => {
    initGame();
    fetchCards(true);
  };

  const onNewCards = () => {
    if (totalCounts[TYPE_PERSON] - playedCards.length > players) {
      setCards([]);
      fetchCards(true);
    } else {
      const name = prompt("Please enter your name to save the game");
      if (name) {
        setRanking([
          ...ranking,
          {
            name,
            points: points[0],
          },
        ]);
        initGame();
      }
    }
  };

  useEffect(() => {
    const calculateRoundWinner = () => {
      let winner: number = 0;

      cards.forEach((card: ICard, index: number) => {
        if (card && card[compareBy] > cards[winner][compareBy]) {
          winner = index;
        }
      });

      setPoints((prevState) => {
        const newState = [...prevState];
        newState[winner] = newState[winner] + 1;
        return newState;
      });
    };
    if (cards.length === players) {
      calculateRoundWinner();
    }
  }, [cards, players, compareBy]);

  useEffect(() => {
    initGame();
  }, [team, players]);

  return (
    <Page>
      <Head>
        <Title>How many player?</Title>
        <Teams>
          <Button
            active={players === 2}
            title="2"
            onClick={() => setPlayers(2)}
          />
          <Button
            active={players === 3}
            title="3"
            onClick={() => setPlayers(3)}
          />
        </Teams>
        <Title>Chose a Team</Title>
        <Teams>
          <Button
            active={team === TYPE_PERSON}
            title="People"
            onClick={() => setTeam(TYPE_PERSON)}
          />
          <Button
            active={team === TYPE_STARSHIP}
            title="Starship"
            onClick={() => setTeam(TYPE_STARSHIP)}
          />
        </Teams>
        {playedCards.length === 0 && (
          <>
            <Title>Start the game</Title>
            <PlayButton
              title="Play"
              onClick={onPLayClick}
              disabled={loadingStarship || loadingPerson}
            />
          </>
        )}
      </Head>
      <>
        <Cards>
          {cards.length === players &&
            cards.map((card, index) => (
              <Card key={`card-${index}`} {...card} compareBy={compareBy} />
            ))}
        </Cards>
        {playedCards.length > 0 && (
          <>
            <Title>Next turn</Title>
            <PlayButton
              title="New cards"
              onClick={onNewCards}
              disabled={loadingStarship || loadingPerson}
            />
            <Title>Points</Title>
            <Points>
              {points.map((point, index) => (
                <span key={`player-${index}`}>
                  {index === 0
                    ? `You: ${point || 0}`
                    : `Player ${index}: ${point || 0}`}
                </span>
              ))}
            </Points>
          </>
        )}
      </>
    </Page>
  );
};

export default App;
