'use client';

import { useEffect, useState } from 'react';
import { type HealthStatus } from '@team-ai/types';

export default function Home() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHealth() {
      try {
        const response = await fetch('/api/health');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setHealth(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch health status');
      }
    }

    fetchHealth();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-md flex-col items-center gap-8 rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">API Health Status</h1>
        
        {error ? (
          <div className="w-full rounded-lg bg-red-50 p-4 text-red-700 dark:bg-red-900/30 dark:text-red-400">
            <p className="font-semibold">Error:</p>
            <p className="text-sm">{error}</p>
          </div>
        ) : health ? (
          <div className="flex w-full flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-zinc-600 dark:text-zinc-400">Status:</span>
              <span className={`rounded-full px-3 py-1 text-sm font-medium ${
                health.status === 'ok' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                  : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
              }`}>
                {health.status.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-600 dark:text-zinc-400">Service:</span>
              <span className="font-mono text-zinc-900 dark:text-white">{health.service}</span>
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <span className="text-zinc-600 dark:text-zinc-400">Timestamp:</span>
              <span className="font-mono text-zinc-900 dark:text-white">{new Date(health.timestamp).toLocaleString()}</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span>Checking connectivity...</span>
          </div>
        )}

        <div className="text-xs text-zinc-400 dark:text-zinc-500">
          Proxy: /api/health → http://localhost:3001/health
        </div>
      </main>
    </div>
  );
}
