'use client'

import { useState } from 'react'
import {
    ArrowRight,
    Bot,
    Check,
    CheckCircle2,
    Lock,
    Mail,
    MessageCircle,
    ShieldCheck,
    Sparkles,
    Star,
    User,
    Users,
    X,
    Zap,
} from 'lucide-react'

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
                {authModal.open && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-md">
                        <div className="w-full max-w-[380px] overflow-hidden rounded-3xl border border-slate-800 bg-[#070d1e] p-6 shadow-2xl">

                            {/* Modal Header */}
                            <div className="flex items-center justify-between pb-2">
                                <div className="flex items-center gap-2">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                                        <Sparkles size={16} />
                                    </span>
                                    <h3 className="text-base font-extrabold text-white">
                                        {authModal.mode === 'login' ? 'Welcome Back!' : 'Create Account'}
                                    </h3>
                                </div>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="rounded-full p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Mode Switcher Tabs */}
                            <div className="mt-4 flex rounded-xl bg-slate-900 p-1 border border-slate-800">
                                <button
                                    type="button"
                                    onClick={() => setAuthModal({ ...authModal, mode: 'signup' })}
                                    className={`flex-1 rounded-lg py-2 text-xs font-bold transition ${authModal.mode === 'signup'
                                            ? 'bg-amber-500 text-slate-950 shadow'
                                            : 'text-slate-400 hover:text-white'
                                        }`}
                                >
                                    Sign Up
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setAuthModal({ ...authModal, mode: 'login' })}
                                    className={`flex-1 rounded-lg py-2 text-xs font-bold transition ${authModal.mode === 'login'
                                            ? 'bg-amber-500 text-slate-950 shadow'
                                            : 'text-slate-400 hover:text-white'
                                        }`}
                                >
                                    Log In
                                </button>
                            </div>

                            {/* Continue with Google Button */}
                            <div className="mt-5">
                                <button
                                    type="button"
                                    onClick={() => {
                                        alert('Connecting with Google...')
                                        closeModal()
                                    }}
                                    className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/90 py-3 text-xs font-semibold text-slate-100 transition hover:bg-slate-800 active:scale-98"
                                >
                                    <svg className="h-4 w-4" viewBox="0 0 24 24">
                                        <path
                                            fill="#4285F4"
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        />
                                        <path
                                            fill="#34A853"
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        />
                                        <path
                                            fill="#FBBC05"
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                                        />
                                        <path
                                            fill="#EA4335"
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                        />
                                    </svg>
                                    <span>Continue with Google</span>
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="my-4 flex items-center gap-3">
                                <div className="h-[1px] flex-1 bg-slate-800" />
                                <span className="text-[10px] font-semibold uppercase text-slate-500">or with email</span>
                                <div className="h-[1px] flex-1 bg-slate-800" />
                            </div>

                            {/* Email Form */}
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    alert(authModal.mode === 'login' ? 'Logged in successfully!' : 'Account created successfully!')
                                    closeModal()
                                }}
                                className="space-y-3"
                            >
                                {authModal.mode === 'signup' && (
                                    <div>
                                        <label className="block mb-1 text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                                            <User size={12} className="text-amber-400" /> Full Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Rahul Sharma"
                                            className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none focus:border-amber-500"
                                        />
                                    </div>
                                )}

                                <div>
                                    <label className="block mb-1 text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                                        <Mail size={12} className="text-amber-400" /> Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="name@example.com"
                                        className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none focus:border-amber-500"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                                        <Lock size={12} className="text-amber-400" /> Password
                                    </label>
                                    <input
                                        type="password"
                                        required
                                        placeholder="••••••••"
                                        className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none focus:border-amber-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="mt-2 w-full rounded-2xl bg-amber-500 py-3 text-xs font-bold text-slate-950 transition hover:bg-amber-400 active:scale-98"
                                >
                                    {authModal.mode === 'login' ? 'Log In to Account' : 'Create Free Account'}
                                </button>
                            </form>

                        </div>
                    </div>
                )}

            </div>
        </main>
    )
}