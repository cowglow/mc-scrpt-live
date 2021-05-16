<script lang="ts">
  export let active: boolean = false;
</script>

<div>
  {#if !active}
    <h1>no next show</h1>
  {/if}
  {#if active}
    <h1>event details</h1>
  {/if}
</div>

<style>
  div {
    border: thin solid red;
    text-align: center;
  }
</style>
