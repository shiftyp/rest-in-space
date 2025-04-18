/**
 * Space Resource API - Main Application
 * A simple Express API for managing fictional space resources
 */

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current file path (ES modules don't have __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load OpenAPI spec
const swaggerDocument = YAML.load(join(__dirname, '../docs/openapi.yaml'));

// Initialize Express app
const app = express();

// API Documentation
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'Space Resource API Documentation'
}));

export default app