<template>
  <section class="container" v-bind:class="pageTitle">
    <h1 class="title">Mickey Stanley<span>| {{pageTitle}} |</span></h1>
      <div>
        <transition-group
          tag="div"
          name="list"
          class="content-wrapper"
          :css="false"
          @enter="enter"
          @before-enter="beforeEnter"
          @leave="leave"
        >
          <WrittenItem v-for="(item, index) in items" :item="item" :key="item.uri" :data-index="index" v-if="loaded"></WrittenItem>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script>
import WrittenItem from '~/components/WrittenItem.vue'
export default {
  data: () => ({
    loaded: false
  }),
  components: {
    WrittenItem
  },
  computed: {
    items () {
      return this.$store.state[this.$route.params.type]
    },
    isCV () {
      return this.$route.params.type === 'cv'
    },
    pageTitle () {
      return this.$route.params.type
    },
    capitlizedTitle () {
      return this.$route.params.type.charAt(0).toUpperCase() + this.$route.params.type.slice(1)
    }
  },
  transition: 'fade',
  methods: {
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        el.style.opacity = 1
        el.style.height = 'auto'
      }, delay)
      done()
    },
    leave (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        el.style.opacity = 0
        el.style.height = 0
      }, delay)
      done()
    },
    capitalize (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  },
  mounted: function () {
    this.$data.loaded = true
  },
  destroyed: function () {
    this.$data.loaded = false
  },
  head () {
    return {
      title: 'Mickey Stanley | ' + this.capitlizedTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.capitlizedTitle + ' content by Mickey Stanley.' }
      ]
    }
  }
}
</script>

<style>

</style>
