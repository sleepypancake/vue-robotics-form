<template lang="pug">
.container
  .text-center.mb-5
    button.btn.btn-success(
      type='button'
      data-bs-toggle='modal'
      data-bs-target='#userModal'
      ) Добавить пользователя
  v-table(
    :users_data="USERS"
  )
  formUser
</template>

<script>
import vTable from './components/table/v-table'
import formUser from './components/formUser'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    vTable,
    formUser
  },
  data: () => {
    return {}
  },
  computed: {
    ...mapGetters([
      'USERS'
    ])
  },
  methods: {
    ...mapActions({
      getData: 'GET_USERS_FROM_API',
      postData: 'POST_USERS_TO_API'
    })
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
