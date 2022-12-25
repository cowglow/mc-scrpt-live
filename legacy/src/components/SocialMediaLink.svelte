<script lang="ts">
  export let platform;
</script>

<a class="icon" href={platform.url} rel="noreferrer nofollow" target="mc-scrpt-social-media">
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
