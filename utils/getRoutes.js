import { $content } from '@nuxt/content'

export default async () => {
  const files = await $content({ deep: true }).only(['path']).fetch()

  return files.map((file) => (file.path === '/index' ? '/' : file.path))
}
