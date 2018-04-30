<template>
  <v-content>
    <v-container class="grey lighten-3">
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="pt-3 pb-3">
          <div class="display-1 mb-3">ROSES Publications</div>
          <p>
            Below you will find a list of publications associated with ROSES;
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <v-container fluid grid-list-lg>
            <v-layout row wrap>
              <v-flex>
                <v-card>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">
                        ROSES RepOrting standards for Systematic Evidence Syntheses: pro forma, flow-diagram
                        and descriptive summary of the plan and conduct of environmental systematic reviews
                        and systematic maps.
                      </div>
                    </div>
                  </v-card-title>
                  <v-card-text>
                    Neal R Haddaway, Biljana Macura, Paul Whaley, Andrew S Pullin<br>
                    <em>Environmental Evidence 2018, 7:7 doi: 10.1186/s13750-018-0121-7</em>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      flat
                      color="primary"
                      href="https://environmentalevidencejournal.biomedcentral.com/articles/10.1186/s13750-018-0121-7"
                      target="_blank"
                    >
                      View
                    </v-btn>
                  </v-card-actions>
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
    name: 'Publications',
    data  () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
</style>
