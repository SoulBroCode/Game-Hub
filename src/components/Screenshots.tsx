import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return <Spinner></Spinner>;

  if (error || !data) throw error; //error or data is undefined

  const first = data.results[0];

  if (!first) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data.results.map((file) => (
        <Image key={file.id} src={file.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameTrailer;
