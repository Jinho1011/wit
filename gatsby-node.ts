import type { GatsbyNode } from 'gatsby';
import path from 'path';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@/components': path.resolve(__dirname, `./src/components`),
        '@/styles': path.resolve(__dirname, `./src/styles`),
        '@/Icons': path.resolve(__dirname, `./src/Icons`),
        '@/static': path.resolve(__dirname, `./static`),
      },
    },
  });
};
