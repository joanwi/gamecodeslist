'use client'

export default async function CurrentDate() {
  const formattedDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  })

  return formattedDate
}