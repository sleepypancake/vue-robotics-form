<template lang="pug">
tr
  th(
    scope="row"
    ) {{ doNames }}
  td {{ row_data.birthday }}
  td {{ row_data.birth_place }}
  td {{ row_data.email }}
  td {{ row_data.phone }}
  td {{ row_data.registration_date }}
  td {{ row_data.last_visit }}
</template>

<script>
export default {
  name: "v-table-row",
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
      return {}
  },
  computed: {
    doNames() {
      return `${this.row_data.surname[0].toUpperCase()}${this.row_data.surname.slice(1)} ${this.row_data.name[0].toUpperCase()}. ${this.row_data.last_name[0].toUpperCase()}.`
    }
  }
}
</script>

<style lang="scss" scoped>
.v-table-row {
  display: flex;
  justify-content: space-between;
  
  .row {
    text-align: left;
    padding: 8px 16px;
    font-size: 14px;
    width: 120px;
    max-width: 120px;
    overflow-wrap: break-word;
    box-sizing: border-box;
  }
}
</style>