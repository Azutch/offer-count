export async function onRequestGet(context) {
  const v = await context.env.OFFER_KV.get("kai-list");
  return new Response("KV OK: " + v);
}
