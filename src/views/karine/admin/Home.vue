<template>
  <div>
    <rifa-template>
      <div class="nav">
        <router-link to="/rifa-karine">Home</router-link>
        <a href="/rifa-karine/admin/">Números à Liberar</a>
        <a href="/rifa-karine/admin/todos">Todos Registros</a>
      </div>
      <div>
        <h1 v-if="filter">Validação dos números comprados</h1>
        <h1 v-else>Todos Registros de Números</h1>
      </div>
      <div v-for="registro in registros" v-bind:key="registro" class="registro">
        <a
          class="titulo"
          data-toggle="collapse"
          :data-target="'#collapseRegistroConteudo' + registro.id"
          href="#"
        >
          <h4>
            Nº {{ registro.numero }} -
            {{ $filters.toStatusName(registro.status) }} -
            {{ $filters.toFirstName(registro.usuario.nome) }} -
            {{ registro.data_hora }}
          </h4>
        </a>
        <div
          class="conteudo collapse"
          :id="'collapseRegistroConteudo' + registro.id"
        >
          <div>
            <div class="campos">
              <div>
                <span>Número comprado:</span>
                <b>{{ registro.numero }}</b>
              </div>
              <div>
                <span>Status atual:</span>
                <b>{{ $filters.toStatusName(registro.status) }}</b>
              </div>
              <div>
                <span>Nome:</span>
                <b>{{ registro.usuario.nome }}</b>
              </div>
              <div>
                <span>Telefone:</span>
                <b>{{ registro.usuario.telefone }}</b>
              </div>
              <div>
                <span>Data da compra:</span>
                <b>{{ registro.data_hora }}</b>
              </div>
            </div>
            <div class="acoes">
              <button
                class="btn btn-success"
                @click="aprovarRegistro(registro)"
              >
                Aprovar
              </button>
              <button
                class="btn btn-warning"
                @click="liberarRegistro(registro)"
              >
                Liberar
              </button>
            </div>
          </div>
        </div>
      </div>
    </rifa-template>
  </div>
</template>

<script>
import RifaTemplate from '@/components/templates/RifaTemplate.vue'
import { mapGetters, mapActions } from 'vuex'
import Cookies from 'js-cookie'

export default {
  name: 'Cadastro',
  components: { RifaTemplate },
  props: {
    filter: Boolean,
  },
  computed: {
    ...mapGetters('registros', {
      registros: 'getRegistros',
    }),
    ...mapGetters('session', {
      session: 'getSession',
    }),
  },
  methods: {
    ...mapActions('registros', [
      'loadRegistrosEmAberto',
      'atualizarRegistro',
      'resetRegistros',
    ]),
    aprovarRegistro: async function (registro) {
      let registro_tratado = registro
      registro_tratado.status = 3
      let response = await this.atualizarRegistro(registro_tratado)
      if (response.data.status == 3) {
        alert('Número Aprovado')
        location.reload()
      }
    },
    liberarRegistro: async function (registro) {
      let registro_tratado = registro
      registro_tratado.status = 1
      let response = await this.atualizarRegistro(registro_tratado)
      if (response.data.status == 1) {
        alert('Número Liberado')
        location.reload()
      }
    },
  },
  data: () => ({}),
  created: function () {
    let session = this.session
    let cookie = Cookies.get('session_permissao')

    if (!session.hasOwnProperty('permissao') || session.permissao != 2) {
      if (!cookie || cookie != 2) {
        return this.$router.push({
          path: '/rifa-karine/admin/login',
        })
      }
    }

    let params = {}
    if (this.filter) {
      params = { status: 2 }
    }
    this.loadRegistrosEmAberto(params)
  },
}
</script>

<style lang="scss" scoped>
.nav {
  > a {
    margin-right: 1rem;
    font-weight: bold;
    text-decoration: underline;
  }
}
.registro {
  // &:not(:last-of-type) {
  margin-bottom: 0.5rem;
  border-bottom: 1px solid $gray-400;
  padding-bottom: 0.5rem;

  // }
}
.conteudo {
  width: 100%;
  > div {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    > .campos {
      width: 50%;
      @media (max-width: 576px) {
        width: 100%;
      }
      > div {
        display: flex;
        > * {
          width: 50%;
        }
        span {
          text-align: right;
          margin-right: 1rem;
        }
      }
    }
    > .acoes {
      width: 50%;
      text-align: right;
      @media (max-width: 576px) {
        width: 100%;
        margin-top: 1rem;
      }
      .btn {
        color: $white !important;
        font-weight: bold;
        &:not(:last-of-type) {
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
