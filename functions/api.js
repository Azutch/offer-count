const KAGI = "kai-list";

export async function onRequestGet(context) {
  const hairetteta = await context.env.OFFER_KV.get(KAGI);

  let data;
  if (hairetteta === null) {
    data = [];
  } else {
    data = JSON.parse(hairetteta);
  }

  return new Response(JSON.stringify(data), {
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
