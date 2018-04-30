<template>
  <v-content>
    <v-container>
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="pt-3">
          <div class="display-1 mb-3">Examples Of Use</div>
          <p>
            ROSES is still in its infancy, but below you will find case studies outlining how ROSES has been used
            to improve the standard of reporting in systematic review and map projects.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <v-container fluid grid-list-lg>
            <v-layout row wrap fill-height>
              <v-flex md6>
                <v-card height="100%">
                  <v-card-media src="/static/images/example-01.jpg" height="200px"></v-card-media>
                  <v-card-title primary-title>
                    <div class="headline">Mistra EviEM</div>
                  </v-card-title>
                  <v-card-text>
                    A systematic map of the impacts of vegetative strips on farmland social-ecological systems.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex md6>
                <v-card height="100%">
                  <v-card-media src="/static/images/example-02.jpg" height="200px"></v-card-media>
                  <v-card-title primary-title>
                    <div class="headline">Mistra EviEM</div>
                  </v-card-title>
                  <v-card-text>
                    A systematic review of the impacts of anthropogenic impacts on fish recruitment in coastal
                    areas.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'ExamplesOfUse',
    data  () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
</style>
