import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    beers: [],
  },
  getters: {
    getABeer: (state) => (id) =>
      state.beers.find((beer) => beer.id === parseInt(id)),
  },
  mutations: {
    setBeers(state, beers) {
      state.beers = beers;
    },
  },
  actions: {
    async fetchBeers({ commit }) {
      const { data } = await axios.get('https://api.punkapi.com/v2/beers', {
        params: {
          per_page: 40,
        },
      });

      commit('setBeers', data);
    },
  },
});

export default store;
