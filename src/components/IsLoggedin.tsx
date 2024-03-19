'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
export default function isLoggedIn() {
  const { data: session } = useSession()

  console.log(session);

  if (!session) {
    return <p>ログインしていません。</p>
  }

  return (
    <div className="text-red-300">
      {session.user ? `${session.user.email}としてログインしています。`  : '読み込み中...'}
    </div>
  )
}