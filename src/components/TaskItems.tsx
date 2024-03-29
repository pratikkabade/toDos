import { useEffect, useState } from "react";
import { ReadURL } from "../constants/URLS";
import { CheckBox } from "../hooks/Checkbox";

export function TaskItems() {
    // SHEET
    const [task, setTask] = useState([])
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false)


    // SHEET FUNCTIONS
    const url = ReadURL;
    const fetchData = async () => {
        const response = await fetch(url);
        const values = await response.json();

        const taskalues = values.Tasks.name;
        // split val  by ,
        const yVal = taskalues.map((item: any) => {
            return {
                item: item.split(',')
            }
        })
        // return item vise allotment
        const yVAL = yVal.map((item: any) => {
            return {
                name: item.item[0],
                val: item.item[1]
            }
        })
        // dont return empty values
        const finalyVal = yVAL.filter((item: any) => {
            return item.val !== ''
        })
        setTask(finalyVal)

        setLoading(false)
    }


    function toggle() {
        setShow(!show)
    }

    // fix this Expected 0-1 arguments, but got 2.ts(2554) in useefecct
    useEffect(() => {
        fetchData()
    })

    return (
        <div className="mb-10 mt-5">
            {
                loading ?
                    <></>
                    :
                    !show ?
                        <div className="flex flex-row justify-center mt-20">
                            <button
                                className="px-4 py-2 text-sm font-lg text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white m-3 uppercase"
                                onClick={toggle}
                            >
                                <b>Tags</b>
                            </button>
                        </div>
                        :
                        <div className="flex flex-wrap flex-row mx-auto justify-center items-center fade-in2">
                            {task.map((item) => (
                                item.name.split(' ')[0] === 'sep' ?
                                    <a
                                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white m-3 uppercase"
                                        href={"#" + item.name.split(' ')[1]}
                                        key={item.name}
                                    >
                                        <b>{item.name.split(' ')[1]}</b>
                                    </a>
                                    :
                                    null
                            ))}
                        </div>
            }
            {
                loading ?
                    <div className="h-screen">
                        <h4 className="flex flex-row justify-center text-3xl font-bold mt-20">
                            <div role="status">
                                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                            </div>
                            Loading...</h4>

                    </div>
                    :
                    <div className="flex flex-row">
                        <div id="accordian" className="accordian fade-in2">
                            {task.map((item) => (
                                item.name.split(' ')[0] === 'sep' ?
                                    <a
                                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white m-3 uppercase"
                                        href={"#" + item.name.split(' ')[1]}
                                        key={item.name}
                                    >
                                        <b>{item.name.split(' ')[1]}</b>
                                    </a>
                                    :
                                    null
                            ))}
                        </div>
                        <div className="flex flex-col">
                            {task.map((item) => (
                                item.name.split(' ')[0] === 'sep' ?
                                    <>
                                        <div className="mb-20" id={item.name.split(' ')[1]}></div>
                                        <h1 className="border-blue-300 dark:border-blue-700 w-fit rounded-xl m-2 p-2 px-6 border-2 text-3xl font-extrabold my-3">{item.name.split(' ')[1]}</h1>
                                    </>
                                    :
                                    <div className="fade-in2">
                                        <CheckBox id={item.name} key={item.name} />
                                    </div>
                            ))}
                        </div>
                    </div>

            }

        </div >
    )
}
