<!-- <head>
    <link rel = "stylesheet" href = "/src/style.css">
</head> -->
<slot>    
</slot>
<div id = "bottom">
    <div id = "leftFoot" style="margin-left: 25px; margin-top: 1px;">
        <h3 style="font-size:20px;font-weight:normal">Made By O. Chowdhury</h3>
        <p style="font-size: 11px;"><a href="https://kit.svelte.dev">svelte</a></p>
    </div>
    <div id = "rightFoot">
        <img id = "cat" alt="cat">
    </div>
</div>
<script>
    /** @type {import('./$types').LayoutData} */
    export let data;
    import '/src/style.css';
</script>