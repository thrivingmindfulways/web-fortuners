'use client'

import { useEffect, useState } from 'react'

export default function DebugInfo() {
  const [info, setInfo] = useState({
    pathname: '',
    basePath: '',
    environment: '',
    errors: [] as string[]
  })

  useEffect(() => {
    try {
      setInfo({
        pathname: window.location.pathname,
        basePath: process.env.NODE_ENV === 'production' ? '/web-fortuners' : '',
        environment: process.env.NODE_ENV || 'unknown',
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
      <div>Environment: {info.environment}</div>
      {info.errors.length > 0 && (
        <div>
          <h4 className="font-bold mt-2">Errors:</h4>
          <ul>
            {info.errors.map((error, i) => (
              <li key={i} className="text-red-400">{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}