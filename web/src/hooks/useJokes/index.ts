import JokeService from "@src/services/JokeService";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@src/lib/react-query";

export function useJokes(query?: string) {
  const queryClient = useQueryClient();
  const getJokes = async () => {
    try {
      return JokeService.getJokes({ query });
    } catch {
      toast("Failed to get jokes", { type: "error" });
    }
  };

  const createJokes = async (joke: string) => {
    await JokeService.createJoke({ joke });
  };

  const jokesQuery = useQuery({
    queryKey: ["jokes", query],
    queryFn: getJokes,
    staleTime: 1000 * 60 * 100, // 5 minutes,
  });

  const createJokeMutation = useMutation({
    mutationFn: async (joke: string) => await createJokes(joke),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jokes", query] });
    },
    onError: () => toast("Failed to create joke", { type: "error" }),
  });

  return { jokesQuery, createJokeMutation };
}
