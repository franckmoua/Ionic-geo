<template>
  <ion-toolbar>
    <ion-card >
      <ion-card color="danger" v-if="cityName.length == 0">
        <ion-title size="large">{{error}}</ion-title>
        </ion-card>
      <ion-item position="fixed">Communes</ion-item>
      <ion-input v-model="cityName"></ion-input>
      <ion-button expand="block" color="primary" shape="round" @click.prevent="codeOrName">Search</ion-button>
    </ion-card>
  </ion-toolbar>
</template>

<script >
import { IonInput, IonButton, IonToolbar, IonItem, IonCard, IonTitle, } from '@ionic/vue';
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
      this.error = "Veuillez entrer une ville ou code postal"
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
        //this.showResults = this.cityData.length > 1 ? `${this.cityData.length} résultats` :  `${this.cityData.length} résultat`;
        //this.result= true;
        this.error = "";
        this.$emit('cityResult', this.cityData);
      })
      .catch((error) => {
        console.log(error);
      });
    },

    cityList(){
      axios
      .get(
        `https://geo.api.gouv.fr/communes?nom=${this.cityName}&fields=departement,region,population,codesPostaux&boost=population`
      )
      .then((response) => {
        console.log(response.data)
        this.cityData = response.data;
        console.log(response.data.length);
        //this.showResults = this.cityData.length > 1 ? `${this.cityData.length} résultats` :  `${this.cityData.length} résultat`;
        //this.result= true;
        this.error = "";
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
      IonTitle,
     
  }  
}
</script>