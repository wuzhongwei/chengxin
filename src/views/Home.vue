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
  methods: {
    IsPC () {
      var userAgentInfo = navigator.userAgent;
      var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
      var flag = true;  
      for (var v = 0; v < Agents.length; v++) {  
          if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
      }  
      return flag; 
    }
  },
  components: {
    PC,
    Wap
  },
  mounted() {
    this.isPC = this.IsPC()
  },
}
</script>
<style lang="scss">

</style>
