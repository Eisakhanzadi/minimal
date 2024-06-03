<script setup lang="ts">
const props = defineProps(['data' , 'index'])
const {data , index} = props
const score = Number(data.score)*10
const shapeScore = ref(null)
onMounted(()=>{
shapeScore.value.style.width= `${score*2}%`
shapeScore.value.style.transition= `0.35s ease ${index+1}s`
})
</script>

<template>
  <div>
    <div class="content flex justify-between px-1.5">
      <p>{{ data.text }}</p>
      <span>{{ data.score}}</span>
    </div>
    <div class="shape-score mt-2 md:mt-3">
      <span ref="shapeScore"></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  color: rgba(96, 96, 96, 1);

  & > span {
    font-weight: 400;
    line-height: 19.5px;
    font-size: 15px;
    @media screen and (max-width: 768px) {
      line-height: 9.75px;
      font-size: 7.5px;
    }
  }

  & > p {
    font-weight: 400;
    line-height: 18px;
    font-size: 18px;
    color: rgba(174, 123, 182, 1);
    @media screen and (max-width: 768px) {
      line-height: 9px;
      font-size: 7px;
    }
  }
}

div.shape-score {
  background: rgba(228, 228, 228, 1);
  width: 100%;
  height: 8px;
  border-radius: 10px;
  position: relative;
  @media screen and (max-width: 768px) {
    height:4px;
  }
  span{
    border-radius:10px ;
    position: absolute;
    top: 0;
    right: 0;
    background: #AE7BB6;
    height: 100%;
    width: 0;
    @media screen and (max-width: 768px){
      height:4px;
    }
  }
}
</style>