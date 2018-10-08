<template>
  <div class="sales">
    <div class="box-title flex">
      <h1>your sales</h1>
      <div class="select-list flex">
        <p>period:</p>
        <select class="select bold">
          <option>last year</option>
          <option>last month</option>
          <option>last week</option>
        </select>
      </div>
    </div>
    <img src="img/sales2.png"/>
    <!-- <div class="sale-img" :style="{backgroundImage: url, backgroundSize: 'cover', backgroundPosition: 'center', backgroundrepeat: 'no-repeat'}"/> -->
  </div>
</template>

<script>

export default {
  name: 'sales',
  data() {
    return {
      url: `url("img/sales.png")`
    }
  }
  
}
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

.sales {
  border: 1px solid $border-color;
  width: 100%;
  background-color: white;
  img {
    width: 100%;
  }
}
</style>

