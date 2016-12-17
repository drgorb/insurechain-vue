<template>
  <div id="app" class="container" v-md-theme="theme">
    <sideNav></sideNav>
    <div class="md-toolbar-container">
      <md-toolbar>
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>
  
        <h2 class="md-title" style="flex: 1">Default</h2>
  
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>
      </md-toolbar>
    </div>
  </div>
</template>

<script>
import sideNav from './components/side-nav'
import {default as insurechain} from './ethereum/insurechain.js'

export default {
  name: 'app',
  methods: {
    register () {
      insurechain.getInfo('123')
    }
  },
  data () {
    return {
      toolbar: true,
      theme: 'default'
    }
  },
  components: {
    sideNav
  }
}

</script>

<style>
.main-content {
  padding: 16px;
}
</style>
