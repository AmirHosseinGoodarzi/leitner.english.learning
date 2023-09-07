"use client";

import Button from "@/components/button";
import PageHeader from "@/components/pageHeader";
import grammarTitles from "@/data/grammar";
import ROUTES_OBJECT from "@/utils/RoutesObject";
import { ButtonTypes } from "@/utils/enums";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GrammarContent({
  params,
}: {
  params: { link: string };
}) {
  const router = useRouter();
  const grammar = grammarTitles.find((item) => item.href === "/" + params.link);
  console.log({ grammar });
  if (!grammar) {
    router.push(ROUTES_OBJECT.grammar);
    return <></>;
  }

  return (
    <div className="relative pb-10">
      <PageHeader
        hint="Grammar"
        title={grammar.title}
        description={grammar.subtitle ?? ""}
      />
      <Link href={ROUTES_OBJECT.grammar} className="absolute -top-8 -right-3">
        <Button variant={ButtonTypes.Outline} icon={"<-"}>
          <div className="hidden md:block">Back to list</div>
        </Button>
      </Link>
    </div>
  );
}
