import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <div className = "bg-amber-300 flex justify-center p-5">
    <SignUp />
  </div>
}