<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Régions</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Régions</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card color="danger" v-if="error.length > 0">
        <ion-title size="large">{{error}}</ion-title>
        </ion-card>
      <ion-card >
      <ion-item position="fixed">Régions</ion-item>
      <ion-select v-model="areaName">
            <ion-select-option v-for="region in regions" :key="region" :value="region.code">
                {{region.code}} - {{region.nom}}
            </ion-select-option>
      </ion-select>
      <ion-button expand="full" shape="round" @click.prevent="DepartList" type="submit">Search</ion-button>
    </ion-card>
    <ion-badge color="success" v-if="result">{{cityLength}}</ion-badge>
    <ion-card v-for="data in department" :key="data">
      <ion-list>
     <ion-item>
      <ion-label >Nom: {{data.nom}}</ion-label>
    </ion-item>      
    <ion-item>
      <ion-label>Département: {{data.code}}</ion-label>
    </ion-item>
  </ion-list>
    </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonSelect, IonSelectOption, IonButton,  IonBadge , IonLabel, IonList } from '@ionic/vue';
import axios from 'axios';

export default  {
  name: 'Area',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonItem, IonSelect, IonSelectOption, IonButton ,  IonBadge, IonLabel, IonList},

  data(){
    return{
      regions:"",
      areaName: null,
      department:"",
      error:"",
      result: false,
    }
  },
  methods:{
    
   AreaList(){
      axios
      .get(
        `https://geo.api.gouv.fr/regions`
      )
      .then((response) => {
        console.log(response.data);
        this.regions = response.data;
        this.cityLength = this.regions.length > 1 ? this.succes = `${this.regions.length} résultats` : this.succes = `${this.regions.length} résultat`
      })
      .catch((error) => {
        console.log(error);
      });
    },

    DepartList(){
      if(!this.areaName){
          this.error = "Veuillez choisir une région"
          console.log(this.error);
        }
        else{
          this.error = "";
          axios
      .get(
        `https://geo.api.gouv.fr/regions/${this.areaName}/departements`
      )
      .then((response) => {
        console.log(response.data);
        this.department = response.data;
        this.cityLength = this.department.length > 1 ? this.succes = `${this.department.length} résultats` : this.succes = `${this.department.length} résultat`
        this.result = true;
      })
      .catch((error) => {
        console.log(error);
      });
        }
      
    },

  },
  mounted(){
    this.AreaList();
  }
}

</script>