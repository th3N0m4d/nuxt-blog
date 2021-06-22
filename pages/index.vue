<template lang="pug">
// Main Content
.container.px-4.px-lg-5
  .row.gx-4.gx-lg-5.justify-content-center
    .col-md-10.col-lg-8.col-xl-7
      // Post preview
      AppPostPreview(
        v-for='post in posts',
        :key='post.slug',
        :id='post.slug',
        :title='post.title',
        :subTitle='post.subTitle',
        :createdAt='post.createdAt',
        :authorName='post.author'
      )

      // Pager
      .d-flex.justify-content-end.mb-4
        a.btn.btn-primary.text-uppercase(href='#!') Older Posts →
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('posts').sortBy('createdAt').fetch()

    return { posts }
  },
  head() {
    return {
      title: 'Home',
    }
  },
}
</script>
