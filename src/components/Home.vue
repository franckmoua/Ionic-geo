<template>
  <div id="container">
    <strong>{{ name }}</strong>
    
  </div>
</template>

<script >

export default {
  name: 'Department',
  props: {
    name: String
  }
}
</script>