<template>
  <div class="container font-roboto">
    <div class="fundo-container">
      <img class="img-coracao" src="../../assets/img/coracao.svg" alt="" />
      <img class="img-forma-topo" src="../../assets/img/forma.svg" alt="" />
      <img class="img-varal" src="../../assets/img/varal.png" alt="" />

      <img class="img-forma-baixo" src="../../assets/img/forma.svg" alt="" />
      <img class="img-quadrados" src="../../assets/img/quadrados.svg" alt="" />
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultTemplate',
}
</script>
<style lang="scss" scoped>
* {
  color: $rifa-font-color !important;
}
.container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2vh;
  height: calc(100vh - 4vh);
  @media (max-width: 576px) {
    height: calc(100vh - 12vh);
  }
}
.content {
  z-index: 2;
  position: inherit;
  padding: 2rem;
  @media (max-width: 576px) {
    padding: 1rem;
    padding-top: 0;
    margin-top: 5rem;
  }
}
.fundo-container {
  width: 40vw;
  border: 4px solid #e2b877;
  box-shadow: 3px 3px 5px $gray-400;
  border-radius: 1rem;
  background: #efe6dd;
  position: relative;
  overflow: hidden;
  @media (max-width: 576px) {
    width: 90vw;
  }

  > img {
    position: absolute;
    opacity: 0.7;
  }
  .img-varal {
    top: 0;
    right: 0;
    width: 30%;
    @media (max-width: 576px) {
      width: 60%;
    }
  }
  .img-forma-topo {
    top: -240px;
    right: -80px;
    width: 45%;
    transform: rotate(353deg);
    @media (max-width: 576px) {
      top: -135px;
      right: -35px;
      width: 75%;
      transform: rotate(3deg);
    }
  }
  .img-coracao {
    top: 10px;
    left: 10px;
    width: 20%;
    @media (max-width: 576px) {
      width: 25%;
    }
  }

  .img-forma-baixo {
    bottom: -60px;
    left: -125px;
    width: 42%;
    opacity: 0.5;
    @media (max-width: 576px) {
      width: 90%;
    }
  }
  .img-quadrados {
    bottom: 10px;
    left: 10px;
    width: 10%;
    opacity: 0.1;
    @media (max-width: 576px) {
      width: 20%;
    }
  }
}
</style>
