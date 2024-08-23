import { createBucketClient } from '@cosmicjs/sdk'
import axios from 'axios';

const cosmic = createBucketClient({
  bucketSlug: import.meta.env.BUCKET_SLUG,
  readKey: import.meta.env.BUCKET_READ_KEY
})

export async function getAllPosts() {
  const data = await cosmic.objects
    .find({
      type: 'posts'
    })
    .props('title,slug,metadata,created_at').sort('-created_at').depth(2)
  return data.objects
}
export async function getAllCases() {
  const data = await cosmic.objects
    .find({
      type: 'cases'
    })
    .props('title,slug,metadata,created_at').sort('-created_at').depth(2)
  return data.objects
}

export async function searchContent(query) {
  if (!query) {
    return { posts: [], cases: [] };
  }

  const regex = new RegExp(query, 'i'); // Cria uma expressão regular para busca case-insensitive

  const posts = await cosmic.objects
    .find({
      type: 'posts',
      'metadata.title': { $regex: regex } // Aplica o filtro de busca
    })
    .props('title,slug,metadata,created_at')
    .sort('-created_at')
    .depth(2);

  const cases = await cosmic.objects
    .find({
      type: 'cases',
      'metadata.title': { $regex: regex } // Aplica o filtro de busca
    })
    .props('title,slug,metadata,created_at')
    .sort('-created_at')
    .depth(2);

  return {
    posts: posts.objects || [],
    cases: cases.objects || []
  };
}