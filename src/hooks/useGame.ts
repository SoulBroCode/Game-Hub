import { useQuery } from "@tanstack/react-query";
import gameService from "../services/gameService";
import ms from "ms";

const apiClient = gameService;

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });
};

export default useGame;
