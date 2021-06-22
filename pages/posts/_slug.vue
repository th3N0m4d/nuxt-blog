<template lang="pug">
// Post Content
article.mb-4
  .container.px-4.px-lg-5
    .row.gx-4.gx-lg-5.justify-content-center
      .col-md-10.col-lg-8.col-xl-7
        NuxtContent(:document='post')
        Disqus
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()

    return { post }
  },
  head() {
    return {
      title: 'Blog post',
    }
  },
}
</script>

<style>
.nuxt-content img {
  max-width: 100%;
  height: auto;
}
</style>
