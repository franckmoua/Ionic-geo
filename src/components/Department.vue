<template>
  <ion-toolbar>
    
   
  </ion-toolbar>
</template>

<script >
import {   IonToolbar, } from '@ionic/vue';


export default {
  name: 'DepartmentComponent',
  props: {
    name: String
  },
  emits:['departResult'],
  data(){
    return{
      
    }

  },
  methods:{
  
  },
   
  mounted(){
   
  },
  components: {
      IonToolbar,
        
  }  
}
</script>