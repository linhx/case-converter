<template>
  <div id="app">
    <i-header />
    <div class="container">
      <case-converter-view />
    </div>
  </div>
</template>

<script>
import 'materialize-css/dist/css/materialize.min.css'
import '@/assets/helpers.css'
import {
  IHeader
} from '@/components/organisms'
import {
  CaseConverterView
} from '@/components/templates'

export default {
  name: 'app',
  components: {
    IHeader,
    CaseConverterView
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
