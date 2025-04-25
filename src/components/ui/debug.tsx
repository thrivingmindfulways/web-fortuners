'use client'

import { useEffect, useState } from 'react'
import { env } from '@/lib/env' // Import the safe env helper

export default function DebugInfo() {
  const [info, setInfo] = useState({
    pathname: '',
    basePath: '',
    hostname: '',
    errors: [] as string[]
  })

  useEffect(() => {
    try {
      // Safe client-side environment detection
      const isProduction = window.location.hostname === 'thrivingmindfulways.github.io'
      
      setInfo({
        pathname: window.location.pathname,
        basePath: isProduction ? '/web-fortuners' : '',
        hostname: window.location.hostname,
        errors: []
      })
    } catch (error) {
      setInfo(prev => ({
        ...prev,
        errors: [...prev.errors, error instanceof Error ? error.message : String(error)]
      }))
    }
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/80 text-white p-4 text-xs z-50">
      <h3 className="font-bold mb-2">Debug Info:</h3>
      <div>Pathname: {info.pathname}</div>
      <div>BasePath: {info.basePath}</div>
      <div>Hostname: {info.hostname}</div>
      {info.errors.length > 0 && (
        <div>
          <h4 className="font-bold mt-2">Errors:</h4>
          <ul>
            {info.errors.map((error, i) => (
              <li key={i} className="text-red-400">{error}</li>
            ))}</ul>
        </div>
      )}
    </div>
  )
}