import { useQuery } from "@tanstack/react-query";
import gameService from "../services/gameService";

const apiClient = gameService;

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });
};

export default useGame;
