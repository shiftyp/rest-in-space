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

// TODO: GET all resources

// TODO: GET a specific resource by ID

// TODO: POST a new resource

// TODO: PUT (update) a resource

export default router;
