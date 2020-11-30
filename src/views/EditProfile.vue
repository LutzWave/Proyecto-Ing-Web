<template>
    <div>
        <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      

      <b-form-group id="input-group-2" label="Nombre de Usuario" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Ingrese nuevo nombre de Usuario"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Pais:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.Pais"
          :options="Paises"
          required
        ></b-form-select>
      </b-form-group>
        <b-form-group id="input-group-4" label="Region:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.Region"
          :options="Region"
          required
        ></b-form-select>
      </b-form-group>
       <b-form-group id="input-group-5" label="Ciudad:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.Ciudad"
          :options="Ciudad"
          required
        ></b-form-select>
      </b-form-group>
      <b-button type="submit" variant="primary">Enviar</b-button>
    </b-form>
  </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        Paises: [{ text: 'Escoga un pais', value: null }, 'Chile', 'Peru', 'Argentina'],
        Region: [{ text: 'Escoga una Region', value: null }, 'Arica', 'Valparaiso', 'Metropolitana'],
        Ciudad: [{ text: 'Escoga una Ciudad', value: null }, 'Villa Alemana', 'Valparaiso', 'Viña del mar'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>