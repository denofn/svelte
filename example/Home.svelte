<script>
  function link(node) {
    function onClick(event) {
      event.preventDefault();
      history.pushState(null, null, event.target.href);
    }

    node.addEventListener('click', onClick);

    return {
      destroy() {
        node.removeEventListener('click', onClick);
      }
    }
  }
  export let environment = "Deno"
  setInterval(() => {
    environment = environment == "Deno" ? "Browser" : "Deno"
  }, 500)
</script>

<a href="#" use:link>Test</a>
<p>Svelte {environment}</p>
