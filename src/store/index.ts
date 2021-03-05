import { Beer } from '@/models/Beer.model';
import axios from 'axios';
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

// define your typings for the store state
export interface State {
  beers: Beer[];
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export function useStore() {
  return baseUseStore(key);
}

export const store = createStore<State>({
  state: {
    beers: [],
  },
  getters: {
    getABeer: (state) => (id: string): Beer | undefined =>
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
