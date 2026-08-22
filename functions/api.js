export async function onRequestGet(context) {
  const namae = Object.keys(context.env);
  return new Response("env: " + JSON.stringify(namae));
}
