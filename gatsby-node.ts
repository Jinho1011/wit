import type { GatsbyNode } from 'gatsby';
import path from 'path';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@/components': path.resolve(__dirname, `./src/components`),
        '@/assets/styles': path.resolve(__dirname, `./src/assets/styles`),
        '@/assets/Icons': path.resolve(__dirname, `./src/assets/Icons`),
        '@/static': path.resolve(__dirname, `./static`),
      },
    },
  });
};
