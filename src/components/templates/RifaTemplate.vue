<template>
  <div class="font-roboto">
    <!-- <div class="c-headerBar">
      <div class="w-100 text-center titulo">
        <h1 class="text-center font-hj">KARINE</h1>
      </div>
    </div>
    <div class="content">
    </div> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DefaultTemplate',
}
</script>
<style lang="scss">
.c-headerBar {
  background-color: $pink;
  text-align: center;
  h1 {
    font-size: 9rem;
    text-shadow: 2px 2px 2px black;
    margin: 0;
    color: $yellow;
  }
  .titulo {
    position: relative;
    .credits {
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: $yellow;
      font-size: 1.2rem;
      > span {
        > div {
          line-height: 1.1rem;
          &:last-of-type {
            font-size: 120%;
          }
        }
      }
    }
  }
}
</style>
