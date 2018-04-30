<template>
  <v-content>
    <v-container class="grey lighten-3">
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="pt-3">
          <div class="display-1 mb-3">Useful Links</div>
          <p>
            Below are links to useful guidelines, articles and organisations related to evidence synthesis
            and reporting standards.
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
                <v-card color="grey lighten-3" height="100%">
                  <v-card-title primary-title>
                    <div class="headline">The Collaboration for Environmental Evidence (CEE)</div>
                  </v-card-title>
                  <v-card-text>
                    CEE is an open community of stakeholders working towards a sustainable global environment
                    and the conservation of biodiversity. CEE seeks to promote and deliver evidence syntheses
                    on issues of greatest concern to environmental policy and practice as a public service.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      flat
                      color="primary"
                      href="http://www.environmentalevidence.org/"
                      target="_blank"
                    >
                      View
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex md6>
                <v-card color="grey lighten-2" height="100%">
                  <v-card-title primary-title>
                    <div class="headline">Environment International</div>
                  </v-card-title>
                  <v-card-text>
                    TEnvironment International is an international, multidisciplinary Journal with a specific
                    focus on the impacts of human activities and environment on human health. It serves as a
                    platform for academics, practitioners, regulators, and policy makers to share and discuss
                    insights into how our human activities and the environment shapes and impacts human health
                    now and in the future. In doing so, it also brings forward opportunities to minimize health
                    risk and maximize resilience.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      flat
                      color="primary"
                      href="https://www.journals.elsevier.com/environment-international/"
                      target="_blank"
                    >
                      View
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex md6>
                <v-card color="grey lighten-1" height="100%">
                  <v-card-title primary-title>
                    <div class="headline">CEE Guidelines for Systematic Review and Evidence Synthesis in Environmental Management</div>
                  </v-card-title>
                  <v-card-text>
                    Produced by the Collaboration for Environmental Evidence, these guidelines outline the
                    steps and considerations necessary to conduct a reliable systematic review.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      flat
                      color="primary"
                      href="http://www.environmentalevidence.org/guidelines/table-of-contents"
                      target="_blank"
                    >
                      View
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex md6>
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div class="headline">Cochrane</div>
                  </v-card-title>
                  <v-card-text>
                    Cochrane is a global independent network of researchers, professionals, patients, carers and
                    people interested in health.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      flat
                      color="primary"
                      href="http://www.cochranelibrary.com/"
                      target="_blank"
                    >
                      View
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex md6>
                <v-card color="grey lighten-3" height="100%">
                  <v-card-title primary-title>
                    <div class="headline">The Campbell Collaboration</div>
                  </v-card-title>
                  <v-card-text>
                    The Campbell Collaboration promotes positive social and economic change through the production
                    and use of systematic reviews and other evidence synthesis for evidence-based policy and
                    practice.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      flat
                      color="primary"
                      href="http://www.campbellcollaboration.org/"
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
    name: 'UsefulLinks',
    data  () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
</style>
