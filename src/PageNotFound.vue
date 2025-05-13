<template>
  <div id="not-found-container">
    <h1>404</h1>
    
    <h3>Return to <router-link to="/">home</router-link>.</h3>
  </div>
</template>

<style lang="scss">
  div#not-found-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;

    h1 {
      font-weight: bold;
      font-size: 8vmin;
    }
  }
</style>