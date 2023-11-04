import { FetchResponse } from "../services/api-client";
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";
import ms from "ms";
import useGameQueryStore from "../store";
import gameService from "../services/gameService";
import Game from "../entities/Game";

const apiClient = gameService;

const useGames = () => {
  const gameQuery = useGameQueryStore((store) => store.gameQuery);
  return useInfiniteQuery<
    FetchResponse<Game>,
    Error,
    InfiniteData<FetchResponse<Game>, number>,
    QueryKey,
    number
  >({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => {
      return apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"), // 24
  });

  /*
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );*/
};

export default useGames;
