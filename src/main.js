import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";

const store = createStore({
  state: {
    todos: localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  },
  mutations: {
    addNewTodo(state, payload) {
      state.todos.push(payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo(state, payload) {
      state.todos.splice(payload, 1);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    markAllDone(state) {
      state.todos.every((todo) => (todo.done = true));
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    markTodo(state, index) {
      state.todos[index].done = !state.todos[index].done;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    }
  },
  actions: {},
  getters: {
    getTodos(state) {
      return state.todos;
    }
  }
});

let app = createApp(App);
app.use(store);
app.mount("#app");
