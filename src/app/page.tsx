import { LoginButton, LogoutButton } from '@/components/AuthenticateButton'
import  IsLoggedin from '@/components/IsLoggedin'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className="h-[100px] bg-gray-200">

      </header>
      <main className="bg-white flex flex-col items-center justify-center h-[632px]">
        <p className="my-5 text-black text-7xl font-medium">事業計画作成アプリ</p>
        <p className="my-5 text-black text-lg font-medium">綿密な分析～戦略と再現性のある勝ちパターンで</p>
        <p className="my-5 text-black text-lg font-medium">見込み顧客を獲得するBtoBサイトを制作します</p>
        <button className="my-5 bg-red-400 hover:bg-red-600 text-white font-bold text-lg py-2 px-4 rounded-full">無料価格でダウンロード</button>
        <button className="my-5 bg-transparent hover:bg-red-400 text-red-400 font-semibold hover:text-white text-lg py-2 px-4 border border-red-400 hover:border-transparent  rounded-full">BtoBサイト制作を相談</button>
        <Link className="bg-sky-200" href="/dashboard">Dashboard</Link>
        <IsLoggedin/>
        <LoginButton/>
        <LogoutButton/>
      </main>
      <footer className="h-[250px] bg-sky-200">

      </footer>
    </>
  );
}
