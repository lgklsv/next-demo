import { MoviesList } from "@/components";
import React, { Suspense, use } from "react";
import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function StarWarsPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

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
