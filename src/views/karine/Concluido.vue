<template>
  <rifa-template>
    <div class="titulo">
      <h1 class="font-open-sans">Tudo Certo!</h1>
    </div>
    <div>
      <h4>
        Números registrados, agora é só fazer o pix e nos enviar o comprovante
        que validaremos seu número.
      </h4>
    </div>
    <div class="btn-rifa">
      <a href="https://nubank.com.br/pagar/pent8/vQHRDAQ5hg" target="_BLANK">
        <img class="logo-pix" src="../../assets/img/logo_pix.png" alt="" />
        <h2>Fazer pix</h2>
      </a>
    </div>
    <div class="btn-rifa">
      <a href="https://nubank.com.br/pagar/pent8/vQHRDAQ5hg" target="_BLANK">
        <img class="logo-zap" src="../../assets/img/logo_whatsapp.png" alt="" />
        <h2>What's App</h2>
      </a>
    </div>
    <div>
      <dinheiro-frauda></dinheiro-frauda>
    </div>
    <div class="agradecimento">
      <h4>Obrigado por contribuir, qualquer dúvida nos chame.</h4>
    </div>
  </rifa-template>
</template>

<script>
import RifaTemplate from '@/components/templates/RifaTemplate.vue'
import DinheiroFrauda from '@/components/rifa/DinheiroFrauda.vue'

import '../../assets/img/textura_sorvete.jpg'

export default {
  name: 'Concluido',
  components: { RifaTemplate, DinheiroFrauda },
  created: function () {
    // if (Object.entries(this.numeros).length < 1)
    //   return this.$router.push({
    //     path: '/rifa-karine',
    //   })
  },
}
</script>

<style lang="scss" scoped>
.titulo {
  width: 100%;
  text-align: center;
  letter-spacing: -0.1rem;
  @media (min-width: 576px) {
    font-size: 3rem;
  }
}
.icone {
  background: #f3ccbe;
  width: 80px;
  height: 80px;
  border: 3px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  .material-icons {
    color: white;
    font-size: 5rem;
  }
}

.btn-rifa {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  > a {
    width: 75%;
    display: flex;
    align-items: center;
    color: $rifa-font-color !important;
    background: $rifa-good-color;
    padding: 3px 20px;
    border: 3px solid white;
    border-radius: 1rem;
    box-shadow: 3px 3px 5px $gray-400;
  }
  .logo-pix,
  .logo-zap {
    width: 22%;
    margin-right: 1rem;

    @media (max-width: 576px) {
      margin-right: 2rem;
      width: 15%;
    }
    > img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
