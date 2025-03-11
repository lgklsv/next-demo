"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

export default function MoviesList() {
  const { data } = useSuspenseQuery({
    queryKey: ["movies"],
    queryFn: () =>
      fetch("https://star-wars.brillout.com/api/films.json").then((res) =>
        res.json(),
      ),
  });

  const movies = data.results;

  return (
    <ol>
      {movies.map(
        (movie: {
          episode_id: string;
          title: string;
          release_date: string;
        }) => (
          <li key={movie.episode_id}>
            {movie.title} ({movie.release_date})
          </li>
        ),
      )}
    </ol>
  );
}
