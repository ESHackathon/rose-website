<template>
  <v-content>
    <v-container>
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="pt-3">
          <div class="display-1 mb-3">ROSES Forms</div>
          <p>
            Below you will find ROSES forms for systematic reviews and maps for protocols and final
            reports. You will also find the ROSES template for a flow diagram showing how a systematic
            review or map has been conducted.
          </p>
          <p>
            Systematic maps aim to summarise and describe the existing evidence on a topic, whilst systematic
            reviews aim to pool together findings of individual studies to examine an overall affect.
          </p>
          <p>
            Protocols aim to set out the planned methods for a systematic review or map, and are written before
            a review begins. This allows reviewers to receive feedback on their methods (e.g. via the CEE
            journal Environmental Evidence).
          </p>
          <p>
            All of the files below have DOIs (digital object identifiers) to make it easy to find and cite
            them. See each file for details.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <v-card>
            <v-list>
              <v-list-tile ripple :to="{ name: 'systematicReviewProtocol' }">
                <v-list-tile-action>
                  <v-icon>assignment</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>ROSES for Systematic Review Protocols</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile ripple :to="{ name: 'systematicMapProtocol' }">
                <v-list-tile-action>
                  <v-icon>assignment</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>ROSES for Systematic Map Protocols</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'Forms',
    data  () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
</style>
