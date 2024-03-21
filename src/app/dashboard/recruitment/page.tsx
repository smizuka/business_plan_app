'use client'

import Image from 'next/image';

export default function Page() {
    return (
        <div className="px-3 py-3 sm:ml-64 bg-white flex flex-col justify-between">
            <p className="py-2 my-2 flex items-center justify-left border-b-2 border-gray-300 text-black text-4xl">行政書士の紹介</p>

            <div className="grid grid-cols-1 md:grid-cols-3 my-3 gap-3">
                {Array.from({ length: 9 }, (_, index) => (
                    <div className="grid-item col-span-1">
                        <div className="max-w-md p-2 bg-white border border-gray-500 rounded-lg shadow-lg">
                            <a href="#">
                                <Image src="/office.png" alt="Logo" width={500} height={300} />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">*****行政書士事務所</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">事務所の説明など事務所の説明など事務所の説明など事務所の説明など事務所の説明など事務所の説明など事務所の説明など事務所の説明など事務所の説明など事務所の説明など事務所の説明など</p>
                                <div className="flex item-center justify-end">
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        ここに依頼する
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}  
            </div>
        </div>
    )
}