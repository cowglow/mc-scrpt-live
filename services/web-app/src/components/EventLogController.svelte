<script lang="ts">
  export let stepForward: () => void;
  export let stepBackward: () => void;
  export let stepBackwardDisabled: boolean = true;
  export let stepForwardDisabled: boolean = true;
</script>

<div class="wrapper">
  <button on:click={stepBackward} disabled={stepBackwardDisabled}>
    <img src="/images/expand-less.svg" alt="Previous page" />
  </button>
  <button on:click={stepForward} disabled={stepForwardDisabled}>
    <img src="images/expand-more.svg" alt="Next page" />
  </button>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
  }
  button {
    cursor: pointer;
    background: red;
    border: thin solid white;
    width: 30%;
    line-height: 0;
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
