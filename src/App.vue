<template>
          <header-app></header-app>
          <about-app></about-app>
          <team-app></team-app>
          <booking-app></booking-app>
          <menu-app></menu-app>
          <galerie-app></galerie-app>
          <contact-app></contact-app>
</template>

<script>
  import headerApp from './views/Header';
  import aboutApp from './views/About';
  import teamApp from './views/Team';
  import bookingApp from './views/Booking';
  import galerieApp from './views/Galerie';
  import contactApp from './views/Contact';
  import menuApp from './views/Menu';

  export default {
      components: {
          headerApp,
          aboutApp,
          teamApp,
          bookingApp,
          contactApp,
          galerieApp,
          menuApp
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
