<script lang="ts">
  export let stepForward: () => void;
  export let stepBackward: () => void;
  export let stepBackwardDisabled: boolean = true;
  export let stepForwardDisabled: boolean = true;
</script>

<div class="wrapper">
  <button on:click={stepBackward} {stepBackwardDisabled ? "disabled" : null}>
    <img src="/images/expand-less.svg" alt="Previous page" />
  </button>
  <button on:click={stepForward} {stepForwardDisabled ? "disabled" : null}>
    <img src="images/expand-more.svg" alt="Next page" />
  </button>
</div>

<style>
  .wrapper {
    border: thin solid greenyellow;
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
  }
  button {
    cursor: pointer;
    background: red;
    border: thin solid white;
  }
  button:active {
    opacity: unset;
    border: thick solid white;
  }
  button[disabled] {
    cursor: unset;
    opacity: 0.56;
  }
  @media (hover: none) {
    button {
      opacity: unset;
    }
  }
</style>
