export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/test") {
      return Response.json({
        status: "ok",
        bindings: Object.keys(env)
      });
    }

    if (url.pathname === "/api/anime/search") {
      const query = url.searchParams.get("q");

      if (!query) {
        return Response.json(
          { error: "Missing search query. Use ?q=frieren" },
          { status: 400 }
        );
      }

      const malUrl = new URL("https://api.myanimelist.net/v2/anime");
      malUrl.searchParams.set("q", query);
      malUrl.searchParams.set("limit", "10");
      malUrl.searchParams.set(
        "fields",
        "id,title,main_picture,mean,rank,popularity,genres"
      );

      const response = await fetch(malUrl, {
        headers: {
          "X-MAL-CLIENT-ID": env.MAL_CLIENT_ID
        }
      });

      const data = await response.json();

      return Response.json(data, {
        status: response.status
      });
    }

        if (url.pathname === "/api/auth/mal/callback") {
          const code = url.searchParams.get("code");
          const state = url.searchParams.get("state");

          return Response.json({
            received: true,
            hasCode: !!code,
            state: state || null
          });
        }

        return env.ASSETS.fetch(request);
      }
    };
