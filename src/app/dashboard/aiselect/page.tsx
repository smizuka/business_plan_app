'use client'
import React, { useState, FormEvent, useEffect } from 'react';
import {GRANTS, GRANT_CATEGORIES_1, GRANT_CATEGORIES_2, GRANT_CATEGORIES_4} from '@/utils/constants'

export default function Page() {
    const [question1Value, setQuestion1Value] = useState<number>(0);
    const [question2Value, setQuestion2Value] = useState<number>(0);
    const [question3Value, setQuestion3Value] = useState<number>(0);
    const [question4Value, setQuestion4Value] = useState<number>(0);

    const categories: String[] = ["製造業、建設業、運輸業","卸売業","サービス業","小売業","ゴム製品製造業","ソフトウェア業又は情報処理サービス業","旅館業","その他の業種（上記以外）"];
    const staffs: String[] = ["個人事業主","５名以下","５ー２０名以下","２０−５０名以下","５０ー１００名以下","１００−２００名以下","２００−３００名以下"];
    const mainCategories: String[] = ["サイト作成","ツール導入","制作、開発","広報施策","その他"];
    const subCateogories: string[][] = [["ECサイト制作","ホームページ制作"],["業務改善ツール","インボイス対応ツール","会計ツール"],["システム開発","デザイン外注費","アプリ開発","外注費"],["SNS運用","MEO SEO","DM チラシ","屋外広告"],["設備処分","PC、タブレット等の購入費","建物費　原状回復費用","専門家経費","研修費"]];

    const handleRadioButtonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case 'question1':
                setQuestion1Value(Number(value));
                break;
            case 'question2':
                setQuestion2Value(Number(value));
                break;
            case 'question3':
                setQuestion3Value(Number(value));
                break;
            default:
                setQuestion4Value(Number(value));
        }
    };

    const determine_grant = (): string => {

        // # 問１ 業種
        const eligible_by_question1: string[] = GRANT_CATEGORIES_1[question1Value];
        // # 問２ 常勤の従業員数
        const eligible_by_question2: string[] = GRANT_CATEGORIES_2[question2Value];
        const eligible_by_question4: string[] = GRANT_CATEGORIES_4[String(question3Value+1)][String(question4Value+1)];

        // 業種と常勤従業員数から補助金の種類から該当する補助金を選定する
        const eligible_grants: string[] = eligible_by_question1.filter((element: string) => eligible_by_question2.includes(element));
        
        if ( eligible_by_question4.length === 1) {
            if( eligible_grants.includes(eligible_by_question4[0]) ){
                return `あなたの補助金は ${eligible_by_question4[0]} です`;
            }
        } else {
            if( eligible_grants.includes(eligible_by_question4[0]) ){
                return `あなたの補助金は ${eligible_by_question4[0]} です`;
            } else {
                return `あなたの補助金は ${eligible_by_question4[1]} です`;
            }
        }
        return "該当する補助金はありません。"
    }

    return (
        <div className="px-3 py-1 sm:ml-64 bg-white">
            <p className="py-2 flex items-center justify-left border-b-2 border-gray-300 text-black text-4xl">補助金の判定</p>
            <div className="grid grid-cols-1 mt-4 mb-4">
                <div className="pl-3 py-3 bg-gray-50 dark:bg-gray-200 rounded shadow-md">
                    <p className="mb-3 text-xl text-gray-400 dark:text-gray-500">
                        Q1. 業種で該当するものを選択してください。
                    </p>
                    {categories.map((category, index) => (
                        <div className="flex items-center">
                            <input
                                key={`question-1-key-${index}`}
                                id={`question-1-id-${index}`}
                                type="radio"
                                name="question1"
                                value={index}
                                checked={question1Value === index}
                                onChange={handleRadioButtonChange}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                            <label key={`question-1-label-${index}`} htmlFor={`question-1-id-${index}`} className="ms-2 text-sm font-medium dark:text-black">{category}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 mt-2 mb-4">
                <div className="pl-3 py-3 bg-gray-50 dark:bg-gray-200 rounded shadow-md">
                    <p className="mb-3 text-xl text-gray-400 dark:text-gray-500">
                    Q2. 常勤の従業員数で該当するものを選択してください。
                    </p>
                    {staffs.map((staff, index) => (
                        <div className="flex items-center">
                            <input 
                                key={`question-2-key-${index}`}
                                id={`question-2-id-${index}`}
                                type="radio"
                                name="question2"
                                value={index}
                                checked={question2Value === index}
                                onChange={handleRadioButtonChange}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                            <label key={`question-2-label-${index}`} htmlFor={`question-2-id-${index}`} className="ms-2 text-sm font-medium dark:text-black">{staff}</label>
                        </div>
                    ))}
                </div>
            </div>        
            <div className="grid grid-cols-1 mt-2 mb-4">
                <div className="pl-3 py-3 bg-gray-50 dark:bg-gray-200 rounded shadow-md">
                    <p className="mb-3 text-xl text-gray-400 dark:text-gray-500">
                    Q3. 以下の選択肢からやりたい事（大分類）を選択してください。
                    </p>
                    {mainCategories.map((mainCategory, index) => (
                        <div className="flex items-center">
                            <input 
                                key={`question-3-key-${index}`} 
                                id={`question-3-id-${index}`}
                                type="radio"
                                name="question3"
                                value={index}
                                checked={question3Value === index}
                                onChange={handleRadioButtonChange}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                />
                            <label key={`question-3-label-${index}`} htmlFor={`question-3-id-${index}`} className="ms-2 text-sm font-medium dark:text-black">{mainCategory}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 mt-2 mb-4">
                <div className="pl-3 py-3 bg-gray-50 dark:bg-gray-200 rounded shadow-md">
                    <p className="mb-3 text-xl text-gray-400 dark:text-gray-500">
                    Q4. 以下の選択肢からやりたい事（小分類）を選択してください。
                    </p>
                    {subCateogories[question3Value].map((subCategory, index) => (
                        <div className="flex items-center">
                            <input 
                                key={`question-4-key-${index}`}
                                id={`question-4-id-${index}`}
                                type="radio"
                                name="question4"
                                value={index}
                                checked={question4Value === index}
                                onChange={handleRadioButtonChange}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                />
                            <label key={`question-4-label-${index}`} htmlFor={`question-4-id-${index}`} className="ms-2 text-sm font-medium dark:text-black">{subCategory}</label>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="grid grid-cols-1 my-2">
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-200">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                    Q4. テンプレート
                    </p>
                </div>
            </div> */}
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
                <div className="grid-item col-span-1 md:col-span-2 flex items-center justify-center h-24 rounded border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                        {determine_grant()}
                    </p>
                </div>
                <div className="grid-item col-span-1 flex items-center justify-center h-24 bg-orange-400 rounded-lg shadow-lg">
                    <button className="text-white font-bold text-2xl">このAIで設定</button>
                </div>
            </div>
        </div>
    )
}