import React from 'react'
import BottomNav from '../shared/components/BottomNav'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-slate-950 text-slate-100">
      <main className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        <Outlet />
      </main>

      <div className="h-[9dvh] min-h-16 max-h-24 shrink-0 border-t border-slate-800 bg-slate-900 pb-[env(safe-area-inset-bottom)]">
        <BottomNav />
      </div>
    </div>
  )
}

export default AppLayout

