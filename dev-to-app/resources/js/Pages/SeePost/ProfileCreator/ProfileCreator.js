import { useEffect, useRef, useState } from "react";
import moment from 'moment';

function ProfileCreator({detailUser}) {

    const divBackgroundColor = useRef();
    const [bgColor, setBgColor] = useState(Math.floor(Math.random()*16777215).toString(16))

    useEffect(() => {
        console.log(divBackgroundColor.current);
        divBackgroundColor.current.style.backgroundColor = `#${bgColor}`;
    });

    const changeBgColor = (e) => {

    };

    return (
        <div className="min-h-fit border border-[#EAEAEA] rounded-lg bg-white w-full overflow-hidden">
            <div ref={divBackgroundColor} className={`h-[30px] bg-red-300 w-full`}>

            </div>
            <div className="min-h-[50px] mt-[-30px] pt-2 mx-auto w-[90%]">
                <div className="flex items-end gap-2">
                    <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                        {
                            detailUser.profile_image === '' ?
                            <div className="flex justify-end items-center bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[48px] h-[48px]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            :
                            <img className="w-full h-full" src={`${detailUser.profile_image}`} alt="Profile Image Creator" />
                        }
                    </div>
                    <p onClick={changeBgColor} className="font-bold text-xl">{detailUser.name}</p>
                </div>
                <div className="pt-3 p-2">
                    <button type="button" className="min-h-[40px] w-full bg-[#3B49DF] hover:bg-[#2F3AB2] rounded-lg text-[#F9F9F9] font-medium text-base">Follow</button>
                    <div className="pt-3">
                        <p className="text-[#575757] text-base break-words">{detailUser.bio === '' ? '-' : detailUser.bio}</p>
                        <p className="text-[#525252] pt-3 font-bold text-base">Education</p>
                        <p className="text-[#404040] text-base break-words">{detailUser.education === '' ? '-' : detailUser.education}</p>
                        <p className="text-[#525252] pt-2 font-bold text-base">Joined</p>
                        <p className="text-[#404040] text-base break-words">{moment(detailUser.created_at).format('LLL')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCreator;
