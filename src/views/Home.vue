<template>
  <div>
   <PC v-if="isPC"></PC>
   <Wap class="w750" v-else></Wap>
  </div>
</template>
<script>
import PC from '@/components/PC.vue'
import Wap from '@/components/Wap.vue'
export default {
  data () {
    return {
      isPC: false
    }
  },
  components: {
    PC,
    Wap
  }
}
</script>
<style lang="scss">

</style>
