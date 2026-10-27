'use client'

import { useEffect, useState } from 'react'
import { Bell, CircleDollarSign, Plus, Receipt, TrendingDown, TrendingUp, X } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const initialGroups = [
  {
    id: 'g1',
    name: '3BHK Flatmates',
    updated: 'Last updated today',
    status: 'You owe ₹300',
    tone: 'debt',
    members: [
      { name: 'Rahul', initials: 'RS', color: 'bg-rose-400' },
      { name: 'Amit', initials: 'AK', color: 'bg-amber-400' },
      { name: 'Mohit', initials: 'MS', color: 'bg-emerald-400' },
      { name: 'Plus2', initials: '+2', color: 'bg-slate-700' },
    ],
  },
  {
    id: 'g2',
    name: 'Goa Trip 2026',
    updated: 'Last updated yesterday',
    status: 'Rohit owes you ₹1,500',
    tone: 'credit',
    members: [
      { name: 'Rohit', initials: 'RK', color: 'bg-orange-400' },
      { name: 'Pooja', initials: 'PJ', color: 'bg-sky-400' },
      { name: 'Nikhil', initials: 'NS', color: 'bg-violet-400' },
    ],
  },
  {
    id: 'g3',
    name: 'Friday Pizza Night',
    updated: 'Settled up',
    status: 'Settled',
    tone: 'settled',
    members: [
      { name: 'Aman', initials: 'AV', color: 'bg-pink-400' },
      { name: 'Saurabh', initials: 'SK', color: 'bg-lime-400' },
      { name: 'Rohan', initials: 'RM', color: 'bg-blue-400' },
    ],
  },
  {
    id: 'g4',
    name: 'Friday Pizza Night',
    updated: 'Settled up',
    status: 'Settled',
    tone: 'settled',
    members: [
      { name: 'Aman', initials: 'AV', color: 'bg-pink-400' },
      { name: 'Saurabh', initials: 'SK', color: 'bg-lime-400' },
      { name: 'Rohan', initials: 'RM', color: 'bg-blue-400' },
    ],
  },
  {
    id: 'g5',
    name: 'Friday Pizza Night',
    updated: 'Settled up',
    status: 'Settled',
    tone: 'settled',
    members: [
      { name: 'Aman', initials: 'AV', color: 'bg-pink-400' },
      { name: 'Saurabh', initials: 'SK', color: 'bg-lime-400' },
      { name: 'Rohan', initials: 'RM', color: 'bg-blue-400' },
    ],
  },
]

const sampleNotifications = [
  { id: 1, title: 'Rohit added "Dinner at Thalassa"', desc: 'Goa Trip 2026 • ₹2,400', time: '10 mins ago', unread: true },
  { id: 2, title: 'Vicky settled up with you', desc: '3BHK Flatmates • ₹600', time: '1 hour ago', unread: true },
  { id: 3, title: 'New expense added by Pooja', desc: 'Goa Trip 2026 • ₹850', time: 'Yesterday', unread: false },
  { id: 4, title: 'Monthly rent reminder', desc: '3BHK Flatmates • Due in 2 days', time: '2 days ago', unread: false },
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

  const userName = useSelector((state) => state.auth.user?.userName);
  
  const [showNotifications, setShowNotifications] = useState(false)
  const [notifications, setNotifications] = useState(sampleNotifications)

  const [activeGroupForExpense, setActiveGroupForExpense] = useState(null)
  const [expenseForm, setExpenseForm] = useState({ description: '', amount: '', paidBy: '' })

  const unreadCount = notifications.filter((n) => n.unread).length

  const handleOpenExpenseModal = (e, group) => {
    e.stopPropagation()
    setActiveGroupForExpense(group)
    setExpenseForm({
      description: '',
      amount: '',
      paidBy: group.members[0]?.name || 'You',
    })
  }

  const handleAddExpenseSubmit = (e) => {
    e.preventDefault()
    if (!expenseForm.description || !expenseForm.amount) return
    setActiveGroupForExpense(null)
  }

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
                <h1 className="text-[17px] font-semibold tracking-tight text-slate-100">{userName || "Guest"}</h1>
              </div>
            </div>

            {/* Notification Bell Button */}
            <button
              type="button"
              onClick={() => setShowNotifications(!showNotifications)}
              aria-label="Notifications"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/55 text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              <Bell size={18} strokeWidth={1.8} />
              {unreadCount > 0 && (
                <span className="absolute mr-[-16px] mt-[-17px] h-1.5 w-1.5 rounded-full bg-amber-400" />
              )}
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
              <BalanceCard label="YOU NEED TO RECEIVE" amount="₹2,400" tone="credit" direction="up" />
              <BalanceCard label="YOU NEED TO PAY" amount="₹800" tone="debt" direction="down" />
            </div>
          </section>

          <section className="mt-8" aria-labelledby="groups-heading">
            <div className="mb-4 flex items-center justify-between">
              <h2 id="groups-heading" className="text-lg font-semibold tracking-tight">Your Groups</h2>
            </div>
            <div className="space-y-3">
              {initialGroups.map((group, groupIdx) => (
                <div key={`${group.name}-${groupIdx}`} className="group flex w-full items-center gap-3 rounded-[20px] border border-slate-800/80 bg-slate-900/70 p-4 text-left transition hover:border-slate-700 hover:bg-slate-900">
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="truncate text-[15px] font-semibold text-slate-100">{group.name}</h3>
                        <p className="mt-1 text-[11px] text-slate-500">{group.updated}</p>
                      </div>

                      {/* Chevron Arrow hatakar Add Expense Button yahan lagaya hai */}
                      <button
                        type="button"
                        onClick={(e) => handleOpenExpenseModal(e, group)}
                        className="flex items-center gap-1 rounded-xl border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-300 transition hover:bg-amber-500 hover:text-slate-950 active:scale-95"
                      >
                        <Plus size={13} />
                        <span>Add Expense</span>
                      </button>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex pl-1">{group.members.map((member, index) => <Avatar key={`${group.name}-${member.initials}-${index}`} {...member} className={index > 0 ? '-ml-2' : ''} />)}</div>
                      <span className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${group.tone === 'debt' ? 'bg-rose-500/10 text-rose-300' : group.tone === 'credit' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-slate-800 text-slate-400'}`}>{group.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* NOTIFICATIONS POPUP MODAL */}
        {showNotifications && (
          <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-16 backdrop-blur-sm">
            <div className="w-full max-w-[380px] overflow-hidden rounded-2xl border border-slate-800 bg-[#020617] shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 p-4">
                <div className="flex items-center gap-2">
                  <Bell size={18} className="text-amber-400" />
                  <h3 className="text-sm font-semibold text-white">Notifications</h3>
                  {unreadCount > 0 && (
                    <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
                      {unreadCount} new
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setShowNotifications(false)}
                  className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="max-h-[300px] divide-y divide-slate-800/60 overflow-y-auto">
                {notifications.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-start gap-3 p-3.5 transition hover:bg-slate-900/60 ${item.unread ? 'bg-amber-500/[0.03]' : ''
                      }`}
                  >
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-amber-400">
                      <Receipt size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`text-xs ${item.unread ? 'font-semibold text-slate-100' : 'font-normal text-slate-300'}`}>
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-500">{item.desc}</p>
                      <span className="mt-1 block text-[10px] text-slate-500">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-800 p-3 text-center bg-slate-900/40">
                <button
                  type="button"
                  onClick={() => setNotifications(notifications.map((n) => ({ ...n, unread: false })))}
                  className="text-xs font-semibold text-amber-400 hover:underline"
                >
                  Mark all as read
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ADD EXPENSE FORM MODAL */}
        {activeGroupForExpense && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
            <div className="w-full max-w-[380px] overflow-hidden rounded-2xl border border-slate-800 bg-[#020617] p-5 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-semibold text-white">Add Expense</h3>
                  <p className="text-xs text-amber-400 font-medium">in {activeGroupForExpense.name}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveGroupForExpense(null)}
                  className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleAddExpenseSubmit} className="mt-4 space-y-4">
                <div>
                  <label className="block mb-1 text-xs font-medium text-slate-300">Description</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dinner, Groceries"
                    value={expenseForm.description}
                    onChange={(e) => setExpenseForm({ ...expenseForm, description: e.target.value })}
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-xs font-medium text-slate-300">Amount (₹)</label>
                  <input
                    type="number"
                    required
                    placeholder="0.00"
                    value={expenseForm.amount}
                    onChange={(e) => setExpenseForm({ ...expenseForm, amount: e.target.value })}
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-500"
                  />
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveGroupForExpense(null)}
                    className="flex-1 rounded-xl border border-slate-800 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-amber-500 py-2 text-xs font-semibold text-slate-950 hover:bg-amber-400 transition"
                  >
                    Save Expense
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </main>
  )
}