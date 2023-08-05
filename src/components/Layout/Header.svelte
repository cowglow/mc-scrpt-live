<script lang="ts">
    import Branding from '$components/Branding.svelte';
    import NavBar from '$components/Navigation/NavBar.svelte';
</script>

<header>
    <div id="nav-bar-wrapper">
        <div id="nav-bar">
            <Branding/>
            <NavBar/>
        </div>
    </div>
</header>

<style>
    :root {
        --floating-clamp: clamp(1.4rem, 50vw, 2.5rem)
    }

    header {
        width: 100%;
        height: calc(42vh);
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-content: center;
        background-color: black;
        align-items: baseline;
        background-image: url('/images/mc-scrpt-background.png');
    }

    #nav-bar-wrapper {
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        min-height: 90px;
        top: 0;
        left: 0;
        position: sticky;
        padding: 1rem;
    }

    #nav-bar {
        width: 100%;
        height: 100%;
        max-width: 1080px;
        margin: 0 auto;
        color: white;
        padding: 0 var(--side-padding);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font-size: var(--floating-clamp);
        gap: 1rem;
    }

    @media only screen and (min-width: 600px) {
        header {
            height: calc(64vh);
        }
    }

    @media only screen and (min-width: 1024px) {
        header {
            height: calc(81vh);
            background-position: center;
        }
    }
</style>
