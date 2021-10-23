<script lang="ts">
  export let platform;
</script>

<a
  href={platform.url}
  class="icon"
  rel="noreferrer nofollow"
  target="mc-scrpt-social-media"
>
  <slot />
</a>

<style>
  .icon {
    display: block;
    fill: white;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .icon:hover {
    fill: red;
  }
</style>
