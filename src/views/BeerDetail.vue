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
import { reactive, onMounted, toRefs } from 'vue';

export default {
  components: { BeerItem },
  name: 'BeerDetail',
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  setup(props) {
    const data = reactive({
      beer: null,
    });

    onMounted(async () => {
      const { data: responseData } = await axios.get(
        `https://api.punkapi.com/v2/beers/${props.id}`
      );
      data.beer = responseData[0];
    });

    return { ...toRefs(data) };
  },
};
</script>
