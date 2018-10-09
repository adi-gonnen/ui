<template>
  <div class="sales">
    <div class="box-title flex">
      <h2>your sales</h2>
      <div class="select-list flex">
        <p>period:</p>
        <select class="select bold">
          <option>last year</option>
          <option>last month</option>
          <option>last week</option>
        </select>
      </div>
    </div>
    <img src="img/sales.png"/>
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

