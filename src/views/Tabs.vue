<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="town" href="/tabs/town">
          <ion-icon :icon="homeOutline" />
          <ion-label>Communes</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="department" href="/tabs/department">
          <ion-icon :icon="businessOutline" />
          <ion-label>Départements</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="area" href="/tabs/area">
          <ion-icon :icon="locationOutline" />
          <ion-label>Régions</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle, locationOutline, businessOutline, homeOutline } from 'ionicons/icons';


export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
      locationOutline,
      businessOutline,
      homeOutline,
  
    }
  }
}
</script>