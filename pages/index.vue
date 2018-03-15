<template>
  <section class="container">
    <div class="content-wrapper">
      <h1 class="title">
        Mickey Stanley
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  transition: 'fade',
  mounted: function () {
    this.$router.push('/print')
  },
  head () {
    return {
      title: 'Mickey Stanley',
      meta: [
        { hid: 'description', name: 'description', content: 'content by Mickey Stanley.' }
      ]
    }
  }
}
</script>

<style scoped>
.bio {
  max-width: 600px;
}

img {
  max-width: 75%;
}

.content-wrapper {
  flex-direction: column;
}
</style>
