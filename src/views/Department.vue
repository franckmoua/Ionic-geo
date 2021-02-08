<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Départements</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Départements</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card color="danger" v-if="error.length > 0">
        <ion-title size="large">{{error}}</ion-title>
        </ion-card>
      <ion-card >
      <ion-item position="fixed">Départements</ion-item>
      <ion-select v-model="departName">
            <ion-select-option v-for="department in departments" :key="department" :value="department.code">
                {{department.code}} - {{department.nom}}
            </ion-select-option>
      </ion-select>
      <ion-button expand="full" shape="round" @click.prevent="TownList" type="submit">Search</ion-button>
    </ion-card>
    <ion-badge text-center color="success" v-if="result">{{cityLength}}</ion-badge>
    <ion-card v-for="data in town" :key="data">
      <ion-list>
     <ion-item>
      <ion-label >Nom: {{data.nom}}</ion-label>
    </ion-item>      
    <ion-item>
      <ion-label>Code INSEE: {{data.code}}</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Codes postal: {{data.codesPostaux.join(', ')}}</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Population: {{data.population}}</ion-label>
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
  name: 'Department',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonItem, IonSelect, IonSelectOption, IonButton ,  IonBadge, IonLabel, IonList},

  data(){
    return{
      departments:"",
      departName: null,
      town:"",
      error:"",
      result: false,
    }
  },
  methods:{
    
   DepartList(){
      axios
      .get(
        `https://geo.api.gouv.fr/departements`
      )
      .then((response) => {
        console.log(response.data);
        this.departments = response.data;
        this.cityLength = this.departments.length > 1 ? this.succes = `${this.departments.length} résultats` : this.succes = `${this.departments.length} résultat`
      })
      .catch((error) => {
        console.log(error);
      });
    },

    TownList(){
      if(!this.departName){
          this.error = "Veuillez choisir un département"
          console.log(this.error);
        }
        else{
          this.error = "";
          axios
      .get(
        `https://geo.api.gouv.fr/departements/${this.departName}/communes`
      )
      .then((response) => {
        console.log(response.data);
        this.town = response.data;
        this.cityLength = this.town.length > 1 ? this.succes = `${this.town.length} résultats` : this.succes = `${this.town.length} résultat`
        this.result = true;
      })
      .catch((error) => {
        console.log(error);
      });
        }
      
    },

  },
  mounted(){
    this.DepartList();
  }
}

</script>