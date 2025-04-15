/**
 * Space Resource API - Resource Routes
 * Handles all endpoints related to space resources
 */

import express from 'express';
const router = express.Router();

// In-memory data store with sample resources
let resources = [
  {
    id: '1',
    name: 'Quantium',
    rarity: 'Rare',
    value: 5000,
    description: 'A highly unstable element used in quantum computing and FTL drives',
    origin: 'Neutron star remnants'
  },
  {
    id: '2',
    name: 'Stellarite',
    rarity: 'Uncommon',
    value: 2500,
    description: 'Crystallized stellar material with unique energy properties',
    origin: 'Asteroid belts near dying stars'
  },
  {
    id: '3',
    name: 'Voidstone',
    rarity: 'Legendary',
    value: 10000,
    description: 'A mysterious material that seems to absorb light and energy',
    origin: 'Deep space anomalies'
  },
  {
    id: '4',
    name: 'Lunarium',
    rarity: 'Common',
    value: 800,
    description: 'A lightweight metal ideal for spacecraft construction',
    origin: 'Moon-like satellites throughout the galaxy'
  }
];

// GET all resources
router.get('/', (req, res) => {
  res.json(resources);
});

// GET a specific resource by ID
router.get('/:id', (req, res) => {
  const resource = resources.find(r => r.id === req.params.id);
  
  if (!resource) {
    return res.status(404).json({ error: 'Resource not found' });
  }
  
  res.json(resource);
});

// POST a new resource
router.post('/', (req, res) => {
  const { name, rarity, value, description, origin } = req.body;
  
  // Basic validation
  if (!name || !rarity || !value) {
    return res.status(400).json({ error: 'Missing required fields (name, rarity, value)' });
  }
  
  // Create new resource
  const newResource = {
    id: (resources.length + 1).toString(),
    name,
    rarity,
    value: Number(value),
    description: description || '',
    origin: origin || 'Unknown'
  };
  
  resources.push(newResource);
  res.status(201).json(newResource);
});

// PUT (update) a resource
router.put('/:id', (req, res) => {
  const { name, rarity, value, description, origin } = req.body;
  const resourceIndex = resources.findIndex(r => r.id === req.params.id);
  
  if (resourceIndex === -1) {
    return res.status(404).json({ error: 'Resource not found' });
  }
  
  // Update resource with new values, keeping existing values if not provided
  resources[resourceIndex] = {
    ...resources[resourceIndex],
    name: name || resources[resourceIndex].name,
    rarity: rarity || resources[resourceIndex].rarity,
    value: value ? Number(value) : resources[resourceIndex].value,
    description: description !== undefined ? description : resources[resourceIndex].description,
    origin: origin !== undefined ? origin : resources[resourceIndex].origin
  };
  
  res.json(resources[resourceIndex]);
});

export default router;
