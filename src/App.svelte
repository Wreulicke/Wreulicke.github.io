<script>
  import { useMedia } from "./useMedia";
  import ListItem from "./ListItem.svelte";
  let show = useMedia("(min-width: 640px)");
  import Todos from "./Todos.svelte"
</script>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
    width: 100%;
    height: 100%;
    background-color:#91CFFF
	}
	:global(ul) {
		padding: 0;
    margin: 0;
	}

	.main {
		padding-left: 2em;
    /* background-color:#C99F5F; */
	}

  .header {
    position: absolute;
    height: 3em;
    width: 100%;
    background-color: #080b0e;
    color: #DDD;
    display: flex;
  }

	.container {
    width: 100%;
    height: 100%;
	}

  .contents {
    padding-top: 3em;
		display: flex;
    height: calc(100% - 3em);
    background-color:white;
  }

  .drawer {
    height: 100%;
    background-color:#91CFFF;
    transition-duration: 0.5s
  }

  .drawer {
    display: none;
  }
  .drawer.show {
    display: block;
  }

	@media (min-width: 320px) {
		.main {
			flex: 1 1 auto;
		}

		.drawer {
			flex: 0 0 320px;
		}
	}

</style>

<div class="container">
  <div class="header">
    <div>
      めっちゃいい感じのヘッダー
    </div>
  </div>
  <div class="contents">
    <div class="drawer" class:show={$show}>
      <ul>
        <ListItem>Profile</ListItem>
        <ListItem>Social</ListItem>
        <ListItem>Materials</ListItem>
      </ul>
    </div>
    <div class="main">
      <Todos></Todos>
    </div>
  </div>
</div>

