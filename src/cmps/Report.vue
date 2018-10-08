<template>
  <div class="report">
    <div class="box-title flex">
      <h1>report</h1>
      <div class="select-list flex">
        <p>period:</p>
        <select class="select bold">
          <option>last year</option>
        </select>
      </div>
    </div>
    <img src="img/report2.png"/>
  </div>
</template>

<script>

export default {
  name: 'report',
  
}
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

.report {
  border: 1px solid $border-color;
  width: 100%;
  // margin: 20px;
  img {
    width: 100%;
    // min-width: 600px;
  }
}
</style>

