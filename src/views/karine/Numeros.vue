<template>
  <div>
    <rifa-template>
      <form @submit="formSubmit">
        <div class="fundo-container">
          <img src="../../assets/img/textura_sorvete.jpg" alt="" />
          <div class="form">
            <div class="titulo">
              <h1 class="">Chá rifa Cecilia</h1>
              <div>
                <div class="numeros">
                  <div
                    v-for="numero in numeros_tratado"
                    :key="numero"
                    class="numero"
                  >
                    <input
                      type="checkbox"
                      :id="`check-${numero.id}`"
                      :disabled="numero.disabled"
                    />
                    <label
                      :for="`check-${numero.id}`"
                      @click="addNumero(numero)"
                      :class="`status-${numero.status}`"
                    >
                      {{ numero.id }}
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    @click="
                      (e) => {
                        if (pagina_atual == 0) return
                        pagina_atual--
                      }
                    "
                  >
                    -
                  </button>
                  {{ pagina_atual + 1 }}
                  <button
                    @click="
                      (e) => {
                        if (pagina_atual == ultima_pagina) return
                        pagina_atual++
                      }
                    "
                  >
                    +
                  </button>
                </div>
                <div>
                  {{ form_data }}
                  <button @click="enviar">ENVIAR</button>
                </div>
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
  name: 'Numeros',
  components: { RifaTemplate },
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters('numeros', {
      numeros: 'getNumeros',
    }),
    numeros_tratado: function () {
      let tratado = this.dados_pagina_atual
      tratado.map((numero) => {
        // numero.checked = false
        numero.disabled = numero.status != 1
        return numero
      })
      return tratado
    },
    dados_pagina_atual: function () {
      let comeco = this.pagina_atual * this.registros_por_pag
      let final = (this.pagina_atual + 1) * this.registros_por_pag
      let numeros = this.numeros.slice(comeco, final)

      return numeros
    },
    ultima_pagina: function () {
      return this.numeros.length / this.registros_por_pag - 1
    },
  },
  methods: {
    ...mapActions('session', ['doLogin']),
    ...mapActions('numeros', ['loadNumeros', 'loadStatus', 'setNumeros']),
    formSubmit: function (e) {
      e.preventDefault()
      let session = this.form_data
      this.doLogin(session)
    },
    addNumero: function (numero) {
      if (numero.disabled) return
      this.form_data.numeros.push(numero)
    },
    enviar: async function () {
      let numeros = this.form_data.numeros
      this.setNumeros(numeros)
      this.$router.push({
        path: '/rifa-karine/conluido',
      })
    },
  },
  created: function () {
    this.loadNumeros()
  },
  data: () => ({
    pagina_atual: 0,
    registros_por_pag: 50,
    form_data: {
      numeros: [],
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
      .numeros {
        display: flex;
        flex-wrap: wrap;
        .numero {
          width: calc(20% - 4px);
          box-shadow: 3px 3px 5px $gray-400;

          margin-top: 4px;
          margin-right: 4px;
          input:checked + label {
            background: $success !important;
          }
          > input {
            display: none;
          }
          > label {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 6px 0;
            transition: 200ms all;
            &.status-1 {
              background: white;
              &:hover {
                background: lighten($success, $amount: 10) !important;
              }
            }
            &.status-2 {
              background: $warning;
            }
            &.status-3 {
              background: $danger;
            }
          }
        }
      }
    }
  }
}
</style>
