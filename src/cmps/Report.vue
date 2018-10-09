<template>
  <div class="report">
    <div class="box-title flex">
      <h2>report</h2>
      <div class="select-list flex">
        <p>period:</p>
        <select class="select bold">
          <option>last year</option>
          <option>last month</option>
          <option>last week</option>
        </select>
      </div>
    </div>
    <img src="img/report.png"/>
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
  background-color: white;
  img {
    width: 100%;
  }
}
</style>

