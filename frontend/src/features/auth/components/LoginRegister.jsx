'use client'

import {
    Lock,
    Mail,
    Sparkles,
    User,
    X,
} from 'lucide-react'

const LoginRegister = ({ authModal, setAuthModal, closeModal }) => {
    

    return (

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
                        console.log(authModal.mode)
                        // alert(authModal.mode === 'login' ? 'Logged in successfully!' : 'Account created successfully!')
                        // closeModal()
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

    )
}

export default LoginRegister