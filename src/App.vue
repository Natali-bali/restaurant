<template>
          <header-app></header-app>
          <about-app></about-app>
          <team-app></team-app>
          <booking-app></booking-app>
          <br>
          <h1>FORM</h1>
          <form-app></form-app>
</template>

<script>
  import headerApp from './views/Header';
  import aboutApp from './views/About';
  import teamApp from './views/Team';
  import bookingApp from './views/Booking';
  import formApp from './components/Form';
  export default {
      components: {
          headerApp,
          aboutApp,
          teamApp,
          bookingApp,
          formApp
      }
  }
</script>
<style>
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
