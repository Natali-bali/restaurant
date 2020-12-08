<template>
          <header-app></header-app>
          <about-app></about-app>
          <team-app></team-app>
          <booking-app></booking-app>
          <contact-app></contact-app>

</template>

<script>
  import headerApp from './views/Header';
  import aboutApp from './views/About';
  import teamApp from './views/Team';
  import bookingApp from './views/Booking';
  import contactApp from './views/Contact';

  export default {
      components: {
          headerApp,
          aboutApp,
          teamApp,
          bookingApp,
          contactApp
      }
  }
</script>
<style>
/* FONT
================================================== */
@font-face {
  font-family: 'Banny';
  src: url('./assets/fonts/Banny-BoldRound.ttf');
  font-weight: normal;
  font-style: normal;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
    margin: 0;
    padding: 0;
    font-family: Open Sans, sans-serif;
    font-style: normal;
}
body {
  margin: 0;
  padding: 0;
}
h1, h2, h3, h6 {
    margin: 0;
    padding: 0;
}

</style>
