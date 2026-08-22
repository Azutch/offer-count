const KAGI = "kai-list";

const SAISHO_NO_DATA = [
  {
    eventMei: "バンドイベント",
    hizuke: "2026-09-12",
    hitsuyouNinzuu: 5,
    shutsuensha: ["山田", "佐藤"]
  },
  {
    eventMei: "DJイベント",
    hizuke: "2026-10-03",
    hitsuyouNinzuu: 4,
    shutsuensha: ["田中", "鈴木", "高橋", "伊藤"]
  }
];

export async function onRequestGet(context) {
  const hairetteta = await context.env.OFFER_KV.get(KAGI);

  let data;
  if (hairetteta === null) {
    data = SAISHO_NO_DATA;
  } else {
    data = JSON.parse(hairetteta);
  }

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}

export async function onRequestPost(context) {
  const okuraretaMono = await context.request.text();
  await context.env.OFFER_KV.put(KAGI, okuraretaMono);

  return new Response(JSON.stringify({ kekka: "ok" }), {
    headers: { "Content-Type": "application/json" }
  });
}
