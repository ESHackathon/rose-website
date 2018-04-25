<template>
  <v-toolbar color="primary">
    <v-toolbar-items>
      <v-btn flat :to="{name: 'home'}">Home</v-btn>
      <v-btn flat :to="{name: 'about'}">About</v-btn>
      <v-btn flat :to="{name: 'forms'}">Forms</v-btn>
      <v-btn flat :to="{name: 'publications'}">Publications</v-btn>
      <v-btn flat :to="{name: 'editorsAndJournals'}">Editors & Journals</v-btn>
      <v-btn flat>Contact Us</v-btn>
      <v-spacer></v-spacer>
      <v-menu>
        <v-btn flat icon slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>Useful Links</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Updates & Extensions</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Examples of Use</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'AppNav',
    data  () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
</style>
