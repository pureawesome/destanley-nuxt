<template>
  <div class="item-wrapper">
    <a :href="item.link" class="item">
      <div class="title">
        {{item.title}}
      </div>
      <div class="img">
        <img :src="getAssetPic(item.image)" />
      </div>
      <div class="caption">
        {{item.publication}}
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    getAssetPic (name) {
      return require('~/assets/images/' + name)
    }
  }
}
</script>

<style scoped>
.title {
  font-weight: normal;
  font-size: 18px;
}

.item-wrapper {
  margin: 15px;
  max-width: 360px;
}

.caption {
  float: right;
}
</style>
