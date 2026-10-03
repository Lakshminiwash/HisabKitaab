'use client'

import { useState } from 'react'
import { Check, Home, PartyPopper, Plus, Utensils, X, Users, Sparkles } from 'lucide-react'

const categories = [
  { label: 'Trip', icon: '✈' },
  { label: 'Home', icon: Home },
  { label: 'Dining', icon: Utensils },
  { label: 'Event', icon: PartyPopper },
  { label: 'Other', icon: '•••' },
]

const icons = ['✈', '🏖', '🍽', '🎉', '🏠', '🎬', '💼', '☕']
const currencies = ['₹ (INR)', '$ (USD)', '€ (EUR)']

function MemberTag({ name, you, onRemove }) {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-800/90 py-1 pl-3 pr-2 text-[12px] font-medium text-slate-200 shadow-sm transition hover:border-slate-600">
      <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${you ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
        {name[0]?.toUpperCase()}
      </span>
      <span>{name}{you ? ' (You)' : ''}</span>
      {!you && (
        <button 
          onClick={onRemove} 
          type="button"
          aria-label={`Remove ${name}`} 
          className="ml-0.5 rounded-full p-0.5 text-slate-400 hover:bg-slate-700 hover:text-white transition"
        >
          <X size={13} />
        </button>
      )}
    </div>
  )
}

export default function AddNewGroup() {
  const [groupName, setGroupName] = useState('')
  const [category, setCategory] = useState('Trip')
  const [selectedIcon, setSelectedIcon] = useState('✈')
  const [currency, setCurrency] = useState('₹ (INR)')
  const [memberInput, setMemberInput] = useState('')
  const [members, setMembers] = useState(['Rohit', 'Vicky'])

  const handleAddMember = () => {
    if (memberInput.trim() && !members.includes(memberInput.trim())) {
      setMembers([...members, memberInput.trim()])
      setMemberInput('')
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleAddMember()
    }
  }

  return (
    <main className="relative flex h-full min-h-0 w-full items-center justify-center overflow-y-auto bg-[#020617] p-4 font-sans text-slate-100">
      
      {/* Ambient Background Glow */}
      <div className="absolute h-72 w-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      {/* Main Card Wrapper - 80% Viewport Height */}
      <div className="relative z-10 flex h-full max-h-[80vh] min-h-0 w-full max-w-[400px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-[#0F172A]/95 p-5 shadow-2xl backdrop-blur-xl">
        
        {/* Header */}
        <header className="flex items-center justify-between pb-1">
          <div>
            <div className="flex items-center gap-1.5 text-amber-400 text-[11px] font-bold uppercase tracking-widest">
              <Sparkles size={13} />
              <span>HisabKitaab</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-white mt-0.5">Create New Group</h2>
          </div>
          <button 
            type="button"
            aria-label="Close" 
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/70 bg-slate-800/60 text-slate-300 hover:bg-slate-700 hover:text-white transition"
          >
            <X size={16} />
          </button>
        </header>

        {/* Form Fields Stack */}
        <div className="my-2 flex min-h-0 flex-1 flex-col justify-around gap-2.5 overflow-y-auto">
          
          {/* Group Name input with live badge */}
          <div>
            <label className="mb-1 block text-[13px] font-semibold text-slate-200">
              Group Name
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15 text-sm text-amber-300 border border-amber-500/30">
                {selectedIcon}
              </span>
              <input 
                autoFocus 
                value={groupName} 
                onChange={(e) => setGroupName(e.target.value)} 
                placeholder="e.g., Goa Trip 2026, Flat Rent" 
                className="w-full rounded-xl border border-slate-700 bg-[#020617]/80 pl-12 pr-3.5 py-2.5 text-[13px] text-white outline-none placeholder:text-slate-500 focus:border-amber-500 transition" 
              />
            </div>
          </div>

          {/* Group Type/Category */}
          <div>
            <p className="mb-1 block text-[13px] font-semibold text-slate-200">Group Type</p>
            <div className="flex gap-2 overflow-x-auto pb-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((item) => { 
                const Icon = item.icon; 
                const isSelected = category === item.label;
                return (
                  <button 
                    key={item.label} 
                    type="button"
                    onClick={() => setCategory(item.label)} 
                    className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium transition ${
                      isSelected 
                        ? 'border-amber-500/80 bg-amber-500/20 text-amber-300' 
                        : 'border-slate-800 bg-slate-800/50 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    {typeof Icon === 'string' ? <span>{Icon}</span> : <Icon size={13} />}
                    {item.label}
                  </button> 
                );
              })}
            </div>
          </div>

          {/* Group Icon Picker */}
          <div>
            <p className="mb-1 block text-[13px] font-semibold text-slate-200">Group Icon</p>
            <div className="grid grid-cols-8 gap-1.5">
              {icons.map((icon) => (
                <button 
                  key={icon} 
                  type="button"
                  onClick={() => setSelectedIcon(icon)} 
                  className={`flex h-8 items-center justify-center rounded-lg border text-sm transition ${
                    selectedIcon === icon 
                      ? 'border-amber-500 bg-amber-500/20 text-white scale-105' 
                      : 'border-slate-800 bg-slate-800/50 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Add Members Section */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <p className="text-[13px] font-semibold text-slate-200">Add Members</p>
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <Users size={12} /> {members.length + 1} Total
              </span>
            </div>
            
            <div className="flex items-center rounded-xl border border-slate-700 bg-[#020617]/80 px-3 focus-within:border-amber-500 transition">
              <input 
                value={memberInput} 
                onChange={(e) => setMemberInput(e.target.value)} 
                onKeyDown={handleKeyDown} 
                placeholder="Enter name or phone" 
                className="w-full bg-transparent py-2.5 text-[12px] outline-none placeholder:text-slate-500 text-white" 
              />
              <button
                type="button"
                onClick={handleAddMember}
                className="ml-1 rounded-md bg-slate-800 px-2 py-1 text-[11px] font-bold text-amber-400 hover:bg-slate-700 transition"
              >
                <Plus size={14} />
              </button>
            </div>

            <div className="mt-2 flex max-h-[52px] flex-wrap gap-1.5 overflow-y-auto no-scrollbar">
              <MemberTag name="Rahul" you />
              {members.map((member) => (
                <MemberTag 
                  key={member} 
                  name={member} 
                  onRemove={() => setMembers(members.filter((item) => item !== member))} 
                />
              ))}
            </div>
          </div>

          {/* Currency Selection */}
          <div>
            <p className="mb-1 block text-[13px] font-semibold text-slate-200">Currency</p>
            <div className="grid grid-cols-3 gap-2">
              {currencies.map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => setCurrency(curr)}
                  className={`rounded-lg border py-1.5 text-[11px] font-semibold transition ${
                    currency === curr
                      ? 'border-amber-500/80 bg-amber-500/20 text-amber-300'
                      : 'border-slate-800 bg-slate-800/50 text-slate-400'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Action Submit Button */}
        <button 
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-3 text-[14px] font-bold text-slate-950 shadow-md shadow-amber-500/20 transition hover:brightness-110 active:scale-[0.98]"
        >
          <span>Create Group</span>
          <Check size={18} />
        </button>

      </div>
    </main>
  )
}