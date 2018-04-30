<template>
  <v-navigation-drawer
    fixed
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
    v-model="open"
  >
    <v-list dense>
      <template v-for="(item, i) in navItems">
        <v-layout
          row
          v-if="item.heading"
          align-center
          :key="i"
        >
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
        </v-layout>
        <v-divider
          dark
          v-else-if="item.divider"
          class="my-3"
          :key="i"
        ></v-divider>
        <v-list-tile
          :key="i"
          :to="{ name: item.route }"
          v-else
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { navItems } from './utils'

  export default {
    name: 'AppNavDrawer',
    props: {
      open: {
        Default: true,
        Type: Boolean
      }
    },
    data  () {
      return {
        navItems: navItems
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
</style>
