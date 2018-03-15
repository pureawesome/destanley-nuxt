<template>
  <nav>
    <div class="links nav navbar-nav">
      <span>
        <nuxt-link :to="'/'">Mickey Stanley</nuxt-link>
      </span>
      <span v-for="type in types">
        <nuxt-link :to="{path: type.uri}">{{type.name}}</nuxt-link>
      </span>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  fetch ({ store }) {
    store.commit('types')
  },
  computed: mapState([
    'types'
  ])
}
</script>

<style>
nav {
  float: left;
  padding: 5px 15px;
}

span {
  display: block;
  padding-right: 15px;
  padding-bottom: 10px;
}

a {
  text-decoration: none;
  color: #35495e;
  color: #212226;
  color: #3E3F40;
}

a:hover,
a.nuxt-link-active {
  color: #000;
}
</style>
