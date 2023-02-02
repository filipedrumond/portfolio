<template>
  <div>
    <rifa-template>
      <form @submit="formSubmit">
        <div class="form">
          <div class="titulo">
            <h1 class="font-open-sans">Chá Rifa da Cecilia</h1>
          </div>
          <div>
            <h5>Escolha um número e clique em continuar</h5>
          </div>
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
                  :class="`status-${numero.status} font-open-sans-bold`"
                >
                  {{ numero.id }}
                </label>
              </div>
            </div>
            <div class="rodape">
              <div class="paginacao">
                <a
                  :class="pagina_atual == 0 ? 'hide' : ''"
                  @click="irParaPagina(-1)"
                >
                  <i class="material-icons">chevron_left</i>
                </a>
                <span>
                  {{ pagina_atual + 1 }}
                </span>
                <a
                  :class="pagina_atual == ultima_pagina ? 'hide' : ''"
                  @click="irParaPagina(+1)"
                >
                  <i class="material-icons">chevron_right</i>
                </a>
              </div>
              <div class="">
                <button
                  :disabled="Object.entries(form_data.numeros).length == 0"
                  class="btn btn-success btn-lg"
                  type="submit"
                >
                  Continuar
                </button>
              </div>
              <div
                class="valor"
                v-show="Object.entries(form_data.numeros).length > 0"
              >
                Total a pagar:
                {{
                  $filters.toMoney(
                    Object.entries(form_data.numeros).length * 50
                  )
                }}
              </div>
            </div>
          </div>
        </div>
      </form>
      <div>
        <small> <a href="/rifa-karine/admin/login">admin</a> </small>
      </div>
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
      return Math.ceil(this.numeros.length / this.registros_por_pag - 1)
    },
  },
  methods: {
    ...mapActions('session', ['doLogin']),
    ...mapActions('numeros', ['loadNumeros', 'loadStatus', 'setNumeros']),
    formSubmit: async function (e) {
      e.preventDefault()
      let numeros = this.form_data.numeros
      this.setNumeros(numeros)
      this.$router.push({
        path: '/rifa-karine/cadastro',
      })
    },
    addNumero: function (numero) {
      if (numero.disabled) return
      let numeros = this.form_data.numeros
      let numero_ = numero.id

      if (numeros.hasOwnProperty(numero_))
        return delete this.form_data.numeros[numero_]

      this.form_data.numeros[numero_] = numero
    },
    irParaPagina: function (direcao) {
      if (direcao == +1) {
        if (this.pagina_atual == this.ultima_pagina) return
        return this.pagina_atual++
      }
      if (this.pagina_atual == 0) return
      this.pagina_atual--
    },
  },
  created: function () {
    this.loadNumeros()
  },
  data: () => ({
    pagina_atual: 0,
    registros_por_pag: 50,
    valor_rifa: 50,
    form_data: {
      numeros: {},
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
    font-size: 2.5rem;
    margin-bottom: 1rem;
    letter-spacing: -0.1rem;
  }
  h5 {
    margin: 0;
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
          cursor: pointer;
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
    .rodape {
      display: flex;
      margin-top: 1rem;
      flex-wrap: wrap;
      .btn {
        color: $white !important;
        font-weight: bold;
        height: 50px;
        @media (max-width: 576px) {
          height: 40px;
          padding-top: 0.2rem;
        }
      }

      > div {
        width: 50%;
        display: flex;
        align-items: center;
        &:not(.paginacao) {
          justify-content: flex-end;
        }
        @media (max-width: 576px) {
          margin-top: 4px;
          justify-content: flex-end;
        }
      }
      .valor {
        margin-top: 8px;
        width: 100%;
      }
      .paginacao {
        font-size: 2rem;
        .hide {
          opacity: 0;
          pointer-events: none;
        }
        > a,
        > span {
          display: flex;
          box-shadow: 3px 3px 5px $gray-400;
          background: white;
          width: 50px;
          height: 50px;
          margin-right: 4px;
          @media (max-width: 576px) {
            width: 40px;
            height: 40px;
          }
        }
        > a {
          font-size: 150%;
          cursor: pointer;
          @media (max-width: 576px) {
            font-size: 120%;
          }
        }
        > span {
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>
