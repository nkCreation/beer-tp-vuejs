<template>
  <div class="container is-fluid">
    <BeerList :beers="beers" />
  </div>
</template>

<script>
import BeerList from '@/components/BeerList';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    BeerList,
  },
  data: () => ({
    beers: [],
  }),
  mounted() {
    this.fetchBeers();
  },
  methods: {
    async fetchBeers() {
      const { data } = await axios.get('https://api.punkapi.com/v2/beers', {
        params: {
          per_page: 40,
        },
      });
      this.beers = data;
    },
  },
};
</script>
