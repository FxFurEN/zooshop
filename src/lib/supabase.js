import { useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ghauuxtqqagimisyqajv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoYXV1eHRxcWFnaW1pc3lxYWp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4NDE0NjYsImV4cCI6MjAzMjQxNzQ2Nn0.Df5VFnldOarZCEMfswvl46g3HTpNy4PHjBnJvHbUoo4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage, 
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

function useSupabaseAuth() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        supabase.auth.startAutoRefresh();
      } else {
        supabase.auth.stopAutoRefresh();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    if (document.visibilityState === 'visible') {
      supabase.auth.startAutoRefresh();
    } else {
      supabase.auth.stopAutoRefresh();
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
}

export default useSupabaseAuth;
