
<template>
  <div id="app">
    <!-- Barra de navegación -->
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark" class="navbar-custom">
        <b-navbar-brand href="#"><router-link to="/" class="router-link-custom">Galeria</router-link></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-navbar-nav>
              <b-nav-item><router-link to="/signin" class="router-link-custom">Iniciar sesión</router-link></b-nav-item>  
            </b-navbar-nav>

            <b-nav-form>
              <router-link to="/signup" tag="button" class="button-custom">Regístrate</router-link>
            </b-nav-form>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  <!-- Footer -->
  <mdb-footer color="unique-color-dark" class="page-footer font-small pt-0">
    <div style="backgroundColor: #6351ce">
      <mdb-container class="text-left">
        <mdb-row class="py-4 d-flex align-items-center">
          <mdb-col md="6" lg="5" class="text-center text-md-left mb-4 mb-md-0">
            <h6 class="mb-0 white-text">Informacion de contacto</h6>
          </mdb-col>
          <mdb-col md="6" lg="7" class="text-center text-md-right">
            <a class="fb-ic ml-0"><i class="fab fa-facebook white-text mr-lg-4"> </i></a>
            <a class="tw-ic"><i class="fab fa-twitter white-text mr-lg-4"> </i></a>
            <a class="gplus-ic"><i class="fab fa-google-plus white-text mr-lg-4"> </i></a>
            <a class="li-ic"><i class="fab fa-linkedin-in white-text mr-lg-4"> </i></a>
            <a class="ins-ic"><i class="fab fa-instagram white-text mr-lg-4"> </i></a>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
    <mdb-container class="mt-5 mb-4 text-center text-md-left">
      <mdb-row class="mt-3">
        <mdb-col md="3" lg="4" xl="3" class="mb-4">
          <h6 class="text-uppercase font-weight-bold"><strong>InstaPet</strong></h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
          <p>Comparte todo los conocimientos de tus mascotas con el mundo entero , en el blog de mascotas mas grande del mundo.</p>
        </mdb-col>
        <mdb-col md="2" lg="2" xl="2" class="mb-4">
          <h6 class="text-uppercase font-weight-bold"><strong>Redes sociales</strong></h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
          <p><a href="https://www.facebook.com/">Facebook</a></p>
          <p><a href="https://www.instagram.com/">Instagram</a></p>
          <p><a href="https://twitter.com/?lang=es">twitter</a></p>
        </mdb-col>
        <mdb-col md="3" lg="2" xl="2" class="mb-4">
          <h6 class="text-uppercase font-weight-bold"><strong>Links de ayuda</strong></h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
          <p><a href="">Tu cuenta</a></p>
          <p><a href="http://localhost:8080/Ayuda">Ayuda</a></p>
          
        </mdb-col>
        <mdb-col md="4" lg="3" xl="3" class="mb-4">
          <h6 class="text-uppercase font-weight-bold"><strong>Contacto</strong></h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
          <p><i class="fas fa-home mr-3"></i> Brasil 2241, Valparaíso,Chile</p>
          <p><i class="fas fa-envelope mr-3"></i> ContactoInstaPet@Instapet.com</p>
          <p><i class="fas fa-phone mr-3"></i> + 56 9 7555 0612</p>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Barra de navegación */

/* Router Link */
.router-link-custom {
  color: #FFFFFF;
}

.router-link-custom:hover {
  color: #FFFFFF;
  text-decoration: none;
} 

/* Regístrate Botón */
.button-custom {
  font-family: Monserrat, sans-serif;
  outline: 0;
  background: #ea4c89;
  width: 100%;
  border: 0;

  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 20px;
  padding-right: 20px;

  color: #FFFFFF;
  font-size: 14px;
  font-weight: bold;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 5px;
}
</style>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>