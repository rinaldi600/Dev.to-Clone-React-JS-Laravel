import { useEffect } from "react";
import moment from 'moment';

function ProfileCreator({detailUser}) {

    useEffect(() => {
        console.log(detailUser);
    });

    return (
        <div className="min-h-fit border border-[#EAEAEA] rounded-lg bg-white w-full overflow-hidden">
            <div className="h-[30px] bg-black w-full">

            </div>
            <div className="min-h-[50px] mt-[-30px] pt-2 mx-auto w-[90%]">
                <div className="flex items-end gap-2">
                    <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                        <img className="w-full h-full" src={`${detailUser.profile_image}`} alt="Profile Image Creator" />
                    </div>
                    <p className="font-bold text-xl">{detailUser.name}</p>
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
