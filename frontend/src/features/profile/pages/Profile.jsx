'use client'

import { useState } from 'react'
import {
  ArrowLeft,
  Bell,
  Check,
  ChevronRight,
  CreditCard,
  Edit3,
  Info,
  LogOut,
  Moon,
  MoreHorizontal,
  Wallet,
  Sparkles,
} from 'lucide-react'

function ActivityRow({ icon, tone, children, status, statusTone }) {
  return (
    <div className="flex items-start gap-3.5 border-b border-slate-800/70 py-4 last:border-0">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/5 shadow-sm ${tone}`}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] leading-relaxed text-slate-200">{children}</p>
        <span
          className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${statusTone}`}
        >
          {status === 'Settled' ? <Check size={12} /> : <Info size={12} />}
          {status}
        </span>
      </div>
      <button
        type="button"
        aria-label="More options"
        className="rounded-lg p-1 text-slate-500 transition hover:bg-slate-800 hover:text-slate-300"
      >
        <MoreHorizontal size={16} />
      </button>
    </div>
  )
}

function SettingRow({ icon, label, detail, danger, children }) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3.5 border-b border-slate-800/70 py-4 text-left transition hover:opacity-90 last:border-0"
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/5 shadow-sm ${danger
            ? 'border-rose-500/30 bg-rose-500/10 text-rose-400'
            : 'bg-slate-800/80 text-slate-300'
          }`}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p
          className={`text-[13px] font-semibold ${danger ? 'text-rose-400' : 'text-slate-100'
            }`}
        >
          {label}
        </p>
        {detail && <p className="mt-0.5 text-[11px] text-slate-400">{detail}</p>}
      </div>
      {children || <ChevronRight size={16} className="text-slate-500" />}
    </button>
  )
}

export default function Profile() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <main className="h-full min-h-0 bg-[#0F172A] text-slate-100 sm:flex sm:justify-center sm:px-0">
      <div className="relative flex h-full min-h-0 w-full flex-col overflow-hidden border border-slate-800/70 bg-[#020617] shadow-2xl shadow-black/30">
        {/* Header */}
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-800/70 bg-[#0c1427]/90 px-5 pb-4 pt-7 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-white tracking-wide">
              Profile
            </h1>
          </div>
          <button
            type="button"
            aria-label="Edit profile"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 transition hover:bg-amber-500/20"
          >
            <Edit3 size={16} />
          </button>
        </header>

        {/* Scrollable Body */}
        <section className="min-h-0 flex-1 overflow-y-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-[#080e1a] to-[#050914] px-5 pb-6 pt-5">
          {/* User Details Card */}
          <div className="rounded-2xl border border-slate-800/90 bg-[#0c1427]/90 p-4.5 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3.5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-amber-500/50 bg-gradient-to-br from-amber-500/20 to-amber-600/10 text-xl font-bold text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                RS
              </div>
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  Rahul Sharma
                </h2>
                <p className="mt-0.5 text-xs text-slate-400 font-medium">
                  rahul.sharma@example.com
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 pt-1 border-t border-slate-800/60">
              <span className="rounded-lg border border-slate-700/60 bg-slate-800/40 px-3 py-1 text-[10px] font-medium text-slate-300">
                Member since Jan 2026
              </span>
              <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold text-emerald-300">
                12 Active Groups
              </span>
            </div>
          </div>

          {/* Financial Summary Highlight Card */}
          <div className="relative overflow-hidden mt-4 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-[#1c180e] via-[#111625] to-[#0b101d] p-4.5 shadow-lg shadow-amber-950/20">
            <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-bold uppercase tracking-widest text-amber-400/90 flex items-center gap-1.5">
                <Sparkles size={12} />
                Financial Summary
              </p>
            </div>
            <div className="mt-3 flex items-end justify-between">
              <div>
                <p className="text-2xl font-extrabold tracking-tight text-white">
                  ₹42,500
                </p>
                <p className="mt-1 text-xs font-medium text-slate-400">
                  Total Settled Expenses
                </p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/15 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
                <Wallet size={20} />
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <section className="mt-6">
            <div className="mb-2 flex items-center justify-between px-1">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Recent Activity
              </h2>
              <button type="button" className="text-xs font-bold text-amber-400 hover:underline">
                View all
              </button>
            </div>
            <div className="rounded-2xl border border-slate-800/90 bg-[#0c1427]/80 px-4 shadow-md backdrop-blur-md">
              <ActivityRow
                icon={<Check size={18} />}
                tone="border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                status="Settled"
                statusTone="bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
              >
                You paid <span className="font-semibold text-white">₹300</span> to Rohit in 3BHK Flatmates
              </ActivityRow>
              <ActivityRow
                icon={<Info size={18} />}
                tone="border-amber-500/30 bg-amber-500/10 text-amber-400"
                status="Pending"
                statusTone="bg-amber-500/15 text-amber-300 border border-amber-500/30"
              >
                Vicky added &apos;Kirana&apos; in 3BHK Flatmates
              </ActivityRow>
            </div>
          </section>

          {/* Quick Settings */}
          <section className="mt-6">
            <h2 className="mb-2 px-1 text-xs font-bold uppercase tracking-wider text-slate-400">
              Quick Settings
            </h2>
            <div className="rounded-2xl border border-slate-800/90 bg-[#0c1427]/80 px-4 shadow-md backdrop-blur-md">
              <SettingRow icon={<Moon size={18} />} label="Dark Mode">
                <button
                  type="button"
                  role="switch"
                  aria-checked={darkMode}
                  onClick={(event) => {
                    event.stopPropagation()
                    setDarkMode(!darkMode)
                  }}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none ${darkMode ? 'bg-emerald-500' : 'bg-slate-700'
                    }`}
                >
                  <span
                    className={`inline-block h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out ${darkMode ? 'translate-x-5' : 'translate-x-0'
                      }`}
                  />
                </button>
              </SettingRow>
              <SettingRow
                icon={<Bell size={18} />}
                label="Notification Preferences"
              />
              <SettingRow icon={<LogOut size={18} />} label="Logout" danger>
                <ChevronRight size={16} className="text-rose-400/80" />
              </SettingRow>
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}