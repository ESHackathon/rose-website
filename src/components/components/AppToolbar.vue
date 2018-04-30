<template>
  <v-toolbar color="amber" app clipped-left fixed>
    <v-toolbar-side-icon @click="navToggled"></v-toolbar-side-icon>
    <span class="title ml-3 mr-5">ROSES</span>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'AppToolbar',
    props: {
      open: {
        Default: true,
        Type: Boolean
      }
    },
    data  () {
      return { }
    },
    methods: {
      navToggled () {
        this.$emit('nav-toggled')
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
