<template>
<div>
  <div>
    <div class="mt-2">Ingrese nombre de la fotografia: {{ text }}</div>
    <b-form-input v-model="text" placeholder="Nombre fotogragia"></b-form-input>
  </div>

    <div>
    <div class="mt-2">Ingrese Descripcion de la fotografia: {{ text }}</div>
    <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Descripcion de la fotografia"
      rows="3"
      max-rows="6"
    ></b-form-textarea>

    <pre class="mt-3 mb-0">{{ text }}</pre>
  </div>

    <div>
    <label for="tags-basic">Categoria</label>
    <b-form-tags input-id="tags-basic" v-model="value"></b-form-tags>
    <p class="mt-2">{{ value }}</p>
    </div>

    <div>
    <!-- Styled -->
    <b-form-file
      v-model="file1"
      :state="Boolean(file1)"
      placeholder="Seleccione la fotogragia"
      drop-placeholder="Drop uuw here..."
    ></b-form-file>
  </div>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        types: [
          'Nombre'
        ]
      }
    }
  }
  
</script>


<!--Pagina-->