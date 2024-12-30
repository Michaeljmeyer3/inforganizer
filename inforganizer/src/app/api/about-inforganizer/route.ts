import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export async function GET(Request) {
  return new Response("This is a new API route");
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}

