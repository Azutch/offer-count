const KAGI = "sethyou";

export async function onRequestGet(context) {
  const hairetteta = await context.env.OFFER_KV.get(KAGI);

  let gazou = "";
  if (hairetteta !== null) {
    gazou = hairetteta;
  }

  return new Response(JSON.stringify({ gazou: gazou }), {
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}

export async function onRequestPost(context) {
  const okuraretaMono = await context.request.text();
  await context.env.OFFER_KV.put(KAGI, okuraretaMono);

  return new Response(JSON.stringify({ kekka: "ok" }), {
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}
