<template>
  <div>
    <rifa-template>
      <form @submit="formSubmit">
        <div class="fundo-container">
          <img src="../../assets/img/textura_sorvete.jpg" alt="" />
          <div class="form">
            <div class="titulo">
              <h1 class="">Chá rifa Cecilia</h1>
              {{ status }}
            </div>
          </div>
        </div>
      </form>
    </rifa-template>
  </div>
</template>

<script>
import RifaTemplate from '@/components/templates/RifaTemplate.vue'
import '../../assets/img/textura_sorvete.jpg'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Numeros',
  components: { RifaTemplate },
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters('numeros', {
      numeros: 'getNumeros',
      status: 'getStatus',
    }),
  },
  methods: {
    ...mapActions('session', ['doLogin']),
    ...mapActions('numeros', ['loadNumeros', 'loadStatus']),
    formSubmit: function (e) {
      e.preventDefault()
      let session = this.form_data
      this.doLogin(session)
    },
  },
  created: function () {
    this.loadNumeros()
    this.loadStatus()
  },
  data: () => ({
    form_data: {
      nome: '',
      telefone: '',
    },
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
form {
  display: flex;
  justify-content: center;
  h1 {
    margin: 0;
  }
  .fundo-container {
    width: 40vw;
    border: 4px solid #e2b877;
    box-shadow: 3px 3px 5px $gray-400;
    border-radius: 1rem;
    background: white;
    position: relative;
    overflow: hidden;
    @media (max-width: 576px) {
      width: 90vw;
    }

    > img {
      position: absolute;
      width: 100%;
      height: auto;
      opacity: 0.3;
      z-index: 1;
    }
    .form {
      z-index: 2;
      position: inherit;
      padding: 2rem;
      @media (max-width: 576px) {
        padding: 1rem;
      }
      .titulo {
        width: 100%;
        text-align: center;
      }
      .input {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
