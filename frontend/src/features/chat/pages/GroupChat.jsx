'use client'

import { useState } from 'react'
import { ArrowLeft, CheckCheck, Info, Search, Send, Sparkles } from 'lucide-react'

const chats = [
  { name: 'Goa Trip 2026', avatar: '✈️', tone: 'amber', message: "Rohit added 'Dinner' bill - ₹2,400", time: '10:42 PM', unread: 2, online: true },
  { name: '3BHK Flatmates', avatar: '🏠', tone: 'emerald', message: 'Vicky: I will settle up by tomorrow evening', time: 'Yesterday' },
  { name: 'Friday Pizza Night', avatar: '🍕', tone: 'rose', message: 'All dues settled up!', time: '24 Sep' },
]

const toneStyles = {
  amber: 'border-amber-500/30 bg-amber-500/10 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]',
  emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]',
  rose: 'border-rose-500/30 bg-rose-500/10 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.15)]',
}

function Avatar({ chat, small = false }) {
  return (
    <div className="relative shrink-0">
      <div className={`flex items-center justify-center rounded-2xl border font-bold transition-transform duration-200 ${small ? 'h-10 w-10 text-sm' : 'h-13 w-13 text-lg'} ${toneStyles[chat.tone]}`}>
        {chat.avatar}
      </div>
      {chat.online && (
        <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#090d16] bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
      )}
    </div>
  )
}

function ChatRoom({ chat, onBack }) {
  const [message, setMessage] = useState('')
  return (
    <section className="flex min-h-0 flex-1 flex-col bg-[#050914] text-slate-100">
      {/* Header */}
      <header className="flex items-center gap-3 border-b border-slate-800/60 bg-[#0c1427]/90 px-4 py-3.5 backdrop-blur-xl sticky top-0 z-20">
        <button onClick={onBack} aria-label="Back to chats" className="rounded-full p-2 text-slate-300 hover:bg-slate-800/60 transition">
          <ArrowLeft size={20} />
        </button>
        <Avatar chat={chat} small />
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-sm font-bold text-white tracking-wide">Goa Trip 2026</h1>
          <p className="mt-0.5 text-[11px] font-medium text-emerald-400 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            3 members • Active now
          </p>
        </div>
        <button aria-label="Group info" className="rounded-full p-2 text-slate-400 hover:bg-slate-800/60 hover:text-white transition">
          <Info size={20} />
        </button>
      </header>

      {/* Chat Body */}
      <div className="min-h-0 flex-1 space-y-5 overflow-y-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-[#050914] to-[#050914] px-4 py-6">
        <div className="flex justify-center">
          <span className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400 shadow-sm backdrop-blur-md">
            Today
          </span>
        </div>

        {/* Incoming Message */}
        <div className="flex items-end gap-2.5">
          <Avatar chat={{ ...chat, avatar: 'R', tone: 'emerald' }} small />
          <div className="max-w-[78%]">
            <p className="mb-1 ml-1 text-[11px] font-medium text-slate-400">Rohit</p>
            <div className="rounded-2xl rounded-bl-xs border border-slate-800/90 bg-[#11192e] px-4 py-3 text-[13px] leading-relaxed text-slate-200 shadow-md">
              Guys, I uploaded the dinner bill from last night.
              <span className="ml-2.5 text-[10px] text-slate-500">10:39 PM</span>
            </div>
          </div>
        </div>

        {/* Expense Card Highlight */}
        <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-[#0c201a] via-[#091512] to-[#060e0c] p-4 shadow-lg shadow-emerald-950/20">
          <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[13px] font-semibold text-slate-100">Rohit added &apos;Dinner at Thalassa&apos;</p>
              <p className="mt-1 text-xs text-slate-400">Total Bill: <span className="font-bold text-white">₹2,400</span></p>
            </div>
            <span className="rounded-lg bg-emerald-500/20 border border-emerald-500/40 px-2 py-1 text-[11px] font-bold text-emerald-300">
              Your Share: ₹600
            </span>
          </div>
          <button className="mt-3.5 w-full rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/20 transition active:scale-[0.99]">
            View Expense Breakdown →
          </button>
        </div>

        {/* Outgoing Message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-xs border border-amber-500/30 bg-gradient-to-br from-[#1c180d] to-[#12100a] px-4 py-3 text-[13px] leading-relaxed text-amber-50 shadow-md">
            Got it! Will pay my share tonight 👍
            <div className="mt-1 flex items-center justify-end gap-1.5 text-[10px] text-amber-300/60">
              <span>10:41 PM</span>
              <CheckCheck size={14} className="text-amber-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Message Input Bar */}
      <div className="border-t border-slate-800/80 bg-[#0c1427]/95 px-3 pb-5 pt-3 backdrop-blur-xl">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-700/70 bg-[#050914] p-1.5 focus-within:border-amber-500/70 transition shadow-inner">
          <button aria-label="Attach file" className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800/60 text-slate-300 hover:bg-slate-700 transition">
            +
          </button>
          <input 
            value={message} 
            onChange={(event) => setMessage(event.target.value)} 
            placeholder="Type a message or expense..." 
            className="min-w-0 flex-1 bg-transparent px-2 text-[13px] text-white outline-none placeholder:text-slate-500" 
          />
          <button aria-label="Send message" className="flex h-9.5 w-9.5 items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/20 hover:brightness-110 transition active:scale-95">
            <Send size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default function GroupChat() {
  const [selectedChat, setSelectedChat] = useState(null)

  if (selectedChat) {
    return (
      <main className="h-full min-h-0 bg-[#050914] text-slate-100">
        <div className="mx-auto flex h-full min-h-0 w-full max-w-[480px] flex-col border-x border-slate-800/50 shadow-2xl">
          <ChatRoom chat={selectedChat} onBack={() => setSelectedChat(null)} />
        </div>
      </main>
    )
  }

  return (
    <main className="h-full min-h-0 bg-[#050914] text-slate-100">
      <div className="mx-auto flex h-full min-h-0 w-full max-w-[480px] flex-col bg-[#080e1a] border-x border-slate-800/50 shadow-2xl">
        {/* Header */}
        <header className="px-5 pb-5 pt-7 bg-gradient-to-b from-[#0e172a] to-transparent">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-400">
              <Sparkles size={13} />
              <span>HisabKitaab</span>
            </div>
          </div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">Chats & Groups</h1>
          
          <label className="mt-4 flex items-center gap-2.5 rounded-2xl border border-slate-800/90 bg-[#030712]/80 px-3.5 py-2.5 shadow-inner focus-within:border-amber-500/60 transition">
            <Search size={17} className="text-slate-400" />
            <input 
              aria-label="Search groups or messages" 
              placeholder="Search groups, friends, expenses..." 
              className="w-full bg-transparent text-[13px] text-white outline-none placeholder:text-slate-500" 
            />
          </label>
        </header>

        {/* Chat List Section */}
        <section className="min-h-0 flex-1 overflow-y-auto border-t border-slate-800/50 bg-[#080e1a] px-4 py-2">
          <div className="flex items-center justify-between px-1 py-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active Groups</p>
            <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] font-medium text-slate-300">
              {chats.length} Active
            </span>
          </div>

          <div className="space-y-1.5">
            {chats.map((chat) => (
              <button 
                key={chat.name} 
                onClick={() => setSelectedChat(chat)} 
                className="flex w-full items-center gap-3.5 rounded-2xl border border-transparent p-3 text-left transition hover:border-slate-800 hover:bg-slate-900/60 active:scale-[0.98]"
              >
                <Avatar chat={chat} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="truncate text-[14px] font-semibold text-slate-100">{chat.name}</h2>
                    <time className="shrink-0 text-[11px] text-slate-400">{chat.time}</time>
                  </div>
                  <p className={`mt-0.5 truncate text-[12px] ${chat.unread ? 'font-semibold text-slate-200' : 'text-slate-400'}`}>
                    {chat.message}
                  </p>
                </div>
                {chat.unread && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-1.5 text-[10px] font-bold text-slate-950 shadow-md shadow-amber-500/20">
                    {chat.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}