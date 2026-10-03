'use client'

import { useState } from 'react'
import {
  Bell,
  ChevronRight,
  CircleDollarSign,
  Filter,
  SlidersHorizontal,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'

const groups = [
  {
    name: '3BHK Flatmates',
    updated: 'Last updated today',
    status: 'You owe ₹300',
    tone: 'debt',
    members: [
      { initials: 'RS', color: 'bg-rose-400' },
      { initials: 'AK', color: 'bg-amber-400' },
      { initials: 'MS', color: 'bg-emerald-400' },
      { initials: '+2', color: 'bg-slate-700' },
    ],
  },
  {
    name: 'Goa Trip 2026',
    updated: 'Last updated yesterday',
    status: 'Rohit owes you ₹1,500',
    tone: 'credit',
    members: [
      { initials: 'RK', color: 'bg-orange-400' },
      { initials: 'PJ', color: 'bg-sky-400' },
      { initials: 'NS', color: 'bg-violet-400' },
    ],
  },
  {
    name: 'Friday Pizza Night',
    updated: 'Settled up',
    status: 'Settled',
    tone: 'settled',
    members: [
      { initials: 'AV', color: 'bg-pink-400' },
      { initials: 'SK', color: 'bg-lime-400' },
      { initials: 'RM', color: 'bg-blue-400' },
    ],
  },
  {
    name: 'Friday Pizza Night',
    updated: 'Settled up',
    status: 'Settled',
    tone: 'settled',
    members: [
      { initials: 'AV', color: 'bg-pink-400' },
      { initials: 'SK', color: 'bg-lime-400' },
      { initials: 'RM', color: 'bg-blue-400' },
    ],
  },
  {
    name: 'Friday Pizza Night',
    updated: 'Settled up',
    status: 'Settled',
    tone: 'settled',
    members: [
      { initials: 'AV', color: 'bg-pink-400' },
      { initials: 'SK', color: 'bg-lime-400' },
      { initials: 'RM', color: 'bg-blue-400' },
    ],
  },
]

function Avatar({ initials, color, className = '' }) {
  return (
    <span className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0D1F1D] text-[10px] font-bold text-slate-950 ${color} ${className}`}>
      {initials}
    </span>
  )
}

function BalanceCard({ label, amount, tone, direction }) {
  const isCredit = tone === 'credit'
  return (
    <div className="relative flex min-h-[132px] flex-1 flex-col justify-between overflow-hidden rounded-[22px] border border-slate-700/60 bg-slate-900/75 p-4 shadow-[0_14px_30px_rgba(2,6,23,0.16)]">
      <div className={`absolute -right-7 -top-7 h-20 w-20 rounded-full blur-2xl ${isCredit ? 'bg-emerald-500/10' : 'bg-rose-500/10'}`} />
      <div className="relative flex items-center justify-between">
        <span className="text-[10px] font-semibold tracking-[0.14em] text-slate-500">{label}</span>
        {direction === 'up' ? <TrendingUp size={15} className="text-emerald-400" /> : <TrendingDown size={15} className="text-rose-400" />}
      </div>
      <p className={`relative text-[25px] font-semibold tracking-tight ${isCredit ? 'text-emerald-300' : 'text-rose-300'}`}>{amount}</p>
      <span className="relative text-[11px] text-slate-500">This month</span>
    </div>
  )
}

export default function HomePage() {
  const [filterOpen, setFilterOpen] = useState(true)

  return (
    <main className="h-full min-h-0 bg-[#0F172A] text-slate-100 sm:flex sm:justify-center sm:px-0">
      <div className="relative flex h-full min-h-0 w-full max-w-[480px] flex-col overflow-hidden border border-slate-800/70 bg-[#020617] shadow-2xl shadow-black/30">
        <div className="pointer-events-none absolute -left-28 top-20 h-64 w-64 rounded-full bg-emerald-500/[0.035] blur-3xl" />
        <div className="relative min-h-0 flex-1 overflow-y-auto px-5 pb-5">
          <header className="flex items-center justify-between pb-7 pt-7">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D97706] text-sm font-bold text-[#0D1F1D]">R</div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0D1F1D] bg-emerald-400" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-slate-500">Good evening,</p>
                <h1 className="text-[17px] font-semibold tracking-tight text-slate-100">Rahul</h1>
              </div>
            </div>
            <button aria-label="Notifications" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/55 text-slate-300 transition hover:border-slate-500 hover:text-white">
              <Bell size={18} strokeWidth={1.8} />
              <span className="absolute mr-[-16px] mt-[-17px] h-1.5 w-1.5 rounded-full bg-amber-400" />
            </button>
          </header>

          <section aria-labelledby="balance-heading">
            <div className="mb-3 flex items-end justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">Your balance</p>
                <h2 id="balance-heading" className="mt-1 text-xl font-semibold tracking-tight">All settled, almost.</h2>
              </div>
              <CircleDollarSign size={20} className="mb-1 text-amber-500/80" />
            </div>
            <div className="flex gap-3">
              <BalanceCard label="YOU ARE OWED" amount="₹2,400" tone="credit" direction="up" />
              <BalanceCard label="YOU OWE" amount="₹800" tone="debt" direction="down" />
            </div>
          </section>

          <section className="mt-8" aria-labelledby="groups-heading">
            <div className="mb-4 flex items-center justify-between">
              <h2 id="groups-heading" className="text-lg font-semibold tracking-tight">Your Groups</h2>
              <button onClick={() => setFilterOpen((open) => !open)} aria-label="Filter groups" aria-expanded={filterOpen} className={`flex h-9 w-9 items-center justify-center rounded-xl border transition ${filterOpen ? 'border-amber-500/60 bg-amber-500/10 text-amber-300' : 'border-slate-700/70 bg-slate-900/60 text-slate-400 hover:text-slate-100'}`}>
                <SlidersHorizontal size={16} />
              </button>
            </div>
            {filterOpen && <div className="mb-3 flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-3 py-2 text-xs text-amber-200"><Filter size={13} /> Showing all groups</div>}
            <div className="space-y-3">
              {groups.map((group) => (
                <button key={group.name} className="group flex w-full items-center gap-3 rounded-[20px] border border-slate-800/80 bg-slate-900/70 p-4 text-left transition hover:border-slate-700 hover:bg-slate-900">
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="truncate text-[15px] font-semibold text-slate-100">{group.name}</h3>
                        <p className="mt-1 text-[11px] text-slate-500">{group.updated}</p>
                      </div>
                      <ChevronRight size={17} className="mt-0.5 shrink-0 text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-slate-300" />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex pl-1">{group.members.map((member, index) => <Avatar key={`${group.name}-${member.initials}`} {...member} className={index > 0 ? '-ml-2' : ''} />)}</div>
                      <span className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${group.tone === 'debt' ? 'bg-rose-500/10 text-rose-300' : group.tone === 'credit' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-slate-800 text-slate-400'}`}>{group.status}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

