'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
export default function isLoggedIn() {
  const { data: session } = useSession();
  if (!session) {
    return (<p className="text-red-300">ログインしていません。</p>)
  }

  return (
    <div className="text-red-300">
      {session.user ? `${session.user.email}としてログインしています。`  : '読み込み中...'}
    </div>
  )
}