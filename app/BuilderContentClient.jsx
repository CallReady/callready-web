"use client";

import { Content } from "@builder.io/sdk-react";

export default function BuilderContentClient({ content }) {
return <Content model="page" content={content} />;
}