<template>
  <v-container><PoolTracker /></v-container>
</template>

<script setup>
import PoolTracker from '@/components/PoolTracker.vue';

export default {
  name: 'HomePage',

  components: {
    PoolTracker,
  },

  data: () => ({}),
};
</script>

<style lang="scss" scoped>
</style>
