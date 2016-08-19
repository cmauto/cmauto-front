<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="user.email">
    <input type="password" v-model="user.password">
    <button @click="login(user)">Login</button>
    <p v-if="currentUser">
      {{ currentUser.email }}
    </p>
  </div>
</template>

<script>
  import { login } from 'vx/actions'
  import { currentUser } from 'vx/getters'

  export default {
    data() {
      return {
        msg: 'Test',
        user: {
          email: null,
          password: null
        }
      }
    },

    vuex: {
      actions: {
        login
      },
      getters: {
        currentUser
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
