<template>
  <div id="app">
    <b-navbar toggleable="md" style="background-color:#c66900;">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/tubiao.jpeg" class="img-circle" style="padding: 5px" height="50" width="50">
      <b-navbar-brand to="/" style="color:white;">flower store Web App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px;color:white;">Home</i></b-nav-item>
          <b-nav-item to="/flowers"><i class="fa fa-list" style="padding: 5px;color:white;"> Manage Flowers</i></b-nav-item>
          <b-nav-item data-test="flowerbtn" to="/addflowers"><i class="fa fa-star" style="padding: 5px;color:white;"> Add Flower</i></b-nav-item>
          <b-nav-item to="/map"><i class="fa fa-globe" style="padding: 5px;color:white;"> Map</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about"><i class="fa fa-info" style="padding: 5px;color:white;"> About Us</i></b-nav-item>
          <b-nav-item to="/contact"><i class="fa fa-comment" style="padding: 5px;color:white;"> Contact Us</i></b-nav-item>
          <b-nav-item to="/login"><i class="fa fa-sign-in" style="padding: 5px;color:white;"> Login </i></b-nav-item>
          <b-nav-item to="/logout"><i class="fa fa-sign-out" style="padding: 5px;color:white;"> Logout </i></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'

}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  padding-top: 20px;
  background: #fffde7;
  height:100%;
}
.VueTables__sortable {
  cursor: pointer;
}
</style>
