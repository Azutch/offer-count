// 倉庫に入れるときの「棚の名前」
const KAGI = "kai-list";

// 倉庫が空っぽのときに使う、最初のデータ
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


// ------------------------------
// 「データちょうだい」と言われたとき
// ------------------------------
export async function onRequestGet(context) {
  // 倉庫から取り出す
  const hairetteta = await context.env.OFFER_KV.get(KAGI);

  let data;
  if (hairetteta === null) {
    // 倉庫が空っぽだったら、最初のデータを使う
    data = SAISHO_NO_DATA;
  } else {
    // 入っていたら、それを使う
    data = JSON.parse(hairetteta);
  }

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}


// ------------------------------
// 「これ保存して」と言われたとき
// ------------------------------
export async function onRequestPost(context) {
  // 送られてきた中身を受け取る
  const okuraretaMono = await context.request.text();

  // 倉庫に入れる
  await context.env.OFFER_KV.put(KAGI, okuraretaMono);

  return new Response(JSON.stringify({ kekka: "ok" }), {
    headers: { "Content-Type": "application/json" }
  });
}
