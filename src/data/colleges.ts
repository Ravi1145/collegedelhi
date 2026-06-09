/**
 * STATIC DATA REMOVED.
 * All college data is now fetched live from:
 *   https://college-delhi-backend.vercel.app/api/colleges?status=published
 *
 * Server-side: use getAllColleges() from @/lib/db
 * Client-side: fetch('/api/colleges')
 *
 * This file only exists to prevent import errors in files that have not yet
 * been migrated. It exports an empty array and stub functions.
 */

import type { College } from "@/types"

// Empty — all data comes from the backend API
export const colleges: College[] = []

export const getCollegeBySlug = (_slug: string): College | undefined => undefined

export const getCollegesByStream = (_stream: string): College[] => []

export const getFeaturedColleges = (): College[] => []

export const getTopEngineeringColleges = (): College[] => []

export const getTopMBAColleges = (): College[] => []

export const getTopMedicalColleges = (): College[] => []
