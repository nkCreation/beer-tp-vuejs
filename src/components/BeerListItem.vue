<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <router-link :to="beerLink" class="link">
          <img :src="beer.image_url" :alt="beer.name" loading="lazy" />
        </router-link>
      </figure>
    </div>

    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">
            <router-link :to="beerLink" class="link">{{
              beer.name
            }}</router-link>
          </p>
          <p class="subtitle is-6">{{ beer.tagline }}</p>
        </div>
      </div>

      <div class="content">
        {{ beerDescription }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'BeerListItem',
  props: {
    beer: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const beerLink = computed(() => ({
      name: 'beer-detail',
      params: { id: props.beer.id },
    }));

    const beerDescription = computed(
      () =>
        props.beer.description.slice(0, 200) +
        (200 < props.beer.description.length ? '...' : '')
    );

    return { beerLink, beerDescription };
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: contain;
  padding: 1em;
}
</style>
