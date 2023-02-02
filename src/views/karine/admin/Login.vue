<template>
  <div>
    <rifa-template>
      <div>
        <router-link to="/rifa-karine">Home</router-link>
      </div>
      <form @submit="formSubmit">
        <div class="form">
          <div class="titulo">
            <h1 class="font-open-sans">Chá Rifa da Cecilia</h1>
          </div>

          <div>
            <div class="input">
              <label for="inputUsuario" class="form-label"> Usuario </label>
              <input
                type="text"
                class="form-control"
                id="inputUsuario"
                placeholder="Usuario"
                v-model="form_data.usuario"
                required
              />
            </div>
            <div class="input">
              <label for="inputSenha" class="form-label"> Senha </label>
              <input
                type="password"
                class="form-control"
                id="inputSenha"
                placeholder="*****"
                v-model="form_data.senha"
                required
              />
            </div>
          </div>
          <div class="rodape">
            <div>
              <button type="submit" class="btn btn-success">Entrar</button>
            </div>
          </div>
        </div>
      </form>
    </rifa-template>
  </div>
</template>

<script>
import RifaTemplate from '@/components/templates/RifaTemplate.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Cadastro',
  components: { RifaTemplate },
  computed: {
    ...mapGetters('session', {
      usuario: 'getSession',
    }),
  },
  methods: {
    ...mapActions('session', ['doLoginAdmin']),
    formSubmit: async function (e) {
      e.preventDefault()
      let session = this.form_data
      await this.doLoginAdmin(session)

      this.$router.push({
        path: '/rifa-karine/admin/',
      })
    },
  },
  data: () => ({
    form_data: {
      usuario: '',
      senha: '',
    },
  }),
  created: function () {
    if (
      this.usuario.hasOwnProperty('permissao') &&
      this.usuario.permissao == 2
    ) {
      this.$router.push({
        path: '/rifa-karine/admin/',
      })
    }
  },
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  justify-content: center;
  h1 {
    margin: 0;
    font-size: 2.5rem;
    letter-spacing: -0.1rem;
    margin-bottom: 1rem;
  }
  h5 {
    margin: 0;
  }
  .dica {
    margin: 1rem 0;
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
</style>
