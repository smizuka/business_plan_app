'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import ZoomAndDraggableImage from '@/components/ZoomAndDraggableImage'

export default function Page() {
    return (
        <div className="px-3 py-3 sm:ml-64 bg-white flex flex-col justify-between">
            <p className="py-2 my-2 flex items-center justify-left border-b-2 border-gray-300 text-black text-4xl">事業計画書の申請ステップ</p>

            <p className="text-black text-lg py-2">1. 会社概要について教えて下さい。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="col-span-1">
                    <div className="mb-2">
                        <textarea id="message" rows={4} className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="入力欄"></textarea>
                    </div>
                    <div className="mb-2 flex items-center justify-end">
                        <div className="py-2 w-1/4 border border-orange-300 bg-orange-300 rounded-md shadow-lg text-black text-lg text-bold text-center">生成</div>
                    </div>
                    <div className="mb-1 p-2.5 bg-gray-200 h-32 rounded-lg text-lg text-black">
                        AIの出力
                    </div>
                    <div className="mb-2 flex items-center justify-end">
                        <div className="py-2 w-1/4 border border-orange-300 bg-orange-300 rounded-md shadow-lg text-black text-lg text-bold text-center">コピー</div>
                    </div>
                </div>
                <div className="md:col-span-1">
                    <p className="text-black font-bold">※ 赤枠部分にペーストしてください。</p>
                    <div className="flex item-center justify-center">
                        <ZoomAndDraggableImage src="/example-1.png"  alt="会社概要" />
                    </div>
                </div>
            </div>
            <p className="text-black text-lg pt-4 pb-2">2. 売上について説明してください。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="col-span-1">
                    <div className="mb-1">
                        <textarea id="message" rows={4} className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="入力欄"></textarea>
                    </div>
                    <div className="mb-2 flex items-center justify-end">
                        <div className="py-2 w-1/4 border border-orange-300 bg-orange-300 rounded-md shadow-lg text-black text-lg text-bold text-center">生成</div>
                    </div>
                    <div className="mb-1 p-2.5 bg-gray-200 h-32 rounded-lg text-lg text-black">
                        AIの出力
                    </div>
                    <div className="mb-2 flex items-center justify-end">
                        <div className="py-2 w-1/4 border border-orange-300 bg-orange-300 rounded-md shadow-lg text-black text-lg text-bold text-center">コピー</div>
                    </div>
                </div>
                <div className="md:col-span-1">
                    <p className="text-black font-bold">※ 赤枠部分にペーストしてください。</p>
                    <div className="flex item-center justify-center">
                        <ZoomAndDraggableImage src="/example-1.png"  alt="会社概要" />
                    </div>
                </div>
            </div>
        </div>
    )
}