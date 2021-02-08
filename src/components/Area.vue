<template>
  <ion-toolbar>
    <ion-card>
      <ion-item position="fixed">Régions</ion-item>
      <ion-input>

      </ion-input>
    </ion-card>

    <ion-card color="light" class="ion-padding">
    <ion-card-content>
      <ion-title></ion-title>
    </ion-card-content>
  </ion-card>
  </ion-toolbar>
</template>

<script >

export default {
  name: 'Area',
  props: {
    name: String
  }
}
</script>