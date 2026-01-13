export const dynamic = "force-dynamic";
export const revalidate = 0;

import { builder } from "@builder.io/sdk";
import BuilderContentClient from "../BuilderContentClient.jsx";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

function pathFromParams(params) {
  const parts = params && params.slug ? params.slug : [];
  if (!Array.isArray(parts) || parts.length === 0) return "/";
  return "/" + parts.join("/");
}

function getSeoValue(data, keys) {
  if (!data) return "";
  for (const k of keys) {
    if (data[k]) return String(data[k]);
  }
  return "";
}

export async function generateMetadata({ params }) {
  const urlPath = pathFromParams(params);

  const content = await builder
    .get("page", { url: urlPath }, { cachebust: true })
    .toPromise();

  const data = content && content.data ? content.data : {};

  const title =
    getSeoValue(data, ["title", "seoTitle", "metaTitle"]) ||
    "Practice Phone Calls Without Pressure | CallReady";

  const description =
    getSeoValue(data, ["description", "seoDescription", "metaDescription"]) ||
    "A calm, supportive way to practice phone calls when real calls feel overwhelming.";

  return { title, description };
}

export default async function Page({ params }) {
  const urlPath = pathFromParams(params);

  const content = await builder
    .get("page", { url: urlPath }, { cachebust: true })
    .toPromise();

  if (!content) {
    return <div>Page not found</div>;
  }

  return <BuilderContentClient content={content} />;
}
