import { defineConfig, Plugin } from 'vite';

// Plugin to add trailing slash redirects for clean URLs
function trailingSlashPlugin(): Plugin {
  return {
    name: 'trailing-slash',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';
        // If URL doesn't have trailing slash or extension, redirect to add slash
        if (url === '/petition') {
          res.writeHead(301, { Location: '/petition/' });
          res.end();
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [trailingSlashPlugin()],
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        petition: 'petition/index.html',
      },
    },
  },
});
