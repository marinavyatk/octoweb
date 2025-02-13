import { Metadata } from "next";
import { OpenGraph, OpenGraphType } from "next/dist/lib/metadata/types/opengraph-types";
import { Robots } from "next/dist/lib/metadata/types/metadata-types";
import type { Twitter } from "next/dist/lib/metadata/types/twitter-types";

export const formatNumber = (index: number) => {
  const number = index + 1;
  return number > 9 ? String(number) : `0${number}`;
};

export const formatPhoneNumber = (number: string) => {
  return number.replace(/[^\d+]+/g, "");
};

type YoastRobots = {
  index?: string;
  follow?: string;
  nocache?: string;
  ["max-snippet"]?: string;
  ["max-video-preview"]?: string;
  ["max-image-preview"]?: string;
};

type YoastJson = {
  title?: string;
  description?: string;
  canonical?: string;
  og_locale?: string;
  og_type?: string;
  og_title?: string;
  og_description?: string;
  og_url?: string;
  og_site_name?: string;
  og_image?: { url: string; width?: number; height?: number; alt?: string }[];
  robots?: YoastRobots;
  twitter_card?: string;
  twitter_misc?: Record<string, string>;
};


export const getMetaDataObj = (yoastJson: YoastJson) => {
  const meta: Metadata = {};
  if (yoastJson.title) {
    meta.title = yoastJson.title;
  }
  if (yoastJson.description) {
    meta.description = yoastJson.description;
  }
  if (yoastJson.canonical) {
    meta.alternates = {};
    meta.alternates.canonical = yoastJson.canonical;
  }
  //open graph
  if (yoastJson.og_locale) {
    meta.openGraph = meta.openGraph || {};
    meta.openGraph.locale = yoastJson.og_locale;
  }
  if (yoastJson.og_type) {
    meta.openGraph = (meta.openGraph || {}) as OpenGraph;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    meta.openGraph.type = yoastJson.og_type as OpenGraphType;
  }
  if (yoastJson.og_title) {
    meta.openGraph = meta.openGraph || {};
    meta.openGraph.title = yoastJson.og_title;
  }
  if (yoastJson.og_description) {
    meta.openGraph = meta.openGraph || {};
    meta.openGraph.description = yoastJson.og_description;
  }
  if (yoastJson.og_url) {
    meta.openGraph = meta.openGraph || {};
    meta.openGraph.url = yoastJson.og_url;
  }
  if (yoastJson.og_site_name) {
    meta.openGraph = meta.openGraph || {};
    meta.openGraph.siteName = yoastJson.og_site_name;
  }
  if (yoastJson.og_image) {
    meta.openGraph = meta.openGraph || {};
    meta.openGraph.images = yoastJson.og_image;
  }
  //robots
  if (yoastJson.robots?.index === "index") {
    meta.robots = (meta.robots || {}) as Robots;
    meta.robots.index = true;
  }
  if (yoastJson.robots?.follow === "follow") {
    meta.robots = (meta.robots || {}) as Robots;
    meta.robots.follow = true;
  }
  if (yoastJson.robots?.nocache === "nocache") {
    meta.robots = (meta.robots || {}) as Robots;
    meta.robots.nocache = true;
  }
  if (yoastJson.robots?.["max-snippet"]) {
    meta.robots = (meta.robots || {}) as Robots;
    meta.robots.googleBot = meta.robots.googleBot || {};
    const splittedString = yoastJson.robots?.["max-snippet"].split(":");
    const value = splittedString[splittedString.length - 1];
    (meta.robots.googleBot as Record<string, unknown>)["max-snippet"] = Number(value);
  }
  if (yoastJson.robots?.["max-video-preview"]) {
    meta.robots = (meta.robots || {}) as Robots;
    meta.robots.googleBot = meta.robots.googleBot || {};
    const splittedString = yoastJson.robots?.["max-video-preview"].split(":");
    const value = splittedString[splittedString.length - 1];
    (meta.robots.googleBot as Record<string, unknown>)["max-video-preview"] = value;
  }
  if (yoastJson.robots?.["max-image-preview"]) {
    meta.robots = (meta.robots || {}) as Robots;
    meta.robots.googleBot = meta.robots.googleBot || {};
    const splittedString = yoastJson.robots?.["max-image-preview"].split(":");
    const value = splittedString[splittedString.length - 1];
    (meta.robots.googleBot as Record<string, unknown>)["max-image-preview"] = value;
  }

//twitter
  if (yoastJson.twitter_card) {
    meta.twitter = (meta.twitter || {}) as Twitter;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    meta.twitter.card = yoastJson.twitter_card;
  }
  if (yoastJson.twitter_misc) {
    meta.twitter = (meta.twitter || {}) as Twitter;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    meta.twitter.misc = yoastJson.twitter_misc
  }


  return meta;
};