<script lang="ts">
  let active: boolean = false;
</script>

<div id="next-event-banner">
  {#if !active}
    <h1>no next show</h1>
  {/if}
  {#if active}
    <h1>event details</h1>
  {/if}
</div>

<style>
  #next-event-banner {
    border: thin solid yellow;
    text-align: center;
    width: 100%;
    max-width: 880px;
    margin: 0 auto;
    background-color: red;
    position: relative;
    top: -40px;
  }
</style>
