'use client'
export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <div className="bg-white">
        <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>

        <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-cyan-100 dark:bg-cyan-200">
            <ul className="space-y-2 font-medium">
                <li>
                    <a href="/dashboard" className="flex items-center justify-center p-2 rounded-lg bg-gray-400 group">
                        <span className="text-xl font-bold text-white">ダッシュボードTOP</span>
                    </a>
                </li>
                <li>
                    <a href="/dashboard/aiselect" className="flex items-center p-2 text-gray-500 hover:text-white rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-400 group">
                    <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-500 group-hover:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7.205c4.418 0 8-1.165 8-2.602C20 3.165 16.418 2 12 2S4 3.165 4 4.603c0 1.437 3.582 2.602 8 2.602ZM12 22c4.963 0 8-1.686 8-2.603v-4.404c-.052.032-.112.06-.165.09a7.75 7.75 0 0 1-.745.387c-.193.088-.394.173-.6.253-.063.024-.124.05-.189.073a18.934 18.934 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.073a10.143 10.143 0 0 1-.852-.373 7.75 7.75 0 0 1-.493-.267c-.053-.03-.113-.058-.165-.09v4.404C4 20.315 7.037 22 12 22Zm7.09-13.928a9.91 9.91 0 0 1-.6.253c-.063.025-.124.05-.189.074a18.935 18.935 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.074a10.163 10.163 0 0 1-.852-.372 7.816 7.816 0 0 1-.493-.268c-.055-.03-.115-.058-.167-.09V12c0 .917 3.037 2.603 8 2.603s8-1.686 8-2.603V7.596c-.052.031-.112.059-.165.09a7.816 7.816 0 0 1-.745.386Z"/>
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap text-xl font-bold text-gray-500 dark:group-hover:text-white">AIを選択する</span>
                    </a>
                </li>
                <li>
                    <a href="/dashboard/message" className="flex items-center p-2 text-gray-500 hover:text-white rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-400 group">
                    <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-500 group-hover:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z" clipRule="evenodd"/>
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap text-xl font-bold text-gray-500 dark:group-hover:text-white">AIに質問する</span>
                    </a>
                </li>
                <li>
                    <a href="/dashboard/application" className="flex items-center p-2 text-gray-500 hover:text-white rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-400 group">
                    <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-500 group-hover:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clipRule="evenodd"/>
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap text-xl font-bold text-gray-500 dark:group-hover:text-white">申請ステップ</span>
                    </a>
                </li>
                <li>
                    <a href="/dashboard/recruitment" className="flex items-center p-2 text-gray-500 hover:text-white rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-400 group">
                    <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-500 group-hover:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap text-xl font-bold text-gray-500 dark:group-hover:text-white">行政書士を探す</span>
                    </a>
                </li>
                <li>
                    <a href="/dashboard/mypage" className="flex items-center p-2 text-gray-500 hover:text-white rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-400 group">
                    <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-500 group-hover:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clipRule="evenodd"/>
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap text-xl font-bold text-gray-500 dark:group-hover:text-white">マイページ</span>
                    </a>
                </li>
                <li>
                    <a href="/dashboard/mypage" className="flex items-center p-2 text-gray-500 hover:text-white rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-400 group">
                    <svg className="w-6 h-6 dark:text-gray-500 group-hover:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.027 10.9a8.729 8.729 0 0 1 6.422-3.62v-1.2A2.061 2.061 0 0 1 12.61 4.2a1.986 1.986 0 0 1 2.104.23l5.491 4.308a2.11 2.11 0 0 1 .588 2.566 2.109 2.109 0 0 1-.588.734l-5.489 4.308a1.983 1.983 0 0 1-2.104.228 2.065 2.065 0 0 1-1.16-1.876v-.942c-5.33 1.284-6.212 5.251-6.25 5.441a1 1 0 0 1-.923.806h-.06a1.003 1.003 0 0 1-.955-.7A10.221 10.221 0 0 1 5.027 10.9Z"/>
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap text-xl font-bold text-gray-500 dark:group-hover:text-white">サイトトップ</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-500 hover:text-white rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-400 group">
                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-500 group-hover:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap text-xl font-bold text-gray-500 dark:group-hover:text-white">ログアウト</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-500 hover:text-white rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-400 group">
                        <span className="flex-1 ms-3 whitespace-nowrap text-xl font-bold text-gray-500 dark:group-hover:text-white">※ 当サービスについて</span>
                    </a>
                </li>
            </ul>
        </div>
        </aside>
        {children}
    </div>
    )
  }