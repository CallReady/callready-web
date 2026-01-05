export const dynamic = "force-dynamic";
export const revalidate = 0;

import { builder } from "@builder.io/sdk";
import BuilderContentClient from "./BuilderContentClient";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default async function Page() {
const content = await builder
.get("page", { url: "/" }, { cachebust: true })
.toPromise();

if (!content) {
return <div>No Builder content found</div>;
}

return <BuilderContentClient content={content} />;
}