import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female'>('Male');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAuthAction = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSigningUp) {
        // Sign Up
        const { data: { user }, error: signUpError } = await supabase.auth.signUp({ email, password });
        if (signUpError) throw signUpError;
        if (!user) throw new Error("Sign up successful, but no user returned.");

        // Insert into public students table
        const { error: insertError } = await supabase.from('students').insert({
          id: user.id,
          name,
          email,
          level,
          gender,
        });
        if (insertError) throw insertError;
        alert('Sign up successful! Please check your email to verify your account.');

      } else {
        // Login
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        onLogin();
      }
    } catch (err: any) {
      setError(err.error_description || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
        <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">{isSigningUp ? 'Create Student Account' : 'Hostel Login'}</h1>
            <p className="mt-2 text-gray-500">{isSigningUp ? 'Get started by creating your account' : 'Sign in to manage your hostel'}</p>
        </div>
        <form className="mt-8 space-y-4" onSubmit={handleAuthAction}>
          <div className="rounded-md shadow-sm space-y-2">
            {isSigningUp && (
              <>
                 <input name="name" type="text" required className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                 <input name="level" type="text" required className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" placeholder="Level (e.g., 100L)" value={level} onChange={(e) => setLevel(e.target.value)} />
                 <select name="gender" required className="appearance-none relative block w-full px-3 py-3 border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" value={gender} onChange={(e) => setGender(e.target.value as 'Male' | 'Female')}>
                    <option>Male</option>
                    <option>Female</option>
                 </select>
              </>
            )}
            <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p className="text-sm text-red-600 text-center">{error}</p>}
          <div>
            <button type="submit" disabled={loading} className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors disabled:bg-amber-300">
              {loading ? 'Processing...' : (isSigningUp ? 'Sign Up' : 'Sign In')}
            </button>
          </div>
        </form>
        <p className="text-center text-sm">
          <button onClick={() => { setIsSigningUp(!isSigningUp); setError(null); }} className="font-medium text-amber-600 hover:text-amber-500">
            {isSigningUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
