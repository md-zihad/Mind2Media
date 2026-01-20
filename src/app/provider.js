"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs'
import { db } from '@/config/db'
import { User } from '@/config/schema'
import { eq } from 'drizzle-orm'



function Provider({ children }) {

  const { user: clerkUser } = useUser()

  const isNewUser = async () => {
    try {
      const clerkEmail = clerkUser?.primaryEmailAddress?.emailAddress
      if (!clerkEmail) return null

      const existingUsers = await db.select().from(User).where(eq(User.email, clerkEmail))
      if (!existingUsers[0]) {
        await db.insert(User).values({
          name: (clerkUser?.fullName ?? '').slice(0, 30),
          email: clerkEmail,
          imageUrl: clerkUser?.imageUrl,
        })
      }
      return {
        name: clerkUser?.fullName,
        imageUrl: clerkUser?.imageUrl,
      }
    }
    catch (error) {
      throw new Error('Error fetching user')
    }
  }
    return (
      <div>{children}</div>
    )
  
}

export default Provider