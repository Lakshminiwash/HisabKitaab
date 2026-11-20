'use client'
import {useCreateGroup} from "../hooks/useNewGroup"
import { useState } from 'react'
import { Check, Home, PartyPopper, Plus, Utensils, X, Users, Sparkles } from 'lucide-react'
import { useNavigate } from "react-router-dom"

const categories = [
  { label: 'Trip', icon: '✈' },
  { label: 'Home', icon: Home },
  { label: 'Dining', icon: Utensils },
  { label: 'Event', icon: PartyPopper },
]

const currencies = ['INR', 'USD', 'EUR']


export default function AddNewGroup() {
  
  const {handleCreateGroup} = useCreateGroup();
  const navigate = useNavigate();

  const [groupName, setGroupName] = useState('')
  const [category, setCategory] = useState('Home')
  const [currency, setCurrency] = useState('INR')

  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    const created = await handleCreateGroup({ groupName, category, currency });
    if (created) {
      setGroupName(""); // Success ke baad input clear
      navigate("/homePage/groups")
    }
  }



  return (
    <main className="relative flex h-full min-h-0 w-full items-center justify-center overflow-y-auto bg-[#020617] p-4 font-sans text-slate-100">

      {/* Ambient Background Glow */}
      <div className="absolute h-72 w-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      {/* Main Card Wrapper - 80% Viewport Height */}
      <div className="relative z-10 flex h-full max-h-[47vh] min-h-0 w-full max-w-[400px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-[#0F172A]/95 p-5 shadow-2xl backdrop-blur-xl">

        {/* Header */}
        <header className="flex items-center justify-between pb-1">
          <div>
            <div className="flex items-center gap-1.5 text-amber-400 text-[11px] font-bold uppercase tracking-widest">
              <Sparkles size={13} />
              <span>HisabKitaab</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-white mt-0.5">Create New Group</h2>
          </div>

        </header>

        <form action="" onSubmit={handleSubmit}>
          {/* Form Fields Stack */}
          <div className="my-2 flex min-h-0 flex-1 flex-col justify-around gap-2.5 overflow-y-auto">

            {/* Group Name input with live badge */}
            <div>
              <label className="mb-1 block text-[13px] font-semibold text-slate-200">
                Group Name
              </label>
              <div className="relative flex items-center">

                <input
                  autoFocus
                  type='text'
                  value={groupName}
                  required
                  onChange={(e) => setGroupName(e.target.value)}
                  placeholder="e.g., Goa Trip 2026, Flat Rent"
                  className="w-full rounded-xl border border-slate-700 bg-[#020617]/80 pl-4 pr-4 py-2.5 text-[13px] text-white outline-none placeholder:text-slate-500 focus:border-amber-500 transition"
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
                      className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium transition ${isSelected
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

            {/* Currency Selection */}
            <div>
              <p className="mb-1 block text-[13px] font-semibold text-slate-200">Currency</p>
              <div className="grid grid-cols-3 gap-2">
                {currencies.map((curr) => (
                  <button
                    key={curr}
                    type="button"
                    onClick={() => setCurrency(curr)}
                    className={`rounded-lg border py-1.5 text-[11px] font-semibold transition ${currency === curr
                      ? 'border-amber-500/80 bg-amber-500/20 text-amber-300'
                      : 'border-slate-800 bg-slate-800/50 text-slate-400'
                      }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Submit Button */}
            <button
              type="submit"
              className="flex w-full mt-2 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-3 text-[14px] font-bold text-slate-950 shadow-md shadow-amber-500/20 transition hover:brightness-110 active:scale-[0.98]"
            >
              <span>Create Group</span>
              <Check size={18} />
            </button>

          </div>
        </form>



      </div>
    </main>
  )
}