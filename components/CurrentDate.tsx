'use client'

export default function CurrentDate() {
  const formattedDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  })

  return formattedDate
}