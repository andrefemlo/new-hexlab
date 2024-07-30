import { createBucketClient } from '@cosmicjs/sdk'

const cosmic = createBucketClient({
  bucketSlug: import.meta.env.BUCKET_SLUG,
  readKey: import.meta.env.BUCKET_READ_KEY
})

export async function getAllPosts() {
  const data = await cosmic.objects
    .find({
      type: 'posts'
    })
    .props('title,slug,metadata.cover_image,created_at')
  return data.objects
}