"use client";

import { useEffect, useState } from "react";
import parse, { domToReact } from "html-react-parser";

type HeadProps = {
  seoString: string;
}

export const HeadCustom = (props: HeadProps) => {
  const { seoString } = props;
  const [parsedSEO, setParsedSEO] = useState<ReturnType<typeof domToReact>>();
  useEffect(() => {
    setParsedSEO(parse(seoString));
  }, [seoString]);

  return <>{parsedSEO}</>;
};