import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function Home({ params }: Props) {
  const { locale } = use(params);

  const t = useTranslations("HomePage");

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
