import { MoviesList } from "@/components";
import React, { Suspense } from "react";

export default function StarWarsPage() {
  return (
    <main>
      <h1 className="text-3xl">Star wars movies</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MoviesList />
      </Suspense>
    </main>
  );
}
