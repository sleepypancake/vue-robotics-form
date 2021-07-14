<template lang="pug">
.table-responsive.text-center
  table.table.table-hover.mb-5
    thead
      tr
        th(
          scope="col"
          @click="sortByName"
        ) ФИО &#x2195
        th(
          scope="col"
          ) дата рождения
        th(
          scope="col"
          ) место рождения
        th(
          scope="col"
          ) почта
        th(
          scope="col"
          ) номер телефона
        th(
          scope="col"
          ) дата регистрации
        th(
          scope="col"
          ) последнее посещение сайта
    tbody
      v-table-row(
        v-for="row in paginatedUsers"
        :key="row.id"
        :row_data="row"
      )
  .pagination.justify-content-center
    .page-item(
      v-for="page in pages"
      :key="page"
      :class="{'active' : page === pageNumber}"
    )
      .page-link(
        @click="pageClick(page)"
      ) {{ page }}
</template>

<script>
import vTableRow from "./v-table-row"

export default {
  name: "v-table",
  components: {
    vTableRow
  },
  props: {
    users_data: {
      type: Array,
      default: () => {
          return []
      }
    }
  },
  data(){
    return {
      usersPerPage: 10,
      pageNumber: 1
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.users_data.length / 10);
    },
    paginatedUsers() {
      let from = (this.pageNumber -1 ) * this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.users_data.slice(from, to)
    }
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page
    },
    sortByName() {
      this.users_data.reverse((a, b) => a.name.localeCompare(b.name))
    }
  }
}
</script>

<style lang="scss" scoped>
.page-item {
  margin: 0 2px;
  &:hover{
    .page-link{
      background: #aeaeae;
      cursor: pointer;
      color: #fff;
    }
  }
  &.active {
    .page-link{
      background: #aeaeae;
      border: 1px solid #e7e7e7;
    }
  }
}
</style>