'use client'
import { LoginButton, LogoutButton } from '@/components/AuthenticateButton'
import Link from 'next/link'
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';

interface IsLoggedInProps {
  session: ReturnType<typeof useSession>['data'];
}

// IsLoggedIn コンポーネントを更新して、TypeScript の型チェックを適用します
const IsLoggedIn: React.FC<IsLoggedInProps> = ({ session }) => {
  if (!session) {
    return <p className="text-red-300">ログインしていません。</p>;
  }

  return (
    <div className="text-red-300">
      {session.user ? `${session.user.email}としてログインしています。` : '読み込み中...'}
    </div>
  );
}

export default function Home() {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!session) {
      e.preventDefault();
      // セッションがない場合はモーダルを表示
      setShowModal(true);
    }
    // セッションがある場合は、デフォルトの動作を続行（リンクに従う）
  };
  return (
    <>
      <header className="h-[100px] bg-gray-200"></header>
      <main className="bg-white flex flex-col items-center justify-center h-[500px]">
        <div className="py-5">
          <IsLoggedIn session={session} />
        </div>
        <Link className="bg-sky-400 hover:bg-sky-600 text-white font-bold text-lg rounded-full py-2 px-4 ralative" href="/dashboard" onClick={handleClick}>
          Dashboardへ
        </Link>
        {showModal && (
          <div>
            {/* モーダルの実装 */}
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-[1000]" onClick={() => setShowModal(false)} />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white z-[1001]">
              <div className="mt-3 text-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">サインインしてください</h3>
                <div className="mt-2 px-7 py-3">
                  <p className="text-sm text-gray-500">機能を利用するにはログインが必要です。</p>
                </div>
                <div className="items-center px-4 py-3">
                  <button className="px-4 py-2 bg-sky-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300" onClick={() => setShowModal(false)}>
                    閉じる
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex item-center justify-center gap-4">
          <LoginButton/>
          <LogoutButton/>
        </div>
      </main>
      <footer className="h-[200px] bg-sky-200"></footer>
    </>
  );
}

// function IsLoggedIn(session) {
//   if (!session) {
//     return (<p className="text-red-300">ログインしていません。</p>)
//   }

//   return (
//     <div className="text-red-300">
//       {session.user ? `${session.user.email}としてログインしています。`  : '読み込み中...'}
//     </div>
//   )
// }
