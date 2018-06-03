import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


const notesStore = new Vuex.Store({
    state: {
        notes: [],
        favouriteNotes: []
    },
    mutations: {
        FETCH(state, notes) {
            state.notes = notes;
        },
        FETCH_FAVOURITE(state, favouriteNotes) {
            state.favouriteNotes = favouriteNotes;
        }
    },
    actions: {
        fetch({commit}) {
            return axios.get('/notes')
                .then(response => commit('FETCH', response.data))
        }
    }
});

export default notesStore;