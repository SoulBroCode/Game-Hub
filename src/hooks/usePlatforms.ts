import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: platforms, isLoading: false, error: null }); //useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
