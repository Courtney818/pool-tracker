<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center">
        <v-icon
          alt="Billiard Tracker Logo"
          class="shrink mr-3"
          contain
          transition="scale-transition"
          width="40"
        >
          mdi-billiards
        </v-icon>

        <div
          alt="Adam's Billiard Tracker"
          class="shrink font-weight-bold hidden-sm-and-down"
          contain
          min-width="100"
          width="100"
        >
          Billiard Tracker
        </div>
      </div>

      <v-spacer></v-spacer>

      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <HomePage />
    </v-main>
  </v-app>
</template>

<script>
import HomePage from '@/pages/HomePage.vue';

export default {
  name: 'App',

  components: {
    HomePage,
  },

  data: () => ({
    items: [{ title: 'Dashboard' }],
  }),
};
</script>

<style>
#nprogress .bar {
  height: 4px !important;
}
</style>
