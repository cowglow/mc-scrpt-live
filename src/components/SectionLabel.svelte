<script lang="ts">
export let title = "Section Label";
export let description = "Lorem Ipsum";
</script>

<h3>{title}</h3>
<div class="section-label-desc">{description}</div>

<style>
h3 {
  font-family: "Teko Medium", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  line-height: 47px;
  margin: var(--side-padding) auto 0;
  padding: 0;
}

.section-label-desc {
  font-family: "Teko", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 21px;
  color: #666666;
  margin-bottom: calc(var(--side-padding) * 0.5);
}
</style>
