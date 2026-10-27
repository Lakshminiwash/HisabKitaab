'use client'
import { Lock, Mail, Sparkles, User, X } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'

const LoginRegister = ({ authModal, setAuthModal, closeModal }) => {

    const { handleRegister, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")

    // Redux se state nikalna
    const loading = useSelector(state => state.auth.loading)
    const error = useSelector(state => state.auth.error)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let result;
            if (authModal.mode === 'signup') {
                result = await handleRegister({
                    userName: fullName,
                    email,
                    password,
                    contact
                });
            } else {
                result = await handleLogin({
                    email,
                    password
                });
            }

            // Agar upar wala function Bina Error ke Complete hua, TABHI yeh chalega
            if (result) {
                closeModal();
                navigate('/homePage', { replace: true });
            }

        } catch (err) {
            // Validation ya Backend Error aane par code yahan aayega
            console.error("Auth Failed:", err);
            // Is case mein closeModal() aur navigate() execute NAHI honge!
        }
    }

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

                {/* Error Message Display */}
                {error && (
                    <div className="mt-3 rounded-xl bg-red-500/10 border border-red-500/30 p-2.5 text-center text-xs font-medium text-red-400">
                        {error}
                    </div>
                )}

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

                {/* Email Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-4 space-y-3"
                >
                    {authModal.mode === 'signup' && (
                        <div>
                            <label className="block mb-1 text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                                <User size={12} className="text-amber-400" /> Full Name
                            </label>
                            <input
                                type="text"
                                name='fullName'
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
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
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none focus:border-amber-500"
                        />
                    </div>

                    {authModal.mode === 'signup' && (
                        <div>
                            <label className="block mb-1 text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                                <User size={12} className="text-amber-400" /> Contact Number
                            </label>
                            <input
                                type="tel"
                                name='contact'
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                placeholder="9876543210"
                                className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none focus:border-amber-500"
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 w-full rounded-2xl bg-amber-500 py-3 text-xs font-bold text-slate-950 transition hover:bg-amber-400 active:scale-98 disabled:opacity-50"
                    >
                        {loading ? 'Please wait...' : (authModal.mode === 'login' ? 'Log In to Account' : 'Create Free Account')}
                    </button>
                </form>

            </div>
        </div>
    )
}

export default LoginRegister;