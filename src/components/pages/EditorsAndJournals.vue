<template>
  <v-content>
    <v-container class="grey lighten-3">
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="pt-3">
          <div class="display-1 mb-3">Making your journal's reviews more reliable using ROSES</div>
          <p>
            ROSES forms can be integrated into the workflow of any journal, ensuring that published
            reviews report their activities to a high standard. This can substantially increase the
            validity and impact of your journal.
          </p>
          <p>
            See the information below to find out more about using ROSES in editorial and peer-review
            processes.
          </p>
          <p>
            <router-link :to="{ name: 'contactUs' }">Contact us</router-link> if you would like to
            know more about digitally integrating ROSES into your journal's workflow.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <v-card>
            <v-list>
              <v-list-tile ripple :to="{ name: 'whyJournals' }">
                <v-list-tile-content>
                  <v-list-tile-title>Why choose ROSES?</v-list-tile-title>
                  <v-list-tile-sub-title>
                    An infographic outlining how ROSES can help to improve the impact of your journal.
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile ripple :to="{ name: 'saveResources' }">
                <v-list-tile-content>
                  <v-list-tile-title>How can ROSES save you resources?</v-list-tile-title>
                  <v-list-tile-sub-title>
                    Find out how ROSES can improve your journal's efficiency during peer-review.
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile ripple>
                <v-list-tile-content>
                  <v-list-tile-title>Journals already using ROSES</v-list-tile-title>
                  <v-list-tile-sub-title>
                    Read about journals already integrating ROSES into their workflow.
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
