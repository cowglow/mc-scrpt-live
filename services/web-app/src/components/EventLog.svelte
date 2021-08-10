<script lang="ts">
  export let data: string;
</script>

<h1>display events</h1>
<span>{JSON.stringify(data, null, 2)}</span>
