import { NextRequest } from "next/server";
import { createApi } from "unsplash-js";

export async function GET(request: NextRequest) {
  const client = createApi({
    accessKey: process.env.UNSPLASH_API_ACCESS_KEY!,
  });

  const query = request.nextUrl.searchParams.get("query") as string;
  const page = +(request.nextUrl.searchParams.get("page") as string);
  const perPage = +(request.nextUrl.searchParams.get("perPage") as string);

  const res = await client.search.getPhotos({ query, page, perPage });

  return new Response(JSON.stringify(res.response), {
    // one hour cache
    headers: [["Cache-Control", "max-age=3600"]],
  });
}
