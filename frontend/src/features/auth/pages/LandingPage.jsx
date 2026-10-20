'use client'

import { useState } from 'react'
import {
    ArrowRight,
    Bot,
    CheckCircle2,
    MessageCircle,
    ShieldCheck,
    Sparkles,
    Star,
    Zap,
} from 'lucide-react'
import LoginRegister from '../components/LoginRegister'

const features = [
    {
        icon: Zap,
        label: 'Equal & Custom Split',
        desc: 'Percent, exact amounts or shares',
        tone: 'text-amber-300 bg-amber-400/10 border-amber-400/25 shadow-[0_0_15px_rgba(245,158,11,0.1)]'
    },
    {
        icon: Bot,
        label: 'AI Receipt Reader',
        desc: 'Auto extract items from bills',
        tone: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/25 shadow-[0_0_15px_rgba(52,211,153,0.1)]'
    },
    {
        icon: MessageCircle,
        label: 'Group Chat Sync',
        desc: 'Discuss expenses in real-time',
        tone: 'text-sky-300 bg-sky-400/10 border-sky-400/25 shadow-[0_0_15px_rgba(56,189,248,0.1)]'
    },
]

const stepsData = [
    { step: '01', title: 'Create a Group', desc: 'Add roomies or trip buddies in 2 seconds.' },
    { step: '02', title: 'Add Expenses / Snap Bill', desc: 'Type or upload a photo, AI handles the rest.' },
    { step: '03', title: 'Settle in 1-Click', desc: 'Instant UPI integration with zero extra fees.' },
]

export default function LandingPage() {
    const [authModal, setAuthModal] = useState({ open: false, mode: 'signup' }) // 'login' or 'signup'
    const [activeStep, setActiveStep] = useState(0)

    const openLogin = () => setAuthModal({ open: true, mode: 'login' })
    const openSignup = () => setAuthModal({ open: true, mode: 'signup' })
    const closeModal = () => setAuthModal({ ...authModal, open: false })

    return (
        <main className="min-h-dvh bg-[#080d1a] text-slate-100 sm:flex sm:justify-center sm:px-0">
            <div className="relative flex min-h-dvh w-full max-w-[480px] flex-col justify-between overflow-x-hidden border-x border-slate-800/80 bg-gradient-to-b from-[#0B1329] via-[#080d1a] to-[#040711] px-5 py-6 shadow-2xl shadow-black">

                {/* Glow Effects */}
                <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-amber-500/[0.08] blur-3xl" />
                <div className="pointer-events-none absolute top-1/2 -right-20 h-64 w-64 rounded-full bg-emerald-500/[0.05] blur-3xl" />

                {/* HEADER */}
                <header className="relative z-10 flex items-center justify-between pb-2">
                    <div className="flex items-center gap-2.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-400/30 bg-gradient-to-br from-amber-400/20 to-amber-600/10 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                            <Sparkles size={18} strokeWidth={2.3} />
                        </span>
                        <span className="text-[16px] font-bold tracking-tight text-white">HisabKitaab</span>
                    </div>
                    <button
                        onClick={openLogin}
                        className="rounded-xl border border-slate-700/80 bg-slate-900/60 px-3.5 py-1.5 text-[12px] font-semibold text-slate-300 transition hover:border-amber-500/40 hover:text-white active:scale-95"
                    >
                        Log In
                    </button>
                </header>

                {/* HERO SECTION */}
                <section className="relative z-10 my-auto py-6 flex flex-col items-center text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-[11px] font-bold tracking-wide text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                        <Sparkles size={13} className="animate-pulse" />
                        Smart AI-Powered Splitter
                    </div>

                    <h1 className="max-w-[340px] text-[38px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white">
                        Split Bills,
                        <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                            Not Friendships.
                        </span>
                    </h1>

                    <p className="mt-4 max-w-[320px] text-[13px] leading-relaxed text-slate-400 font-normal">
                        Track room rent, trips, and night-outs effortlessly. AI categorizes your bills so you never fight over money.
                    </p>

                    {/* FEATURES GRID */}
                    <div className="mt-7 grid w-full grid-cols-3 gap-2.5">
                        {features.map(({ icon: Icon, label, desc, tone }) => (
                            <div
                                key={label}
                                className={`flex flex-col items-center justify-between rounded-2xl border p-3 text-center backdrop-blur-md transition ${tone}`}
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900/60">
                                    <Icon size={18} strokeWidth={2.2} />
                                </div>
                                <div className="mt-2">
                                    <p className="text-[11px] font-bold text-slate-100 leading-tight">{label}</p>
                                    <p className="mt-1 text-[9px] text-slate-400 line-clamp-2">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* LIVE METRICS STRIP */}
                    <div className="mt-6 flex w-full items-center justify-around rounded-2xl border border-slate-800/80 bg-[#0c1427]/60 py-3 backdrop-blur-md">
                        <div className="text-center">
                            <p className="text-sm font-extrabold text-white">₹1.2Cr+</p>
                            <p className="text-[10px] text-slate-400 font-medium">Settled</p>
                        </div>
                        <div className="h-6 w-[1px] bg-slate-800" />
                        <div className="text-center">
                            <p className="text-sm font-extrabold text-white">50K+</p>
                            <p className="text-[10px] text-slate-400 font-medium">Active Groups</p>
                        </div>
                        <div className="h-6 w-[1px] bg-slate-800" />
                        <div className="text-center flex flex-col items-center">
                            <p className="text-sm font-extrabold text-amber-400 flex items-center gap-1">
                                4.9 <Star size={12} className="fill-amber-400 text-amber-400" />
                            </p>
                            <p className="text-[10px] text-slate-400 font-medium">Rating</p>
                        </div>
                    </div>

                    {/* HOW IT WORKS MINI STEPPER */}
                    <div className="mt-6 w-full text-left">
                        <p className="px-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">How it works</p>
                        <div className="rounded-2xl border border-slate-800 bg-[#0c1427]/90 p-3.5">
                            <div className="flex justify-between gap-1 mb-3 border-b border-slate-800/80 pb-2">
                                {stepsData.map((s, idx) => (
                                    <button
                                        key={s.step}
                                        onClick={() => setActiveStep(idx)}
                                        className={`flex-1 rounded-lg py-1 text-[10px] font-bold transition ${activeStep === idx
                                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                            : 'text-slate-500 hover:text-slate-300'
                                            }`}
                                    >
                                        Step {s.step}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-xs font-extrabold text-amber-400">
                                    {stepsData[activeStep].step}
                                </span>
                                <div>
                                    <p className="text-xs font-bold text-white">{stepsData[activeStep].title}</p>
                                    <p className="mt-0.5 text-[11px] text-slate-400">{stepsData[activeStep].desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA FOOTER */}
                <footer className="relative z-10 pt-2">
                    <button
                        onClick={openSignup}
                        className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-5 py-4 text-[14px] font-extrabold text-slate-950 shadow-[0_10px_30px_rgba(245,158,11,0.25)] transition hover:brightness-110 active:scale-[0.98]"
                    >
                        Get Started Free
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </button>

                    <p className="mt-3.5 text-center text-[12px] text-slate-400">
                        Already have an account?{' '}
                        <button onClick={openLogin} className="font-bold text-amber-400 hover:underline">
                            Log In
                        </button>
                    </p>

                    <div className="mt-4 flex items-center justify-center gap-3 text-[10px] font-semibold text-slate-400">
                        <span className="flex items-center gap-1 text-emerald-400">
                            <CheckCircle2 size={12} /> 100% Free
                        </span>
                        <span className="text-slate-700">•</span>
                        <span className="flex items-center gap-1 text-slate-300">
                            <ShieldCheck size={12} className="text-sky-400" /> Secure UPI Payments
                        </span>
                    </div>
                </footer>

                {/* ----------------- AUTH POPUP MODAL (LOGIN & SIGNUP) ----------------- */}
                {authModal.open && <LoginRegister authModal={authModal} setAuthModal={setAuthModal} closeModal={closeModal} /> }

            </div>
        </main>
    )
}