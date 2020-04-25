<template>
  <v-app>
    <v-app-bar
      app
      dark
      dense
      flat
    >
      <v-toolbar-title>Laravel Migration Helper</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container>
    <v-content>
        <home />
    </v-content>
    </v-container>
  </v-app>
</template>

<script>
import Home from "./components/Home"
export default {
  name: 'App',

  components: { Home },

  data: () => ({
    //
  }),
};
</script>
