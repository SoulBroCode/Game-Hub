import { useParams } from "react-router-dom";
import { Heading, Spinner } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import Screenshots from "../components/Screenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // ! means that slug can't never be undefined

  if (isLoading) return <Spinner></Spinner>;

  if (error || !game) throw error; //error or game is undefined

  return (
    <>
      <Heading>{game?.slug}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>
      <GameAttributes game={game}></GameAttributes>
      <GameTrailer gameId={game.id} />
      <Screenshots gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
