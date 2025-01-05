import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { singletonTools } from 'sanity-plugin-singleton-tools';
import {
  singletonDocumentListItem,
  singletonDocumentListItems,
  filteredDocumentListItems,
} from 'sanity-plugin-singleton-tools';
import { PlugIcon } from '@sanity/icons';



export default defineConfig({
  name: 'default',
  title: 'But-MMI-Project',

  projectId: 'x444gzag',
  dataset: 'production',

  plugins: [singletonTools(), structureTool({
    structure: (S, context) =>
      S.list()
        .title('Sanity Love Content')
        .items([
          // Create a list item for each singleton document in your schema that links directly to a document view
          ...singletonDocumentListItems({ S, context }),
          // Create a list item for a specific singleton
          
          S.divider(),
          // Filter singleton documents out of the default S.documentTypeListItems() to prevent them from being rendered as lists or as duplicates
          ...filteredDocumentListItems({ S, context }),
        ])
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})