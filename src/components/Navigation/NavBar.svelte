<script lang="ts">
    import {ANCHOR_AUDIO, ANCHOR_EVENTS, ANCHOR_VIDEOS, DOWNLOAD_ROUTE} from '$lib/constants';
</script>

<ul id="navigation">
    <li><a href={`/#${ANCHOR_EVENTS}`}>EVENTS</a></li>
    <li><a href={`/#${ANCHOR_VIDEOS}`}>YOUTUBE</a></li>
    <li><a href={`/#${ANCHOR_AUDIO}`}>SOUNDCLOUD</a></li>
    <li><a href={DOWNLOAD_ROUTE}>DOWNLOADS</a></li>
</ul>

<style>
    ul#navigation {
        flex-grow: 1;
        line-height: var(--floating-clamp);
        margin:  0 auto;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        list-style-type: none;
    }

    ul#navigation > li {
        float: left;
        margin-right: 13px;
    }


    ul#navigation > li a {
        display: block;
        color: inherit;
        font-size: var(--floating-clamp);
        padding: 0;
        margin: 0;
        text-decoration: none;
    }

    ul#navigation > li a:hover {
        color: red
    }

    @media only screen and (min-width: 480px) {
        ul#navigation {
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: wrap;
        }
    }

    @media only screen and (min-width: 1024px) {
        ul#navigation {
            justify-content: flex-end;
        }
        ul#navigation > li {
            margin-right: unset;
        }
        ul#navigation > li:not(:first-child) {
            margin-left: 13px;
        }
    }
</style>
