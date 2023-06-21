import { supabase } from "@/components/shared/config/supabase";

const emailLogin = (email: string, password: string) => supabase.auth.signInWithPassword({ email, password })

const googleLogin = () => supabase.auth.signInWithOAuth({
  provider: 'google',
})

export { emailLogin, googleLogin }