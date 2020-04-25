import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    className: '',
    tableName: '',
    columns: []
  },
  mutations: {
    pushColumn(state, payload) {
      state.columns = [ ...state.columns, payload ];
    },
    updateColumnValue(state, { index, col, value }) {
      const columns = [ ...state.columns ];
      columns[index][col] = value;
      state.columns = columns;
    },
    deleteColumn(state, index) {
      state.columns = [ ...state.columns.slice(0, index), ...state.columns.slice(index+1) ];
    },
    updateClassName(state, value) {
      state.className = value;
    },
    updateTableName(state, value) {
      state.tableName = value;
    }
  },
  actions: {
    ADD_COLUMN({ commit }) {
      commit('pushColumn', {
        name: '',
        type: ''
      })
    },
    UPDATE_COLUMN_NAME({ commit }, { index, name }) {
      commit('updateColumnValue', { index, col: 'name', value: name })
    },
    UPDATE_COLUMN_TYPE({ commit }, { index, type }) {
      commit('updateColumnValue', { index, col: 'type', value: type })
    },
    DELETE_COLUMN({ commit }, index) {
      commit('deleteColumn', index);
    },
    UPDATE_CLASS_NAME({ commit }, value) {
      commit('updateClassName', value);
    },
    UPDATE_TABLE_NAME({ commit }, value) {
      commit('updateTableName', value);
    }
  },
  getters: {
    column: (state) => (index) => state.columns[index]
  },
  modules: {
  }
})
