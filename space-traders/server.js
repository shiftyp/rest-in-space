/**
 * Space Resource API - Server
 * Entry point for the application
 */

import app from './src/app.js';

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`✨ Space Resource API server running on port ${PORT}`);
  console.log(`🚀 Visit http://localhost:${PORT} to explore the API`);
});
