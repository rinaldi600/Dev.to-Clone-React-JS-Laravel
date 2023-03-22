import React, {useEffect} from "react";
import {useForm, usePage} from "@inertiajs/inertia-react";
import UndefinedImage from '../../../../img/undefined.png';

function UserSetting() {
    const { auth } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        name : auth?.user?.name,
        email : auth?.user?.email,
        username : auth?.user?.username,
        bio : auth?.user?.bio,
        profile_image : null,
        old_username : auth?.user?.username,
        old_email : auth?.user?.email
    });

    useEffect(() => {

    });

    const submit = (e) => {
        e.preventDefault();
        post('/settings_value_user');
    };

    return (
        <form onSubmit={submit} encType={'multipart/form-data'}>
            <div className={'mt-3 w-full pl-7 pt-5 gap-2 bg-white min-h-[144px] rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]'}>
                <h1 className={'font-bold text-2xl'}>User</h1>
                <div className={'mt-7 w-[90%] md:w-[688px] pb-3'}>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-base font-medium text-[#171717] dark:text-white">Name</label>
                        <input type="text" id="name"
                               className="bg-gray-50 border border-gray-300 text-[#171717] text-base rounded-lg focus:ring-[#3B49DF] focus:border-blue-500 block w-full p-2.5"
                               placeholder="John Doe" onChange={(e) => setData('name', e.target.value)}
                               value={data?.name}/>
                               {
                                errors?.hasOwnProperty('name') ?
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    <span className="font-medium">Oh, Error!</span> {errors.name}.</p>
                                    :
                                    ''
                               }
                    </div>
                    <div className={'mt-5'}>
                        <label htmlFor="email" className="block mb-2 text-base font-medium text-[#171717] dark:text-white">Email</label>
                        <input type="email" id="email" onChange={(e) => setData('email', e.target.value)}
                               className="bg-gray-50 border border-gray-300 text-[#171717] text-base rounded-lg focus:ring-[#3B49DF] focus:border-blue-500 block w-full p-2.5"
                               placeholder="john.doe@example.com" value={data?.email}/>
                               {
                                errors?.hasOwnProperty('email') ?
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    <span className="font-medium">Oh, Error!</span> {errors.email}.</p>
                                    :
                                    ''
                               }
                    </div>
                    <div className={'mt-5'}>
                        <label htmlFor="username" className="block mb-2 text-base font-medium text-[#171717] dark:text-white">Username</label>
                        <input type="text" id="username" onChange={(e) => setData('username', e.target.value)}
                               className="bg-gray-50 border border-gray-300 text-[#171717] text-base rounded-lg focus:ring-[#3B49DF] focus:border-blue-500 block w-full p-2.5"
                               placeholder="johndoe" value={data?.username}/>
                                {
                                errors?.hasOwnProperty('username') ?
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    <span className="font-medium">Oh, Error!</span> {errors.username}.</p>
                                    :
                                    ''
                               }
                    </div>
                    <div className={'mt-5'}>
                        <label htmlFor="profile_image" className="block mb-2 text-base font-medium text-[#171717] dark:text-white">Profile Image</label>
                        <div className={'flex items-center gap-2'}>
                            <div className={'w-[48px] h-[48px] border border-black overflow-hidden rounded-full'}>
                                <img className="w-full h-full" src={
                                    data.profile_image === null ?
                                    UndefinedImage : URL.createObjectURL(data.profile_image)
                                    } alt="Photo Profile" />
                            </div>
                            <div className={'h-[64px] p-2 rounded-lg w-[90%] grid items-center bg-[#FAFAFA]'}>
                                <input onChange={(e) => setData('profile_image', e.target.files[0])} accept="image/png, image/jpeg" className="block w-full text-sm text-gray-900 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    id="profile_image" type="file"/>
                            </div>
                        </div>
                        {
                            errors?.hasOwnProperty('profile_image') ?
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <span className="font-medium">Oh, Error!</span> {errors.profile_image}.</p>
                                :
                                ''
                        }
                    </div>
                    <div className={'mt-5'}>
                        <label htmlFor="bio" className="block mb-2 text-base font-medium text-[#171717] dark:text-white">Your
                            Bio</label>
                        <textarea onChange={(e) => setData('bio', e.target.value)} id="bio" rows="4" value={data?.bio}
                                  className="block p-2.5 w-full text-base text-[#171717] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="A short bio..."/>
                        {
                            errors?.hasOwnProperty('bio') ?
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <span className="font-medium">Oh, Error!</span> {errors.bio}.</p>
                                :
                                ''
                        }
                    </div>
                </div>
            </div>

            <div className={'w-full flex flex-wrap justify-center mt-7 gap-2 bg-white min-h-[88px] rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]'}>
                <div className={'w-full flex justify-center items-center'}>
                    <button disabled={processing} className={'break-words w-[90%] min-h-[40px] bg-[#3B49DF] hover:bg-[#2F3AB2] font-medium text-white rounded-lg'}>
                        Save Profile Information
                    </button>
                </div>
            </div>
        </form>
    )
}

export default UserSetting;
