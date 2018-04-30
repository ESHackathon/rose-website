<template>
  <v-content>
    <v-container class="grey lighten-3">
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="pt-3">
          <div class="display-1 mb-3">How can ROSES save you resources?</div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="grey lighten-2">
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="pt-3">
          <div class="headline mb-3">What is ROSES?</div>
          <p>
            ROSES is a set of reporting standards for literature reviews claiming to be systematic (i.e. more
            reliable than traditional literature reviews). It consists of a checklist and short summary form
            describing the methods used in a review. Review authors use ROSES forms to demonstrate that they
            have described their review methods in sufficient detail. ROSES forms can be submitted as an
            additional file when review documents are submitted for publication, and these forms can facilitate
            editorial decisions about the review. The forms can also help peer-reviewers to assess the reliability
            of the review methods used.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="grey lighten-1">
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="pt-3">
          <div class="headline mb-3">Why is ROSES needed?</div>
          <p>
            Systematic reviews and systematic maps aim to be comprehensive, transparent and objective to provide
            reliable evidence for decision-making. They do this by employing established, tried-and-tested
            methodological frameworks for searching for evidence, screening evidence, critically appraising study
            validity, and synthesising studies (for example using meta-analysis).
          </p>
          <p>
            Systematic reviews are routinely used to summarise evidence in the field of healthcare and medicine,
            and they are becoming increasingly common in environmental subjects. At the same time, many reviews
            laim to be systematic but employ methods that are susceptible to bias, resulting in unreliable findings.
            Many others lack transparency, meaning that it is impossible to know whether to trust their findings.
            In order to know how reliable or well-conducted a review is, editors, peer-reviewers and readers must
            themselves assess the methods used in a review, which can be complex and challenging for those who arn’t
            very familiar with systematic reviews and maps.
          </p>
          <p>
            Although some review reporting standards, like PRISMA, already exist, they cannot be easily applied to
            environmental topics, do not work for qualitative research methods, and they are limited in the level
            of detail they call for.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="grey">
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="pt-3">
          <div class="headline mb-3">How does ROSES work?</div>
          <p>
            ROSES forms help to check that reviews claiming to be systematic truly are systematic, and that reviews
            report their methods in enough detail to be able to assess how reliable they are.
          </p>
          <p>
            Review authors use ROSES forms to demonstrate that they have described their review methods in sufficient
            detail. ROSES forms can be submitted as an additional file when review documents are submitted for
            publication, and these forms can facilitate editorial decisions about the review. The forms can also
            help peer-reviewers to assess the reliability of the review methods used.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="grey lighten-1">
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="pt-3">
          <div class="headline mb-3">How will ROSES affect my journal?</div>
          <p>
            Integrating ROSES into the workflow of a journal would require all authors of systematic reviews to
            complete a ROSES form upon submission of their manuscript.
          </p>
          <p>
            The process would be fairly quick for review authors to do, particularly if they use ROSES whilst
            planning and conducting their review. After submission, editors and peer-reviewers can use the completed
            ROSES form and our handy help file to make their job easier. Hence, ROSES can save resources and
            increase reliability of your journal’s reviews. By integrating ROSES forms into the submission system
            of your journal you can also ensure that submitted reviews are also reporting their methods to a high
            standard before being seen by an editor, further saving resources. To learn more about digital integration
            of ROSES, please <router-link :to="{ name: 'contactUs' }">Contact us</router-link>.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="grey lighten-2">
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="pt-3">
          <div class="headline mb-3">How much will it cost?</div>
          <p>
            ROSES forms are open access and free to use – they will remain free forever.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="grey lighten-3">
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="pt-3">
          <div class="headline mb-3">How was ROSES developed?</div>
          <p>
            ROSES was developed by reviewing existing reporting standards (such as PRISMA) and improving upon them
            to deal with environmental research evidence. ROSES is therefore tailored to systematic reviews and
            systematic maps (evidence syntheses) for environmental topics. The ROSES forms were improved upon
            following detailed assessment by a group of key methodology experts and peer-reviewers for the academic
            journal Environmental Evidence, where ROSES methodology has been recently published.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="grey lighten-4">
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="pt-3">
          <div class="headline mb-3">Who created ROSES and why?</div>
          <p>
            ROSES was created in a <router-link :to="{ name: 'contactUs' }">collaboration</router-link> between
            systematic review and map experts and journal editors working at three key organisations: Stockholm
            Environment Institute, the Collaboration for Environmental Evidence, and the journal Environment
            International. The authors have noticed an increasing number of low reliability reviews claiming to be
            systematic reviews in recent years, and were concerned that decision-makers and other readers could be
            misled by inappropriate use of the terms ‘systematic review’ and ‘systematic map’. The authors hope
            that ROSES will lead to an improvement in the standards of evidence syntheses, particularly in how the
            methods used in a review are reported, increasing transparency and accountability.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'SaveResources',
    data  () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
</style>
