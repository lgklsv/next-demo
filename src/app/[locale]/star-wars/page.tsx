import { MoviesList } from "@/components";
import React, { Suspense } from "react";
import { useTranslations } from "next-intl";

export default function StarWarsPage() {
  const t = useTranslations("StarWarsPage");

  return (
    <main>
      <h1 className="text-3xl">{t("title")}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MoviesList />
      </Suspense>
    </main>
  );
}
