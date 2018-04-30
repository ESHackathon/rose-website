<template>
  <v-app id="roses">
    <app-nav-drawer :open="navOpen"></app-nav-drawer>
    <app-toolbar :open="navOpen" @nav-toggled="navToggled"></app-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
  import AppNavDrawer from '../components/AppNavDrawer'
  import AppToolbar from '../components/AppToolbar'

  export default {
    name: 'app-layout',
    components: {
      AppToolbar,
      AppNavDrawer
    },
    data () {
      return {
        navOpen: true
      }
    },
    methods: {
      navToggled () {
        this.navOpen = !this.navOpen
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
