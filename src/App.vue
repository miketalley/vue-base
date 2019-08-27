<template>
  <v-app id="inspire">
    <drawer />

    <toolbar />

    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Drawer from '@/components/nav/Drawer.vue';
import Toolbar from '@/components/Toolbar.vue';

export default {
  components: {
    Drawer,
    Toolbar
  },
  data() {
    return {
      drawer: null
    };
  },
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
