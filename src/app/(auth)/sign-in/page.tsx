'use client'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button 
        className="bg-green-600 p-4"
        onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button 
       className="bg-blue-600 rounded-2xl p-2"
      onClick={() => signIn()}>Sign in</button>
    </>
  )
}