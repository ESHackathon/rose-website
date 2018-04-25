<template>
  <div class="app">
    <v-app>
      <v-content>
        <section>
          <v-parallax src="/static/images/roses-photo-01.jpg">
            <v-container>
              <v-layout row wrap>
                <v-flex xs12 class="logo">
                  <img src="/static/images/roses-logo-white.png" alt="ROSES" height="120">
                </v-flex>
                <v-flex xs12>
                  <app-nav></app-nav>
                </v-flex>
              </v-layout>
            </v-container>
          </v-parallax>
        </section>
      </v-content>
      <router-view></router-view>
      <v-content>
        <v-footer class="pa-3">
          <v-layout column align-center>
            <v-flex xs12 md4>
              <span>&copy; 2018 ROSES</span>
              <v-spacer></v-spacer>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import AppNav from '../components/AppNav'

  export default {
    name: 'app-layout',
    components: {
      AppNav
    },
    data () {
      return { }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .logo {
    height: 436px;
    position: relative;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
