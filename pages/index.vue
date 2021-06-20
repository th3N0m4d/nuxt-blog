<template lang="pug">
// Main Content
.container.px-4.px-lg-5
  .row.gx-4.gx-lg-5.justify-content-center
    .col-md-10.col-lg-8.col-xl-7
      // Post preview
      .post-preview
        NuxtLink(to='/post')
          h2.post-title
            | Man must explore, and this is exploration at its greatest
          h3.post-subtitle
            | Problems look mighty small from 150 miles up
        p.post-meta
          | Posted by
          a(href='#!') Start Bootstrap
          | on September 24, 2021

      // Divider
      hr.my-4

      // Post preview
      .post-preview
        NuxtLink(to='/post')
          h2.post-title
            | I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
        p.post-meta
          | Posted by
          a(href='#!') Start Bootstrap
          | on September 18, 2021

      // Divider
      hr.my-4

      // Post preview
      .post-preview
        NuxtLink(to='/post')
          h2.post-title
            | Science has not yet mastered prophecy
          h3.post-subtitle
            | We predict too much for the next year and yet far too little for the next ten.
        p.post-meta
          | Posted by
          a(href='#!') Start Bootstrap
          | on August 24, 2021

      // Divider
      hr.my-4

      // Post preview
      .post-preview
        NuxtLink(to='/post')
          h2.post-title
            | Failure is not an option
          h3.post-subtitle
            | Many say exploration is part of our destiny, but it’s actually our duty to future generations.
        p.post-meta
          | Posted by
          a(href='#!') Start Bootstrap
          | on July 8, 2021

      // Divider
      hr.my-4

      // Pager
      .d-flex.justify-content-end.mb-4
        a.btn.btn-primary.text-uppercase(href='#!') Older Posts →
</template>

<script>
export default {
  head() {
    return {
      title: 'Home',
    }
  },
}
</script>
