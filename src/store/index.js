import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    className: '',
    tableName: '',
    timestamps: true,
    columns: [
      {
        name: 'id',
        type: 'increments',
        comment: ''
      }
    ]
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
    },
    updateTimestamps(state, value) {
      state.timestamps = value;
    }
  },
  actions: {
    ADD_COLUMN({ commit }) {
      commit('pushColumn', {
        name: '',
        type: '',
        comment: ''
      })
    },
    UPDATE_COLUMN_NAME({ commit }, { index, name }) {
      commit('updateColumnValue', { index, col: 'name', value: name })
    },
    UPDATE_COLUMN_TYPE({ commit }, { index, type }) {
      commit('updateColumnValue', { index, col: 'type', value: type })
    },
    UPDATE_COLUMN_COMMENT({ commit }, { index, comment }) {
      commit('updateColumnValue', { index, col: 'comment', value: comment })
    },
    DELETE_COLUMN({ commit }, index) {
      commit('deleteColumn', index);
    },
    UPDATE_CLASS_NAME({ commit }, value) {
      commit('updateClassName', value);
    },
    UPDATE_TABLE_NAME({ commit }, value) {
      commit('updateTableName', value);
    },
    UPDATE_TIMESTAMPS({ commit }, value) {
      commit('updateTimestamps', value);
    }
  },
  getters: {
    column: (state) => (index) => state.columns[index]
  },
  modules: {
  }
})
