<div id="media-player">
  <div id="youtube-video">
    <iframe
      width="100%"
      height="560"
      src="https://www.youtube-nocookie.com/embed/videoseries?list=PLvGoDsjMiifcRAccwKmrX4LNl4H6XV8jo"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </div>
</div>

<style>
  #media-player {
    background-color: black;
  }
  #youtube-video {
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
  }

  #youtube-video::after {
    padding-top: 56.25%;
    display: block;
    content: "";
  }

  #youtube-video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
