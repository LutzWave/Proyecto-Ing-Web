<template>
  <div>
      <b-container fluid>
    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="3">
        <label :for="`type-${type}`"> <code>{{ type }}</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
  </b-container>
  <div>
    <b-form-group
      class="mb-0"
      label-for="textarea-formatter"
      
    >
    <p style="white-space: pre-line"><b>Ingrese su problema:</b> {{ text1 }}</p>
      <b-form-textarea
        id="textarea-formatter"
        v-model="text1"
        placeholder="Ingrese su problema aqui aqui"
        :formatter="formatter"
      ></b-form-textarea>
    </b-form-group>
    
  </div>

    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="Confirmado"
      unchecked-value="No Confirmado"
    >
     Confirmar solicitud de ayuda
    </b-form-checkbox>

    <div>State: <strong>{{ status }}</strong></div>
  
  <div>
  <b-button variant="success">Enviar</b-button>
  </div>
  </div>
</template>

<script>


  export default {
    
    
    data() {
      return {
        status: 'No Confirmado',
        types: [
          'CorreoElectronico'
        ],
        text1: ''
      }
    }
  }

 
</script>