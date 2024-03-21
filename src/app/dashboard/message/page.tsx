'use client'

export default function Page() {
    return (
        <div className="px-3 py-3 sm:ml-64 bg-white flex flex-col justify-between min-h-screen">
            <p className="py-2 flex items-center justify-left border-b-2 border-gray-300 text-black text-4xl">*****補助金のAI</p>
            <div className="grid grid-cols-1 my-4 flex-grow">
                {Array.from({ length: 5 }, (_, index) => (
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <div className="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center">
                            </div>           
                            <div className="font-bold text-black pl-2">ChatGPT</div>
                        </div>
                        <div className="text-black mt-2 pl-10">
                            ここにテキストが入ります。テキストの先頭はアイコンの幅の分、インデントされます。ここにテキストが入ります。テキストの先頭はアイコンの幅の分、インデントされます。
                            ここにテキストが入ります。テキストの先頭はアイコンの幅の分、インデントされます。
                            ここにテキストが入ります。テキストの先頭はアイコンの幅の分、インデントされます。
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2 my-2">
                <div className="grid-item col-span-3 flex items-center justify-center h-24 bg-orange-300 rounded-lg shadow-lg">
                <textarea id="message" rows={4} className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="質問を入力してください"></textarea>
                </div>
            </div>
        </div>
    )
}