import { ImageResponse } from 'next/og';

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get('title') || 'Blog Tech Innovation';

  return new ImageResponse(
    (
      <div className="flex h-full w-full flex-col items-center justify-center bg-white">
        <div className="flex w-full flex-col justify-between p-8 px-4 py-12 md:flex-row md:items-center">
          <h2 className="flex flex-col text-left text-4xl font-bold tracking-tight">
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
