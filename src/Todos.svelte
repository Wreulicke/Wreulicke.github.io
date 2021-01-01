<script>
  let todos = ["foo", "bar", "baz"];
</script>

<style>
  ul {
    list-style: none;
  }
</style>

<div>
  <h2>Todos</h2>
  <ul>
    {#each todos as todo}
      <li>{todo}</li>
    {/each}
  </ul>
</div>
