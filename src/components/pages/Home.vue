<template>
  <v-content>
    <section>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex>
            <h1 class="display-1">
              ROSES
            </h1>
            <div class="subheading mb-3">
              <strong>R</strong>ep<strong>O</strong>rting standards for <strong>S</strong>ystematic
              <strong>E</strong>vidence <strong>S</strong>yntheses in environmental research.
            </div>
            <p>
              Without transparent reporting, even well-designed reviews will fail to show their
              methodological strengths, undermining their utility in decision-making contexts
              (<a href="https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/s13643-017-0527-2" target="_blank">Pussegoda et al. 2017</a>)
            </p>
            <p>
              ROSES is a collaborative initiative with the aim of improving the standards of
              reporting in evidence syntheses in the field of environment. At the core of ROSES
              is a set of detailed state-of-the art forms for ensuring evidence syntheses report
              their methods to the highest possible standards. Here you can find information about
              how to use ROSES forms for review protocols and final reports, along with detailed
              guidance on how to use the forms and how they were developed and published.
            </p>
            <p>
              This website and the ROSES initiative is relevant for anyone conducting or reviewing
              a systematic review or systematic map. Although the forms were specifically designed
              for environmental topics, ROSES is broadly applicable across disciplines, including
              reviews that use qualitative or mapping approaches.
            </p>
            <p>
              ROSES forms will help review authors to ensure that all relevant methodological
              information is reported in their review, and will help editors and peer-reviewers
              to critique the reliability and validity of a review.
            </p>
            <p>
              Current version: ROSES 1.0 November 2017
            </p>
            <v-layout column align-center justify-center>
              <v-btn color="primary" :to="{name: 'about'}">Learn more about ROSES</v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section class="mt-3">
      <v-parallax src="/static/images/roses-photo-02.jpg">
        <v-layout column align-center justify-center>
          <div class="display-1 white--text">Why use ROSES? </div>
        </v-layout>
      </v-parallax>
    </section>
    <section>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex>
            <v-card dark color="primary">
              <v-card-title>
                <div>
                  <div class="headline">Easier Writing</div>
                  <span class="text--secondary">
                    ROSES guides you through writing your systematic review or map protocol
                    or report.
                  </span>
                </div>
              </v-card-title>
              <v-card-text>
                ROSES forms can be used during the preparation of systematic review
                and map protocols and final reports. They make it easier to write these
                documents by prompting the user to ensure they have included the right
                information with the correct level of detail.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card dark color="grey">
              <v-card-title>
                <div>
                  <div class="headline">Improved Reporting</div>
                  <span class="text--secondary">
                    ROSES is a pre-submission checklist to ensure your manuscript contains
                    all necessary information.
                  </span>
                </div>
              </v-card-title>
              <v-card-text>
                The ROSES forms are a checklist of details that should be reported in review
                documentation. They ensure that all necessary content required by the
                <a href="http://www.environmentalevidence.org/wp-content/uploads/2017/01/Review-guidelines-version-4.2-final-update.pdf" target="_blank">CEE Guidelines for Systematic Reviews in Environmental Management</a>
                is present and described in detail. ROSES can prevent time- and resource-
                consuming bounces of manuscripts before being sent out for peer-review.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card dark color="primary">
              <v-card-title>
                <div>
                  <div class="headline">Faster, Better Peer-review</div>
                  <span class="text--secondary">
                    ROSES helps peer-reviewers and editors to assess the methods in a
                    systematic review or map.
                  </span>
                </div>
              </v-card-title>
              <v-card-text>
                ROSES forms facilitate rapid identification of key conduct-related review
                information by journal editors, peer-reviewers and readers. This can speed
                up the time needed for a manuscript to be considered by a journal and make
                life easier for peer-reviewers and editors.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card dark color="grey">
              <v-card-title>
                <div>
                  <div class="headline">More Transparent Reviews</div>
                  <span class="text--secondary">
                    ROSES helps to raise standards of systematic reviews and maps by
                    improving transparency.
                  </span>
                </div>
              </v-card-title>
              <v-card-text>
                The ROSES forms can help to drive up the quality of systematic reviews and
                maps by ensuring that review authors need to report methods for major steps
                in the review process. This transparency makes it hard to hide substandard
                methods.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section class="mt-3">
      <v-parallax src="/static/images/roses-photo-03.jpg">
        <v-layout column align-center justify-center>
          <div class="display-1 white--text mb-3">How to use ROSES?</div>
          <div class="headline mb-3 text-xs-center">
            ROSES forms can be used during the preparation of systematic review and map
            protocols and final reports. They are a checklist of details that should be
            reported in review documentation.
          </div>
          <v-btn color="primary" :to="{name: 'forms'}">See The ROSES Forms</v-btn>
        </v-layout>
      </v-parallax>
    </section>
  </v-content>
</template>

<script>
  export default {
    name: 'Home',
    data  () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
</style>
