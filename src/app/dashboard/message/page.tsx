'use client'

export default function Page() {
    return (
        <div className="px-3 pb-3 sm:ml-64 bg-white flex flex-col justify-between min-h-screen">
            <p className="hidden md:block sticky top-0 py-10 w-full flex items-center justify-left border-b-2 border-gray-300 bg-white text-black text-4xl">補助金について質問する</p>
            <div className="md:top-32 grid grid-cols-1 my-4">
                {Array.from({ length: 10 }, (_, index) => (
                    <div key={`message-${index}`} className="flex flex-col">
                        <div className="flex items-center">
                            <div className="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center">
                            </div>           
                            <div className="font-bold text-black pl-2">****補助金のAI</div>
                        </div>
                        <div className="text-black mt-2 pl-10">
                            ここにテキストが入ります。テキストの先頭はアイコンの幅の分、インデントされます。ここにテキストが入ります。テキストの先頭はアイコンの幅の分、インデントされます。
                            ここにテキストが入ります。テキストの先頭はアイコンの幅の分、インデントされます。
                            ここにテキストが入ります。テキストの先頭はアイコンの幅の分、インデントされます。
                        </div>
                    </div>
                ))}
            </div>
            <div className="sticky bottom-2 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
                    <div className="grid-item col-span-3 flex items-center justify-center bg-orange-300 rounded-lg shadow-lg">
                    <textarea id="message" rows={4} className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="質問を入力してください"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}