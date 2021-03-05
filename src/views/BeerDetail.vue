<template>
  <div v-if="beer" class="container">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li class="is-active">
          <a>
            {{ beer.name }}
          </a>
        </li>
      </ul>
    </nav>

    <BeerItem :beer="beer" />
  </div>
</template>

<script lang="ts">
import BeerItem from '@/components/BeerItem.vue';
import { computed, defineComponent, onMounted } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  components: { BeerItem },
  name: 'BeerDetail',
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const beer = computed(() => store.getters.getABeer(props.id));

    onMounted(() => {
      if (!beer.value) {
        store.dispatch('fetchBeers');
      }
    });

    return { beer };
  },
});
</script>
