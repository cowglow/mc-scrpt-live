<script lang="ts">
  const baseUrl = "https://w.soundcloud.com/player/";

  type QueryObject = {
    url: string;
    color: string;
    auto_play: boolean;
    hide_related: boolean;
    show_comments: boolean;
    show_user: boolean;
    show_reposts: boolean;
    show_teaser: boolean;
  };

  const params: QueryObject = {
    url: "https://api.soundcloud.com/playlists/633696606",
    color: "#ff5500",
    auto_play: false,
    hide_related: false,
    show_comments: true,
    show_user: true,
    show_reposts: false,
    show_teaser: true,
  };

  const query = Object.keys(params)
    .map((param) => {
      return `${encodeURIComponent(param)}=${encodeURIComponent(
        params[param]
      )}`;
    })
    .join("&");
</script>

<iframe
  width="100%"
  height="420"
  allow="autoplay"
  src={`${baseUrl}?${query}`}></iframe>
