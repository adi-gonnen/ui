<template>
  <div class="sales">
    <!-- <h1>your sales</h1> -->
    <img src="img/sales.png"/>
  </div>
</template>

<script>

export default {
  name: 'sales',
  
}
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

.sales {
  border: 1px solid $border-color;
  // margin: 20px;
  img {
    width: 100%;
  }
}
</style>

