export async function POST(req) {
  const data = await req.json();
  console.log(data);
  return new Response("Hello, Next.js!");
}
