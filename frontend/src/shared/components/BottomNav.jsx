import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Users, Plus, MessageSquare, User } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="h-full px-6 py-2">
      <div className="mx-auto flex h-full max-w-md items-center justify-between relative">
        
        {/* Left Side Tabs - /homePage prefix added */}
        <Link
          to="/homePage"
          className={`flex flex-col items-center text-xs font-medium transition-colors ${
            location.pathname === '/homePage' ? 'text-amber-500' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Home className="w-5 h-5 mb-1" />
          <span>Home</span>
        </Link>

        <Link
          to="/homePage/groups"
          className={`flex flex-col items-center text-xs font-medium transition-colors ${
            location.pathname.startsWith('/homePage/groups') ? 'text-amber-500' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Users className="w-5 h-5 mb-1" />
          <span>Groups</span>
        </Link>

        {/* Center Floating CTA Button (PhonePe Style) - /homePage/newGroup */}
        <div className="relative -top-5">
          <button
            onClick={() => navigate('/homePage/newGroup')}
            className="w-14 h-14 rounded-full bg-amber-600 hover:bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-600/30 border-4 border-slate-900 transition-transform active:scale-95"
            aria-label="Add Expense"
          >
            <Plus className="w-7 h-7 stroke-[2.5]" />
          </button>
        </div>

        {/* Right Side Tabs - /homePage prefix added */}
        <Link
          to="/homePage/chat"
          className={`flex flex-col items-center text-xs font-medium transition-colors ${
            location.pathname === '/homePage/chat' ? 'text-amber-500' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <MessageSquare className="w-5 h-5 mb-1" />
          <span>Chat</span>
        </Link>

        <Link
          to="/homePage/profile"
          className={`flex flex-col items-center text-xs font-medium transition-colors ${
            location.pathname === '/homePage/profile' ? 'text-amber-500' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <User className="w-5 h-5 mb-1" />
          <span>Profile</span>
        </Link>

      </div>
    </nav>
  );
};

export default BottomNav;