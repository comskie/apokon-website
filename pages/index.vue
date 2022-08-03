<template>
  <div class="grid grid-cols-3 gap-4 p-4">
    <div
      class="bg-slate-400 rounded-md flex gap-4 items-center justify-center flex-col p-4"
    >
      <div class="rounded-full h-52 w-52 bg-lime-500"></div>
      <p class="font-bold">Apokon Elementary School</p>
    </div>
    <div class="col-span-2">
      <span>Our School</span>
      <el-carousel trigger="click" class="rounded-md">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
