import React, {useEffect} from "react";
import {usePage} from "@inertiajs/inertia-react";

function UserSetting() {
    const { auth } = usePage().props;

    useEffect(() => {
       console.log(auth);
    });

    return (
        <div className={'mt-3 w-full pl-7 pt-5 gap-2 bg-white min-h-[144px] rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]'}>
            <h1 className={'font-bold text-2xl'}>User</h1>
            <div className={'mt-7 w-[90%] md:w-[688px] pb-3'}>
                <div>
                    <label htmlFor="name" className="block mb-2 text-base font-medium text-[#171717] dark:text-white">Name</label>
                    <input type="text" id="name"
                           className="bg-gray-50 border border-gray-300 text-[#171717] text-base rounded-lg focus:ring-[#3B49DF] focus:border-blue-500 block w-full p-2.5"
                           placeholder="John Doe" required/>
                </div>
                <div className={'mt-5'}>
                    <label htmlFor="name" className="block mb-2 text-base font-medium text-[#171717] dark:text-white">Name</label>
                    <input type="text" id="name"
                           className="bg-gray-50 border border-gray-300 text-[#171717] text-base rounded-lg focus:ring-[#3B49DF] focus:border-blue-500 block w-full p-2.5"
                           placeholder="John Doe" required/>
                </div>
                <div className={'mt-5'}>
                    <label htmlFor="name" className="block mb-2 text-base font-medium text-[#171717] dark:text-white">Name</label>
                    <input type="text" id="name"
                           className="bg-gray-50 border border-gray-300 text-[#171717] text-base rounded-lg focus:ring-[#3B49DF] focus:border-blue-500 block w-full p-2.5"
                           placeholder="John Doe" required/>
                </div>
                <div className={'mt-5'}>
                    <label htmlFor="bio" className="block mb-2 text-base font-medium text-[#171717] dark:text-white">Your
                        Bio</label>
                    <textarea id="bio" rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."/>
                </div>
            </div>
        </div>
    )
}

export default UserSetting;
