<template>
  <div class="item-wrapper">
    <div class="item">
      <div class="title">
        {{item.title}}
      </div>
      <div class="img">
        <iframe
          class="nylon-video-player"
          :src="item.link"
          frameborder="0"
          allowfullscreen="true"
          scrolling="no"
          >
        </iframe>
      </div>
      <div class="caption">
        {{item.publication}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped>
.title {
  font-weight: normal;
  font-size: 24px;
}

.item-wrapper {
  display: block;
  margin: 15px 0;
}

.caption {
  float: right;
}

.item-wrapper {
  width: 100%;
}

.img {
  padding-bottom: 56.25%;
  position: relative;
}

iframe {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
