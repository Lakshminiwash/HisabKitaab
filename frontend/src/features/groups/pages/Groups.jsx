'use client'

import { useState } from 'react'
import {
  ArrowLeft,
  Check,
  ChevronRight,
  CirclePlus,
  Home,
  IndianRupee,
  Plus,
  Search,
  Users,
  X,
} from 'lucide-react'

const groups = [
  { id: 1, name: '3BHK Flatmates', members: ['R', 'V', 'A', 'N'], status: 'You owe ₹300', tone: 'debt', detail: 'WiFi Bill', total: '₹8,500' },
  { id: 2, name: 'Goa Trip 2026', members: ['R', 'V', 'A'], status: 'Rohit owes you ₹1,500', tone: 'positive', detail: 'Dinner at Thalassa', total: '₹18,400' },
  { id: 3, name: 'Friday Pizza Night', members: ['R', 'V'], status: 'Settled Up', tone: 'settled', detail: 'Pizza order', total: '₹2,400' },
]

const expenses = [
  { id: 1, title: 'WiFi Bill', meta: 'Paid by Rohit', amount: '₹1,000', date: '28 Sep', color: 'bg-amber-500/15 text-amber-300' },
  { id: 2, title: 'Kirana groceries', meta: 'Paid by Vicky', amount: '₹2,500', date: '26 Sep', color: 'bg-emerald-500/15 text-emerald-300' },
  { id: 3, title: 'House cleaning', meta: 'Paid by You', amount: '₹1,200', date: '24 Sep', color: 'bg-rose-500/15 text-rose-300' },
]

function Avatar({ letter, index }) {
  const colors = ['bg-rose-500/25 text-rose-200', 'bg-emerald-500/25 text-emerald-200', 'bg-amber-500/25 text-amber-200', 'bg-slate-600 text-slate-200']
  return <span className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0F172A] text-[10px] font-bold ${colors[index % colors.length]}`}>{letter}</span>
}

export default function Groups() {
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [query, setQuery] = useState('')
  const visibleGroups = groups.filter((group) => group.name.toLowerCase().includes(query.toLowerCase()))

  const handleInvite = (e, groupName) => {
    // Stop the event from bubbling up to the group card click handler
    e.stopPropagation()
    alert(`Invite link generated for ${groupName}!`)
  }

  return (
    <main className="h-full min-h-dvh bg-[#0F172A] text-slate-100 sm:flex sm:justify-center sm:px-0">
      <div className="relative flex h-full min-h-dvh w-full max-w-[480px] flex-col overflow-hidden border border-slate-800/70 bg-[#020617] shadow-2xl shadow-black/30">
        <div className="pointer-events-none absolute -left-28 top-20 h-64 w-64 rounded-full bg-emerald-500/[0.035] blur-3xl" />

        {!selectedGroup ? (
          <>
            <header className="px-5 pb-4 pt-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-500">HisabKitaab</p>
                  <h1 className="mt-1 text-[28px] font-semibold tracking-tight">All Groups</h1>
                </div>
              </div>
              <div className="mt-5 flex gap-2">
                <label className="flex flex-1 items-center gap-2 rounded-xl border border-slate-800 bg-[#0F172A] px-3">
                  <Search size={16} className="text-slate-500" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search groups"
                    className="w-full bg-transparent py-3 text-[12px] outline-none placeholder:text-slate-600"
                  />
                </label>
                <button className="flex items-center gap-1 rounded-xl bg-[#D97706] px-3 text-[11px] font-semibold text-white">
                  search
                </button>
              </div>
            </header>

            <section className="min-h-0 flex-1 space-y-3 overflow-y-auto px-5 py-3">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Your groups</p>
                <span className="text-[10px] text-slate-600">{visibleGroups.length} active</span>
              </div>

              {visibleGroups.map((group) => (
                <div
                  key={group.id}
                  onClick={() => setSelectedGroup(group)}
                  className="block w-full cursor-pointer rounded-2xl border border-slate-800 bg-[#0F172A] p-4 text-left transition hover:border-amber-500/40"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-amber-400">
                        <Users size={17} />
                      </span>
                      <div>
                        <h2 className="text-[14px] font-semibold">{group.name}</h2>
                        <p className="mt-0.5 text-[10px] text-slate-500">
                          {group.members.length} members · {group.detail}
                        </p>
                      </div>
                    </div>

                    {/* Invite Friend Button with Event Propagation Stopped */}
                    <button
                      type="button"
                      onClick={(e) => handleInvite(e, group.name)}
                      className="flex items-center gap-1 rounded-xl border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-300 transition hover:bg-amber-500 hover:text-slate-950 active:scale-95"
                    >
                      <span>invite friend</span>
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {group.members.map((member, index) => (
                        <Avatar key={`${member}-${index}`} letter={member} index={index} />
                      ))}
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                        group.tone === 'debt'
                          ? 'bg-rose-500/10 text-rose-300'
                          : group.tone === 'positive'
                          ? 'bg-emerald-500/10 text-emerald-300'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {group.status}
                    </span>
                  </div>
                </div>
              ))}
            </section>
          </>
        ) : (
          <>
            <header className="border-b border-slate-800 px-5 pb-5 pt-8">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedGroup(null)}
                  aria-label="Back to groups"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 text-slate-400"
                >
                  <ArrowLeft size={17} />
                </button>
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-amber-500">Group detail</p>
                  <h1 className="mt-1 text-[18px] font-semibold">{selectedGroup.name}</h1>
                </div>
                <button
                  aria-label="Close details"
                  onClick={() => setSelectedGroup(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 text-slate-500"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-600 to-rose-700 text-white shadow-lg">
                  <Home size={26} />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500">Shared household</p>
                  <div className="mt-2 flex -space-x-2">
                    {selectedGroup.members.map((member, index) => (
                      <Avatar key={`${member}-${index}`} letter={member} index={index} />
                    ))}
                  </div>
                </div>
              </div>
            </header>

            <section className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
              <div className="rounded-2xl border border-slate-800 bg-[#0F172A] p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Total spending</p>
                    <p className="mt-2 text-[25px] font-semibold">{selectedGroup.total}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Your net balance</p>
                    <p
                      className={`mt-2 text-[13px] font-semibold ${
                        selectedGroup.tone === 'debt' ? 'text-rose-400' : 'text-emerald-400'
                      }`}
                    >
                      {selectedGroup.status}
                    </p>
                  </div>
                </div>
                <div className="mt-4 h-1 rounded-full bg-slate-800">
                  <div
                    className={`h-1 rounded-full ${
                      selectedGroup.tone === 'debt' ? 'w-1/3 bg-rose-500' : 'w-3/4 bg-emerald-500'
                    }`}
                  />
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between">
                <h2 className="text-[13px] font-semibold">Expense history</h2>
                <span className="text-[10px] text-slate-500">This month</span>
              </div>

              <div className="mt-3 space-y-3">
                {expenses.map((expense) => (
                  <div key={expense.id} className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-[#0B1324] p-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${expense.color}`}>
                      <IndianRupee size={17} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12px] font-semibold">{expense.title}</p>
                      <p className="mt-1 text-[10px] text-slate-500">{expense.meta}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[12px] font-semibold">{expense.amount}</p>
                      <p className="mt-1 text-[9px] text-slate-600">{expense.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex gap-2 border-t border-slate-800 bg-[#0B1324] px-5 py-4">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#D97706] py-3 text-[11px] font-bold text-white">
                <CirclePlus size={15} /> Add Expense
              </button>
              <button className="flex-1 rounded-xl border border-emerald-500/40 bg-emerald-500/10 py-3 text-[11px] font-semibold text-emerald-300">
                <Check size={14} className="mr-1 inline" /> Settle Up
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  )
}