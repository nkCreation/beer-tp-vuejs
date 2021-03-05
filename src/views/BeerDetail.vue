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

<script>
import axios from 'axios';
import BeerItem from '@/components/BeerItem.vue';

export default {
  components: { BeerItem },
  name: 'BeerDetail',
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  data: () => ({
    beer: null,
  }),
  async mounted() {
    const { data } = await axios.get(
      `https://api.punkapi.com/v2/beers/${this.id}`
    );
    this.beer = data[0];
  },
};
</script>
