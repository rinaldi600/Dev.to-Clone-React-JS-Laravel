import React, {useEffect, useState} from "react";
import {usePage} from "@inertiajs/inertia-react";

function UserSetting() {
    const { auth } = usePage().props;
    const [userInformation, setUserInformation] = useState({
        name : auth?.user?.name,
        email : auth?.user?.email,
        username : auth?.user?.username,
        bio : auth?.user?.bio,
        profile_image : auth?.user?.profile_image,
    });

    useEffect(() => {
        console.log(userInformation);
    });

    return (
        <form>
            <div className={'mt-3 w-full pl-7 pt-5 gap-2 bg-white min-h-[144px] rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]'}>
                <h1 className={'font-bold text-2xl'}>User</h1>
                <div className={'mt-7 w-[90%] md:w-[688px] pb-3'}>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-base font-medium text-[#171717] dark:text-white">Name</label>
                        <input type="text" id="name"
                               className="bg-gray-50 border border-gray-300 text-[#171717] text-base rounded-lg focus:ring-[#3B49DF] focus:border-blue-500 block w-full p-2.5"
                               placeholder="John Doe" onChange={(e) => setUserInformation( prevState => ({
                            ...prevState,
                            name : e.target.value,
                        }))}
                               value={userInformation?.name}/>
                    </div>
                    <div className={'mt-5'}>
                        <label htmlFor="email" className="block mb-2 text-base font-medium text-[#171717] dark:text-white">Email</label>
                        <input type="email" id="email" onChange={(e) => setUserInformation( prevState => ({
                            ...prevState,
                            email : e.target.value,
                        }))}
                               className="bg-gray-50 border border-gray-300 text-[#171717] text-base rounded-lg focus:ring-[#3B49DF] focus:border-blue-500 block w-full p-2.5"
                               placeholder="john.doe@example.com" value={userInformation?.email}/>
                    </div>
                    <div className={'mt-5'}>
                        <label htmlFor="username" className="block mb-2 text-base font-medium text-[#171717] dark:text-white">Username</label>
                        <input type="text" id="username" onChange={(e) => setUserInformation( prevState => ({
                            ...prevState,
                            username : e.target.value,
                        }))}
                               className="bg-gray-50 border border-gray-300 text-[#171717] text-base rounded-lg focus:ring-[#3B49DF] focus:border-blue-500 block w-full p-2.5"
                               placeholder="johndoe" value={userInformation?.username}/>
                    </div>
                    <div className={'mt-5'}>
                        <label htmlFor="profile_image" className="block mb-2 text-base font-medium text-[#171717] dark:text-white">Profile Image</label>
                        <div className={'flex items-center gap-2'}>
                            <div className={'w-[48px] h-[48px] bg-yellow-300 rounded-full'}>
                            </div>
                            <div className={'h-[64px] p-2 rounded-lg w-[90%] grid items-center bg-[#FAFAFA]'}>
                                <input
                                    className="block w-full text-sm text-gray-900 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    id="profile_image" type="file"/>
                            </div>
                        </div>
                    </div>
                    <div className={'mt-5'}>
                        <label htmlFor="bio" className="block mb-2 text-base font-medium text-[#171717] dark:text-white">Your
                            Bio</label>
                        <textarea onChange={(e) => setUserInformation( prevState => ({
                            ...prevState,
                            bio : e.target.value,
                        }))} id="bio" rows="4" value={userInformation?.bio}
                                  className="block p-2.5 w-full text-base text-[#171717] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="A short bio..."/>
                    </div>
                </div>
            </div>
            <div className={'w-full flex flex-col flex-wrap justify-center pl-7 gap-2 bg-white min-h-[88px] rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]'}>
                <button className={'w-[90%] md:w-[239px] min-h-[40px] bg-[#0A3E4A] font-medium text-white rounded-lg'}>Connect Forem Account</button>
            </div>
        </form>
    )
}

export default UserSetting;
