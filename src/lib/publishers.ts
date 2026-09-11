/**
 * Data-access helpers for publisher records.
 *
 * These build-time queries read the local SQLite database and return typed
 * publisher data for Astro pages and components without any client-side state.
 */

import { asc } from 'drizzle-orm';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';
import type { Database } from './db';

/**
 * Retrieves all publishers sorted alphabetically by name.
 *
 * @param db - The shared Drizzle database instance used for the query.
 * @returns A list of publishers ordered by name in ascending order.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}
