<template>
  <div class="c-dinheiroFrauda">
    <div class="num-1">
      <div class="img-container">
        <img class="img-num-1" src="../../assets/img/num_1.png" alt="" />
      </div>
      <h2>Número da rifa</h2>
    </div>
    <div class="igual">
      <h2>=</h2>
    </div>
    <div class="fralda">
      <div class="img-container">
        <img class="img-frauda" src="../../assets/img/fralda.svg" alt="" />
      </div>
      <h2>Pacote de fraldas</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DinheiroFrauda',
}
</script>
<style lang="scss" scoped>
.c-dinheiroFrauda {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: 1rem 0;
}
h2 {
  margin: 0;
}
.igual {
  width: 100%;
  text-align: center;
  font-size: 3rem;
  line-height: 1.5rem;
}
.num-1,
.fralda {
  display: flex;
  width: 100%;
  align-items: center;
  .img-container {
    width: 14%;
    margin-right: 1.9rem;
  }
  &.fralda .img-container {
    width: 20%;
    margin-right: 0.7rem;
  }
  img {
    width: 100%;
    height: auto;
  }
}
</style>
