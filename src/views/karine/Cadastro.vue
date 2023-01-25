<template>
  <div>
    <rifa-template>
      <form @submit="formSubmit">
        <div class="fundo-container">
          <img src="../../assets/img/textura_sorvete.jpg" alt="" />
          <div class="form">
            <div class="titulo">
              <h1 class="font-open-sans-bold">Cha rifa Cecilia</h1>
            </div>
            <div>
              <div class="input">
                <label for="inputName" class="form-label"> Nome </label>
                <input
                  type="tel"
                  class="form-control"
                  id="inputName"
                  placeholder="Nome Sobrenome"
                  v-model="form_data.nome"
                  required
                />
              </div>
              <div class="input">
                <label for="inputTel" class="form-label"> Telefone </label>
                <input
                  type="tel"
                  class="form-control"
                  id="inputTel"
                  placeholder="(00) 90000-0000"
                  v-mask="['(##) ####-####', '(##) #####-####']"
                  v-model="form_data.telefone"
                  required
                />
              </div>
            </div>
            <div class="rodape">
              <div class="valor" v-if="Object.entries(numeros).length > 0">
                Total a pagar:
                {{ $filters.toMoney(Object.entries(numeros).length * 50) }}
              </div>
              <div>
                <button type="submit" class="btn btn-success">Enviar</button>
              </div>
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
  name: 'Cadastro',
  components: { RifaTemplate },
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters('numeros', {
      numeros: 'getSelectedNumeros',
    }),
    ...mapGetters('session', {
      usuario: 'getSession',
    }),
  },
  methods: {
    ...mapActions('session', ['doLogin', 'saveRegistro']),
    formSubmit: async function (e) {
      e.preventDefault()
      let session = this.form_data
      await this.doLogin(session)
      await this.saveRegistro()

      this.$router.push({
        path: '/rifa-karine/concluido',
      })
    },
  },
  data: () => ({
    form_data: {
      nome: '',
      telefone: '',
    },
  }),
  created: function () {
    if (Object.entries(this.numeros).length < 1)
      return this.$router.push({
        path: '/rifa-karine',
      })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
form {
  display: flex;
  justify-content: center;
  h1 {
    margin: 0;
    font-size: 2.5rem;
  }
  .fundo-container {
    width: 40vw;
    border: 4px solid #e2b877;
    box-shadow: 3px 3px 5px $gray-400;
    border-radius: 1rem;
    background: white;
    position: relative;
    overflow: hidden;
    margin-top: 1rem;
    @media (max-width: 576px) {
      width: 90vw;
      margin-top: 5vw;
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
        > label {
          font-weight: bold;
        }
      }
      .rodape {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        > div {
          display: flex;
          width: 50%;
          &:not(.valor) {
            justify-content: flex-end;
          }
          @media (max-width: 576px) {
            width: 100%;
            &:not(.valor) {
              margin-top: 8px;
            }
          }
        }
        .btn {
          color: $white !important;
          font-weight: bold;
          height: 50px;
        }
      }
    }
  }
}
</style>
