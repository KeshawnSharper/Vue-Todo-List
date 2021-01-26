<template>
  <form @submit.prevent="addNewTodo">
    <input v-model="value" name="new todo" />
    <label>New Todo </label>
    <button>Submit</button>
  </form>
  <h3>{{ value }}</h3>
  <div v-for="(todo,index) in this.storeTodos" :key="todo.id">
    <h3 :class="{ done: todo.done }" @click="markTodo(index)">
      {{ todo.content }}
    </h3>
    <button @click="deleteTodo(index)">Remove Todo</button>
  </div>
  <button @click="markAllDone()">Mark All Done</button>
</template>

<script>
import { ref } from "vue";
export default {
  data: () => ({
    value: "",
  }),
  mounted() {
    this.storeTodos = this.$store.state.todos;
    console.log(this.storeTodos);
  },
  setup() {
    return {};
  },
  methods: {
    addNewTodo: function () {
      this.$store.commit("addNewTodo", {
        id: Date.now(),
        done: false,
        content: this.value,
      });
    },
    deleteTodo: function (index) {
      this.$store.commit("deleteTodo", index);
    },
     markAllDone: function () {
      this.$store.commit("markAllDone");
    },
     markTodo: function (index) {
      this.$store.commit("markTodo",index);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3 {
  cursor: pointer;
}
.done {
  text-decoration: line-through;
}
</style>
