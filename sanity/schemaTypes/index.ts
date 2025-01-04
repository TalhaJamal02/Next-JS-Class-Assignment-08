import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { comment } from './comment'
import { tag } from './tag'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, comment, tag],

}
