import { H1, P } from "@/components/ui/typography";
import { Link } from "@/translations/navigation";
import { useFormatter, useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const format = useFormatter();

  const dateTime = new Date("2025-07-28T10:36:01.516Z");

  return (
    <div>
      <H1>{t("title")}</H1>
      <Link href="/about">{t("about")}</Link>
      <P>
        {format.dateTime(dateTime, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </P>
      <P>
        {format.dateTime(dateTime, {
          hour: "numeric",
          minute: "numeric",
        })}
      </P>
    </div>
  );
}
