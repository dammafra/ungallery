import { NextRequest } from "next/server";
import { createApi } from "unsplash-js";

export async function GET(request: NextRequest) {
  const client = createApi({
    accessKey: process.env.UNSPLASH_API_ACCESS_KEY!,
  });

  // TODO: improve with models and adapters
  const photoId = request.nextUrl.searchParams.get("id") as string;

  const res = await client.photos.get({ photoId });

  return new Response(JSON.stringify(res));
}
