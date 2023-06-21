import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const emailSignup = (email: string, password: string, username: string) => {
  const supabase = createClientComponentClient()
  return supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username
      },
      emailRedirectTo: `${location.origin}/auth/callback`,
    },
  })
}

export { emailSignup }