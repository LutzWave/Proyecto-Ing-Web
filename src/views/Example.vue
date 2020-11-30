<template>
  <div id="form">
    <b-form @submit="submitForm">
      <b-row>
        <b-col sm=12 lg=6>
          <b-form-group
            id=""
            label=""
            laber-for=""
          >
            <label>Nombre</label>
            <b-form-input
              id="input-name"
              name=""
              v-model="form.name"
              :state="checkName"
            >
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            id=""
            label-for=""
            description=""
          >
            <label>Usuario</label>
            <b-form-input
              id="input-user"
              name=""
              v-model="form.user"
              :state="checkUser"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-form-group
        id=""
        label-for=""
        description=""
      >
        <label>Dirección de correo electrónico</label>
        <b-form-input
          id="input-email"
          name=""
          v-model="form.email"
          :state="checkEmail"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group
        id=""
        label-for=""
        description="Utiliza ocho caracteres como mínimo
        con una combinacion de letras, números y símbolos"
      >
        <label>Contraseña</label>
        <b-form-input
          id="input-password"
          type="password"
          v-model="form.password"
          :state="checkPassword"
        >
        </b-form-input>
      </b-form-group>

      <b-button :disabled="getButtonState()" type="submit">Registrarse</b-button>

      <p>Al registrarte, accedes a las <router-link to="/">Condiciones de servicio</router-link>
      y <router-link to="/">Política de privacidad</router-link> de Generico</p>

      <hr/>
      <p>¿Ya estás registrado? <router-link to="/example2">Inicia sesión aquí</router-link></p>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Register',
  data: () => ({
    form: {
      name: '',
      user: '',
      email: '',
      password: '',
    },
  }),
  computed: {
    checkName(): boolean | null {
      const len: number = this.form.name.length;
      if (!len) {
        return null;
      }
      return !(len < 2);
    },
    checkUser(): boolean | null {
      const len: number = this.form.user.length;
      if (!len) {
        return null;
      }
      // eslint-disable-next-line
      const regex: RegExp = /^[a-z0-9_]{5,}[a-z]+[0-9]*$/;
      return regex.test(this.form.user);
    },
    checkEmail(): boolean | null {
      const len: number = this.form.email.length;
      if (!len) {
        return null;
      }
      // eslint-disable-next-line
      const regex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(this.form.email);
    },
    checkPassword(): boolean | null {
      const len: number = this.form.password.length;
      if (!len) {
        return null;
      }
      if (/\s/.test(this.form.password)) {
        return false;
      }
      // eslint-disable-next-line
      const regex: RegExp = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      return regex.test(this.form.password);
    },
  },
  watch: {
    'form.name': function () {
      this.checkFeedback('name');
    },
    'form.user': function () {
      this.checkFeedback('user');
    },
    'form.email': function () {
      this.checkFeedback('email');
    },
    'form.password': function () {
      this.checkFeedback('password');
    },
  },
  methods: {
    checkFeedback(field: string): void {
      const input: HTMLElement | null = document.getElementById(`input-${field}`);
      if (input) {
        if (this.checkField(field)) {
          input.style.boxShadow = '';
        } else {
          input.style.boxShadow = '0 0 0 2px rgba(232, 59, 45, 0.8)';
          input.style.backgroundImage = 'none';
        }
      }
    },
    checkField(field: string): boolean | null {
      switch (field) {
        case 'name':
          return this.checkName;
        case 'user':
          return this.checkUser;
        case 'email':
          return this.checkEmail;
        case 'password':
          return this.checkPassword;
        default:
          return null;
      }
    },
    getButtonState(): boolean {
      return !(this.checkName && this.checkUser && this.checkEmail && this.checkPassword);
    },
    submitForm(): void {
      alert(this.form.name);
    },
  },
});
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,400&display=swap');

$primary-color: #1A73E9;

#form {
  font-family: 'Roboto', sans-serif;
  font-weight: 300px !important;
  max-width: 480px;
  height: auto;
  margin: 0 auto 100px;
  padding: 30px;
  box-shadow: 0 6px 10px rgba(black, 0.08), 0 0 6px rgba(black, 0.05);
  border-radius: 10px;
  font-size: 14px;

  .form-group {
    text-align: left;
    font-size: 16px;
    font-weight: 500;
  }

  input {
    border: 0;
    background-color: #F2F2F2;
  }

  .form-control {
    &:focus {
      border-color: $primary-color;
      box-shadow: 0 0 0 4px rgb($primary-color, 0.2);
    }
  }

  button {
    font-size: 15px;
    width: 100%;
    height: 45px;
    border: 0;
    border-radius: 5px;
    outline: 0;
    color: white;
    outline: 0;
    background-color: $primary-color;
    transition: all 0.3s ease;
    font-weight: 500;
    margin: 20px 0;
  }

  p {
    font-size:13px;
    color: #B3B3B3;
  }

  a { color: $primary-color; }
}

</style>
