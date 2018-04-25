<template>
  <div>
    <v-layout row>
      <v-flex sm12 md8 offset-md2>
        <h3 class="display-3">Forms</h3>
        <v-divider class="my-3"></v-divider>
        <p>
          Below you will find ROSES forms for systematic reviews and maps for protocols and
          final reports. You will also find the ROSES template for a flow diagram showing
          how a systematic review or map has been conducted.
        </p>
        ​<p>
          Systematic maps aim to summarise and describe the existing evidence on a topic,
          whilst systematic reviews aim to pool together findings of individual studies to
          examine an overall affect.
        </p>
        ​<p>
          Protocols aim to set out the planned methods for a systematic review or map, and
          are written before a review begins. This allows reviewers to receive feedback on their
          methods (e.g. via the CEE journal Environmental Evidence).
        </p>
        ​<p>
          All of the files below have DOIs (digital object identifiers) to make it easy to
          find and cite them. See each file for details.
        </p>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex sm12 md8 offset-md2>
        <v-btn
          flat
          :to="{name: 'systematicReviewProtocol'}"
        >
          <v-icon>assignment</v-icon> ROSES for Systematic Review protocols
        </v-btn>
        <v-btn
          flat
          :to="{name: 'systematicMapProtocol'}"
        >
          <v-icon>assignment</v-icon> ROSES for Systematic Map Protocols
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
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
