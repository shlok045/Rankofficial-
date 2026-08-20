export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/test") {
      return Response.json({
        status: "ok",
        message: "RankOfficial backend is working!"
      });
    }

    return env.ASSETS.fetch(request);
  }
};
