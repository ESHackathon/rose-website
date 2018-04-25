<template>
  <v-layout row>
    <v-flex sm12 md8 offset-md2>
      <h3 class="display-3">Publications</h3>
      <v-divider class="my-3"></v-divider>
      <v-list two-line subheader>
        <v-subheader>Below you will find a list of publications associated with ROSES</v-subheader>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>ROSES RepOrting standards for Systematic Evidence Syntheses</v-list-tile-title>
            <v-list-tile-sub-title>Neal R Haddaway, Biljana Macura, Paul Whaley, Andrew S Pullin</v-list-tile-sub-title>
            <a href="https://environmentalevidencejournal.biomedcentral.com/articles/10.1186/s13750-018-0121-7" target="_blank"> Read Publication </a>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'Publications',
    data  () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
</style>
