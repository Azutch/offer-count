export async function onRequestGet(context) {
  try {
    const v = await context.env.OFFER_KV.get("kai-list");
    return new Response("KV OK: " + v);
  } catch (e) {
    return new Response("ERROR: " + e.message + " / " + e.stack);
  }
}
