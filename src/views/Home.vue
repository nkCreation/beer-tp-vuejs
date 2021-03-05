<template>
  <div class="container is-fluid">
    <BeerList :beers="beers" />
  </div>
</template>

<script lang="ts">
import BeerList from '@/components/BeerList.vue';
import { onMounted, computed, defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
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
});
</script>
