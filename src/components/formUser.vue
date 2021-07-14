<template lang="pug">
#userModal.modal.fade(tabindex='-1' aria-labelledby='userModalLabel' aria-hidden='true')
  .modal-dialog.modal-lg
    form.modal-content(
      @submit.prevent="checkForm"
    )
      .modal-header
        h5#userModalLabel.modal-title Создание нового пользователя
        button.btn-close(type='button' data-bs-dismiss='modal' aria-label='Close')
      .modal-body
        .row.justify-content-center.p-4
          .form-group.col-12.col-sm-4.mb-3
            label.form-label Фамилия
            input.form-control(
              type="text"
              :class="v$.form.surname.$error ? 'is-invalid' : ''"
              v-model.trim="form.surname"
            )
            p.invalid-feedback(
              v-if="v$.form.surname.$dirty && v$.form.surname.required.$invalid"
            ) Обязательное поле
            p.invalid-feedback(
              v-if="v$.form.surname.$dirty && v$.form.surname.minLength.$invalid"
            ) Слишком короткая строка
            p.invalid-feedback(
              v-if="v$.form.surname.$dirty && v$.form.surname.maxLength.$invalid"
            ) Слишком длинная строка
          .form-group.col-12.col-sm-4.mb-3
            label.form-label Имя
            input.form-control(
              type="text"
              :class="v$.form.name.$error ? 'is-invalid' : ''"
              v-model.trim="form.name"
            )
            p.invalid-feedback(
              v-if="v$.form.name.$dirty && v$.form.name.required.$invalid"
            ) Обязательное поле
            p.invalid-feedback(
              v-if="v$.form.name.$dirty && v$.form.name.minLength.$invalid"
            ) Слишком короткая строка
            p.invalid-feedback(
              v-if="v$.form.name.$dirty && v$.form.name.maxLength.$invalid"
            ) Слишком длинная строка
          .form-group.col-12.col-sm-4.mb-3
            label.form-label Отчество
            input.form-control(
              type="text"
              :class="v$.form.last_name.$error ? 'is-invalid' : ''"
              v-model.trim="form.last_name"
            )
            p.invalid-feedback(
              v-if="v$.form.last_name.$dirty && v$.form.last_name.required.$invalid"
            ) Обязательное поле
            p.invalid-feedback(
              v-if="v$.form.last_name.$dirty && v$.form.last_name.minLength.$invalid"
            ) Слишком короткая строка
            p.invalid-feedback(
              v-if="v$.form.last_name.$dirty && v$.form.last_name.maxLength.$invalid"
            ) Слишком длинная строка
          .form-group.col-12.col-sm-6.mb-3
            label.form-label Дата рождения
            input.form-control(
              type="date"
              :class="v$.form.birthday.$error ? 'is-invalid' : ''"
              v-model="form.birthday"
            )
            p.invalid-feedback(
              v-if="v$.form.birthday.$dirty && v$.form.birthday.required.$invalid"
            ) Обязательное поле
            p.invalid-feedback(
              v-if="v$.form.birthday.$dirty && v$.form.birthday.vDate.$invalid"
            ) Неверная дата
          .form-group.col-12.col-sm-6.mb-3
            label.form-label Место рождения
            input.form-control(
              type="text"
              :class="v$.form.birth_place.$error ? 'is-invalid' : ''"
              v-model.trim="form.birth_place"
            )
            p.invalid-feedback(
              v-if="v$.form.birth_place.$dirty && v$.form.birth_place.required.$invalid"
            ) Обязательное поле
          .form-group.col-12.col-sm-6.mb-3
            label.form-label Почта
            input.form-control(
              type="text"
              :class="v$.form.email.$error ? 'is-invalid' : ''"
              v-model.trim="form.email"
            )
            p.invalid-feedback(
              v-if="v$.form.email.$dirty && v$.form.email.required.$invalid"
            ) Обязательное поле
            p.invalid-feedback(
              v-if="v$.form.email.$dirty && v$.form.email.email.$invalid"
            ) Неверный формат эл. почты
          .form-group.col-12.col-sm-6.mb-3
            label.form-label Номер телефона
            input.form-control(
              type="text"
              :class="v$.form.phone.$error ? 'is-invalid' : ''"
              v-model.trim="form.phone"
            )
            p.invalid-feedback(
              v-if="v$.form.phone.$dirty && v$.form.phone.required.$invalid"
            ) Обязательное поле
            p.invalid-feedback(
              v-if="v$.form.phone.$dirty && v$.form.phone.numeric.$invalid"
            ) Неверный формат телефона
      .modal-footer
        button.btn.btn-success(type='submit') Добавить
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength, email, numeric } from '@vuelidate/validators'

export default {
   setup () {
    return { v$: useVuelidate() }
  },
  name: "formUser",
  props: {
  },
  data() {
    return {
      form: {
        name:  '',
        surname:  '',
        last_name:  '',
        birthday:  '',
        birth_place:  '',
        email:  '',
        phone:  '',
        registration_date:  '',
        last_visit:  ''
      }
    }
  },
  validations () {
    return {
      form: {
        name:  { required, minLength: minLength(2), maxLength: maxLength(25) },
        surname: { required, minLength: minLength(2), maxLength: maxLength(25) },
        last_name: { required, minLength: minLength(2), maxLength: maxLength(25) },
        birthday:  { required, 
          vDate (value) {
            return  new Date(value) < new Date()
          }
        },
        birth_place:  { required },
        email:  { required, email },
        phone:  { required, numeric }
      }
    }
  },
  computed: {
  },
  methods: {
    checkForm() {
      this.v$.form.$touch()
      if (this.v$.form.$error) {
        console.log('валидация успешна')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>