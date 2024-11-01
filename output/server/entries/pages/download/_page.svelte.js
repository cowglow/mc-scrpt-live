import { R as head, G as attr } from "../../../chunks/index.js";
function _page($$payload) {
  const DRY_MIX_2022 = "DRY%20MC%20SCRPT%20-%20Vocal%20Sample%20Pack%20-%202022";
  const DRY_MIX_2023 = "DRY%20MC%20SCRPT%20-%20Vocal%20Sample%20Pack%20-%202023";
  const WASILLI_MIX = "ILL.I.SAW%20WET%20MIX%20-%20Vocal%20Sample%20Pack%20-%202022";
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>MC.SCRPT.LIVE | Downloads</title>`;
  });
  $$payload.out += `<div id="download" class="wrapper svelte-187lv1p"><h1>Sound Packs</h1> <p>If you plan on using or have used these audio tacks, please read the following. First off, I
		really appreciate anyone who downloads these audio track and shares it with their producer
		friends! With that being said, credit would be much appreciated. It would mean the world to me!</p> <ul><li class="svelte-187lv1p">2023 - Recorded by <a class="text-link" href="https://www.instagram.com/salve_shamlic/" rel="noreferrer nofollow">Salve Shamlic</a> <ul><li class="svelte-187lv1p"><a class="text-link"${attr("href", `/downloads/${DRY_MIX_2023}.zip`)}>Dry Mix</a></li></ul></li> <li class="svelte-187lv1p">2022 - Recorded by <a class="text-link" href="https://www.instagram.com/ill.i.saw/" rel="noreferrer nofollow">ill.i.saw</a> <ul><li class="svelte-187lv1p"><a class="text-link"${attr("href", `/downloads/${DRY_MIX_2022}.zip`)}>Dry Mix</a></li> <li class="svelte-187lv1p"><a class="text-link"${attr("href", `/downloads/${WASILLI_MIX}.zip`)}>Wet Mix</a></li></ul></li></ul></div>`;
}
export {
  _page as default
};
