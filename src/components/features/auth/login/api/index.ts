import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const emailLogin = (email: string, password: string) => {
  const supabase = createClientComponentClient()
  return supabase.auth.signInWithPassword({ email, password })
}

const googleLogin = () => {
  const supabase = createClientComponentClient()
  return supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}

export { emailLogin, googleLogin }