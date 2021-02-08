<template>
  <ion-toolbar>
    <ion-card >
      
      <ion-item position="fixed">Communes</ion-item>
      
      <ion-input v-model="cityName"></ion-input>

      <ion-button expand="block" color="primary" @click.prevent="codeOrName">Search</ion-button>
    </ion-card>
  </ion-toolbar>
</template>

<script >
import { IonInput, IonButton, IonToolbar, IonItem, IonCard  } from '@ionic/vue';
import axios from 'axios';

export default {
  name: 'TownComponent',
  props: {
    name: String
  },
  emits:['cityResult'],
  data(){
    return{
        cityName:"",
        cities:[],
        error:"",
    }
    
  },

  methods:{
    
    codeOrName(){
      if(this.cityName.length == 0){
      this.error = "pleaase wright something"
      
    }
    else{
       if (isNaN(this.cityName)) {
    this.cityList();
  }else{
    this.zipList();
  }
    }
     
    },
    zipList(){
      axios
      .get(
        `https://geo.api.gouv.fr/communes?codePostal=${this.cityName}&boost=population&fields=departement,region,population,codesPostaux`
      )
      .then((response) => {
        console.log(response.data);
        this.cityData = response.data;
        console.log(response.data.length);
        //this.showResults = this.cityData.length > 1 ? this.succes = `${this.cityData.length} résultats` : this.succes = `${this.cityData.length} résultat`
        this.error = 
        this.$emit('cityResult', this.cityData);
      })
      .catch((error) => {
        console.log(error);
      });
    },

    cityList(){
      axios
      .get(
        `https://geo.api.gouv.fr/communes?nom=${this.cityName}&fields=departement,region,population,codesPostaux&boost=population&limit=5`
      )
      .then((response) => {
        console.log(response.data)
        this.cityData = response.data;
        console.log(response.data.length);
        //this.showResults = this.cityData.length <= 1 ? ` ${this.cityData.length} résultat` : ` ${this.cityData.length} résultats`;
        this.$emit('cityResult', this.cityData);
      })
      .catch((error)=>{
        console.log(error);
      });
    },
    
  },
   getValue(){
       this.$emit('cityResult', this.cityData);
   },
  mounted(){
    this.zipList();
    this.cityList();
  },
  components: {
      IonInput,
      IonButton,
      IonToolbar,
      IonItem,
      IonCard,
      
      
  }  
}
</script>