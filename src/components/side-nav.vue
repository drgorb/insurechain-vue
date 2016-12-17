<template>
  <md-sidenav class="main-sidebar md-left md-fixed" ref="main-sidebar">
    <md-toolbar class="vue-material-logo" v-md-theme="'white'">
      <router-link exact to="/">
        <img :src="logo" alt="insure-chain">
        <p>insure-chain</p>
      </router-link>
    </md-toolbar>

    <div class="main-sidebar-links">
      <md-list class="md-dense">
        <md-list-item class="md-inset">
          <router-link to="/bar"><p>titi tata</p></router-link>
        </md-list-item>

      </md-list>
    </div>
  </md-sidenav>
</template>

<script>
  export default {
    data: function () {
      return {
        toolbar: true,
        theme: 'default',
        pageTitle: ''
      }
    },
    computed: {
      logo () {
        return 'static/assets/logo-' + this.theme + '.png'
      }
    },
    methods: {
      toggleSidenav () {
        this.$refs['main-sidebar'].toggle()
      },
      closeSidenav () {
        this.$refs['main-sidebar'].close()
      }
    }
  }
</script>

<style lang="scss">
  @import '../stylesheets/variables.scss';

  $sizebar-size: 280px;

  html,
  body {
    height: 100%;
  }

  body {
    display: flex;
  }

  .container {
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    transition: $swift-ease-out;

    @media (min-width: 1281px) {
      padding-left: $sizebar-size;
    }
  }

  .main-sidebar.md-sidenav {
    .md-sidenav-content {
      width: $sizebar-size;
      display: flex;
      flex-flow: column;

      @media (min-width: 1281px) {
        top: 0;
        pointer-events: auto;
        transform: translate3d(0, 0, 0);
        box-shadow: $material-shadow-2dp;
      }
    }

    .md-backdrop {
      @media (min-width: 1281px) {
        opacity: 0;
        pointer-events: none;
      }
    }

    .md-toolbar {
      min-height: 172px;
      border-bottom: 1px solid rgba(#000, .12);
    }

    .vue-material-logo {
      font-size: 24px;

      a {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        color: inherit;
        text-decoration: none;
      }

      img {
        width: 160px;
        margin-bottom: 16px;
      }
    }

    .main-sidebar-links {
      overflow: auto;

      .md-inset .md-list-item-container {
        padding-left: 36px;
      }

      .md-list-item-container {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }

  .main-content {
    padding: 16px;
    flex: 1;
    overflow: auto;
    transform: translate3D(0, 0, 0);
  }

  .md-router-enter-active,
  .md-router-leave-active {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    transition: $swift-ease-out;

    @media (min-width: 1281px) {
      left: 280px;
    }
  }

  .md-router-enter,
  .md-router-leave-active {
    opacity: 0;
  }

  code {
    &:not(.hljs) {
      margin-left: 1px;
      margin-right: 1px;
      padding: 0 4px;
      display: inline-block;
      border-radius: 2px;
      font-family: "Operator Mono", "Fira Code", Menlo, Hack, "Roboto Mono", "Liberation Mono", Monaco, monospace;

      pre {
        margin: 8px 0;
      }
    }
  }
</style>
