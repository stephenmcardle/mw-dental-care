import { useEffect } from 'react'

const SITE_NAME = 'MW Dental Care'

/**
 * Sets document.title on mount and whenever pageTitle changes.
 *
 * - No argument → "MW Dental Care | Professional Dental Services"
 * - With argument → "{pageTitle} | MW Dental Care"
 */
export function usePageTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = pageTitle
      ? `${pageTitle} | ${SITE_NAME}`
      : `${SITE_NAME} | Family & Cosmetic Dentistry in Easton, PA`
  }, [pageTitle])
}
