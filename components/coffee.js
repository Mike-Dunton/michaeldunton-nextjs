import 'tailwindcss/tailwind.css'
import { useState } from 'react'


export default function Coffee() {
    const [weight, setWeight] = useState(20)
    const [ratio, setRatio] = useState(17.5)
    return (
            <div
                className="p-4 max-w-md bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="#">
                    <div>
                        <label htmlFor="ratio"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Water:Bean Ratio</label>
                        <input name="ratio" id="ratio"
                               value={ratio}
                               onChange={e => setRatio(e.target.value)}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                    </div>
                    <div>

                        <label htmlFor="grams"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Coffee weight</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                               id='grams'
                               type='text'
                               placeholder='Grams'
                               value={weight}
                               onChange={e => setWeight(e.target.value)} />
                    </div>
                    <div className="flex items-stretch">
                        <div className="flex flex-col">
                            <div className="flex h-5">
                                <label className="block text-gray-500 font-bold md:text-right pr-2"
                                       htmlFor="stepone">
                                    Step One:
                                </label>
                                <p id='stepone' className="font-normal text-gray-700 dark:text-gray-400"> Add  <span className="font-bold">{weight*2}</span> grams of water and stir</p>
                            </div>
                            <div className="flex h-5">
                                <label className="block text-gray-500 font-bold md:text-right pr-2"
                                       htmlFor="steptwo">
                                    Step Two:
                                </label>
                                <p id='steptwo' className="font-normal text-gray-700 dark:text-gray-400"> Add water until the scale reads  <span className="font-bold">{(weight*ratio*.60).toFixed(2)}</span></p>
                            </div>
                            <div className="flex  h-5">
                                <p className="grow text-gray-500 font-bold md:text-right pr-2">
                                    Step Three:
                                </p>
                                <p id='steptwo' className="font-normal text-gray-700 dark:text-gray-400"> Add water until the scale reads  <span className="font-bold">{weight*ratio}</span></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    )
}