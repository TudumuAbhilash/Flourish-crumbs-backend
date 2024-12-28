// config/middlewares.js or config/plugins.js (depending on your Strapi version)
module.exports = {
    settings: {
      cors: {
        enabled: true,
        origin: ['http://localhost:5173'],  // Allow requests only from your frontend
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
        headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'], // Allow specific headers
      },
    },
  };
  