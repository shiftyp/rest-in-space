/**
 * Space Resource API - Main Application
 * A simple Express API for managing fictional space resources
 */

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import resourceRoutes from './routes/resources.js';

// Get current file path (ES modules don't have __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load OpenAPI spec
const swaggerDocument = YAML.load(join(__dirname, '../docs/openapi.yaml'));

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/resources', resourceRoutes);

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'Space Resource API Documentation'
}));

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Space Resource API',
    endpoints: {
      // An Example of HATEOAS
      resources: '/api/resources',
      documentation: '/api-docs'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Resource not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error', message: err.message });
});

export default app;
