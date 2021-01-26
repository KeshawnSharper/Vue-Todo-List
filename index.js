import Vue from "vue";
import Vueex from "vueex";

Vue.use(Vueex);

export default new Vueex.Store({
  state: {
    todos: []
  },
  mutations: {
    addNewTodo(state, payload) {
      state.todos.push(payload);
    }
  },
  actions: {},
  getters: {
    getTodos(state) {
      return state.todos;
    }
  }
});
