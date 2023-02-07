<script lang="ts">
    import EventLogList from '$components/EventLogList.svelte';
    import EventLogController from '$components/EventLogController.svelte';
    import NextEventBanner from '$components/NextEventBanner.svelte';
    import {getPreviousDates, getUpcomingDates} from '$lib/date-filters';
    import translations from '$stores/i18n-store';

    $: label = $translations['events.header.title'];
    $: content = $translations['events.header.description'];

    export let disableBanner: boolean;
    export let data;
    export let stepForward;
    export let stepBackward;
    const upcomingEvents = getUpcomingDates(data.shows);
    let previousEvents;
    $: previousEvents = getPreviousDates(data.shows);
</script>

{#if !disableBanner}
    <NextEventBanner data={upcomingEvents}/>
{/if}
<div class="wrapper">
    <h1>{label}</h1>
    <h3>{content}</h3>
    <EventLogList data={previousEvents}/>
    <!--<EventLogController
        {...{
            stepBackwardDisabled: !data.previousPage,
            stepForwardDisabled: !data.nextPage,
            stepForward,
            stepBackward
        }}
    />-->
    <div class="cta">
        <button>
            <img src="images/expand-less.svg" alt="Next page" />
            <img src="images/expand-more.svg" alt="Next page" />
        </button>
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1080px;
        padding: 0 var(--side-padding) var(--bottom-padding);
        margin: 0 auto;
    }

    h1 {
        font-family: Teko, sans-serif;
        font-size: 3.8rem;
        text-align: left;
        left: 0;
        margin: var(--side-padding) 0 0;
        padding: 0;
    }

    h3 {
        font-size: 1.2rem;
        font-style: normal;
        font-weight: normal;
        text-align: left;
    }

    .cta {
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
        padding: 8px;
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

    @media screen and (min-width: 700px) {
        h1 {
            text-align: center;
        }

        h3 {
            font-size: 1.8rem;
            text-align: center;
            padding: 0 13%;
        }

        .cta {
            padding-top: var(--bottom-padding);
        }

        button {
            padding: 18px 0 10px;
        }
    }
</style>
