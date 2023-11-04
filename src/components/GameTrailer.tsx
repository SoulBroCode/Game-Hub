import useTrailers from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <Spinner></Spinner>;

  if (error || !data) throw error; //error or data is undefined

  const first = data.results[0];

  if (!first) return null;

  console.log(first.data[480]);

  return <video src={first.data[480]} poster={first.preview} controls />;
};

export default GameTrailer;
