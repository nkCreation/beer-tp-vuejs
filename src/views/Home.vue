<template>
  <div class="container is-fluid">
    <BeerList :beers="beers" />
  </div>
</template>

<script>
import BeerList from '@/components/BeerList';
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Home',
  components: {
    BeerList,
  },
  setup() {
    const store = useStore();

    const beers = computed(() => store.state.beers);

    onMounted(() => {
      store.dispatch('fetchBeers');
    });

    return { beers };
  },
};
</script>
