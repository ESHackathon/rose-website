<template>
  <v-content>
    <v-container>
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="pt-3 pb-3">
          <div class="display-1 mb-3">Contact Us</div>
          <p>
            Find out more about the team behind ROSES and contact us via the form below to learn more about the
            ROSES initiative and how to get involved or to leave us a feedback.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="grey lighten-3">
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <v-container fluid grid-list-lg>
            <v-layout row wrap>
              <v-flex md6>
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Neal R Haddaway</div>
                      <div>Research Fellow</div>
                      <div><em>Stockholm Environment Institute</em></div>
                    </div>
                  </v-card-title>
                  <v-card-text>
                    I am a Research Fellow conducting systematic reviews and systematic maps at SEI in
                    Stockholm, and I work with policy-makers and stakeholders to produce guidelines for
                    evidence-based environmental management and conservation. My main research interests
                    revolve around integrating different knowledge systems within the same synthesis, and
                    around increasing the efficiency and transparency of evidence production, synthesis and
                    use.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      flat
                      color="primary"
                      href="https://www.researchgate.net/profile/Neal_Haddaway"
                      target="_blank"
                    >
                      Personal Website
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex md6>
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Biljana Macura</div>
                      <div>Research Fellow</div>
                      <div><em>Stockholm Environment Institute</em></div>
                    </div>
                  </v-card-title>
                  <v-card-text>
                    I am a Research Fellow at Stockholm Environment Institute. I am currently working with
                    the MISTRA EviEM project (www.eviem.se) on evidence synthesis in the field of environmental
                    management where we conduct systematic reviews, work on improvement of systematic review
                    methods and provide training. I am Editorial Manager of
                    <a href="https://environmentalevidencejournal.biomedcentral.com" target="_blank">Environmental Evidence Journal</a>.
                    My research interest also include political ecology of conservation and development.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      flat
                      color="primary"
                      href="https://www.researchgate.net/profile/Biljana_Macura"
                      target="_blank"
                    >
                      Personal Website
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex md6>
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Paul Whaley</div>
                      <div>Systematic Reviews Editor</div>
                      <div><em>Environment International</em></div>
                    </div>
                  </v-card-title>
                  <v-card-text>
                    My interest is in the development and promotion of systematic review methods in toxicology
                    and chemical risk research, as an approach to advancing the transparency and validity of the
                    processes by which scientific evidence is integrated into environmental policy-making.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      flat
                      color="primary"
                      href="https://www.researchgate.net/profile/Paul_Whaley3"
                      target="_blank"
                    >
                      Personal Website
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex md6>
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Andrew S Pullin</div>
                      <div>Professor in Evidence-Based Conservation</div>
                      <div><em>Bangor University</em></div>
                      <div>Editor-in-chief</div>
                      <div><em>Environmental Evidence</em></div>
                    </div>
                  </v-card-title>
                  <v-card-text>
                    I am interested in developing the methodology of evidence synthesis in environmental management
                    using systematic review and creating a global network and platform (with guidelines and standards)
                    to facilitate the conduct of evidence synthesis to provide a global evidence service. The overall
                    goal is to increase effectiveness of environmental management policies and practice.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      flat
                      color="primary"
                      href="https://www.researchgate.net/profile/Andrew_Pullin"
                      target="_blank"
                    >
                      Personal Website
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="grey lighten-2">
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="pt-3 pb-3">
          <p>
            Get in touch to learn more about the ROSES initiative, to find out how to get involved, or to leave us a
            feedback.
          </p>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="pt-3 pb-3">
          <v-form ref="form" v-model="valid">
            <v-text-field
              label="Name"
              v-model="name"
              :rules="nameRules"
              required
            ></v-text-field>
            <v-text-field
              label="E-mail"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-text-field
              label="Subject"
              v-model="subject"
              :rules="subjectRules"
              required
            ></v-text-field>
            <v-text-field
              label="Message"
              v-model="message"
              :rules="messageRules"
              multi-line
              required
            ></v-text-field>
            <v-btn color="primary" @click="sendMessage">Send</v-btn>
            <v-btn flat @click="clear">Clear</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'ContactUs',
    data  () {
      return {
        valid: false,
        name: '',
        nameRules: [
          v => !!v || 'Name is required'
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        subject: '',
        subjectRules: [
          v => !!v || 'Name is required'
        ],
        message: '',
        messageRules: [
          v => !!v || 'Name is required'
        ]
      }
    },
    methods: {
      clear () {
        this.$refs.form.reset()
      },
      sendMessage () {
        this.clear()
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
