<template lang="pug">
div
  .post-preview
    NuxtLink(:to='`/posts/${id}`')
      h2.post-title
        | {{ title }}
      h3.post-subtitle
        | {{ subTitle }}
    p.post-meta
      | Posted by&nbsp;
      NuxtLink(to='#!') {{ authorName }}&nbsp;
      | on {{ createdAt | date(DateFormat.FullMonthDayYear) }}
  // Divider
  hr.my-4
</template>

<script>
import dayjs from 'dayjs'
import { DateFormat } from '@@/utils'

export default {
  // TODO: Register filter globally
  filters: {
    date(value, format) {
      return dayjs(value).format(format)
    },
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      default: '',
    },
    authorName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      DateFormat,
    }
  },
}
</script>
