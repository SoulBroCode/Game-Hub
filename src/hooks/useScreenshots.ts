import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Screenshots } from "../entities/Screenshots";
import ms from "ms";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshots>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useScreenshots;
