<template>
  <div class="container is-fluid">
    <BeerList :beers="beers" />
  </div>
</template>

<script>
import BeerList from '@/components/BeerList';
import axios from 'axios';
import { reactive, onMounted, toRefs } from 'vue';

export default {
  name: 'Home',
  components: {
    BeerList,
  },
  setup() {
    const data = reactive({
      beers: [],
    });

    onMounted(async () => {
      const { data: responseData } = await axios.get(
        'https://api.punkapi.com/v2/beers',
        {
          params: {
            per_page: 40,
          },
        }
      );
      data.beers = responseData;
    });

    return { ...toRefs(data) };
  },
};
</script>
