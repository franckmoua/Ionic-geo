<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Communes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Communes</ion-title>
        </ion-toolbar>
      </ion-header>
      
     <TownComponent @cityResult="getValue" ></TownComponent>
      <ion-card v-for="city in cities" :key="city">
        <ion-list>
     <ion-item>
      <ion-label>Nom: {{city.nom}}</ion-label>
    </ion-item>      
    <ion-item>
      <ion-label>Code INSEE: {{city.code}}</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Codes postaux: {{city.codesPostaux.join(', ')}}</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Département: {{city.departement.code}}</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Population: {{city.population}}</ion-label>
    </ion-item>
  </ion-list>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonItem, IonCard } from '@ionic/vue';
import TownComponent from '@/components/Town.vue';

export default  {
  name: 'Town',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, TownComponent, IonList, IonLabel, IonCard, IonItem },

  data(){
    return{
      cities:"",
    }
  },
  methods:{
     getValue(data){
      this.cities = data
    },
  }
}
</script>