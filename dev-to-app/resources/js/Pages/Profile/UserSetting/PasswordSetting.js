import Setting from "../Setting/Setting";
import { useForm } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";
import { useEffect } from "react";

function PasswordSetting() {

    const { auth } = usePage().props
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    })

    useEffect(() => {
        console.log(auth);
    })

    const submit = (e) => {
        e.preventDefault();
        console.log("WORK");
        // post('/settings_value_user');
    };

    return (
        <form onSubmit={submit} encType={'multipart/form-data'}>
            <div className={'mt-3 w-full pl-7 pt-5 bg-white min-h-[144px] rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]'}>
                <h1 className={'font-bold text-2xl'}>Set New Password</h1>
                <p className="break-words text-justify w-[90%] mt-3 text-[#575757] text-base"> If your account was created using social account authentication, you may prefer to add an email log in. If you signed up with a social media account, <Link className="text-[#3b49df]" href="#">please reset the password</Link> for your primary email address ({auth?.user?.email}) in order to enable this. Please note that email login is in addition to social login rather than a replacement for it, so your authenticated social account will continue to be linked to your account.
                </p>
                <div className={'mt-7 w-[90%] md:w-[688px] pb-3'}>
                    <div>
                        <label htmlFor="current_password" className="block mb-2 text-base font-medium text-[#171717] dark:text-white">Current Password</label>
                        <input type="password" id="current_password"
                            className="bg-gray-50 border border-gray-300 text-[#171717] text-base rounded-lg focus:ring-[#3B49DF] focus:border-blue-500 block w-full p-2.5" name="current_password"/>
                    </div>
                </div>
                <div className={'mt-2 w-[90%] md:w-[688px] pb-3'}>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-base font-medium text-[#171717] dark:text-white">Password</label>
                        <input type="password" id="password"
                            className="bg-gray-50 border border-gray-300 text-[#171717] text-base rounded-lg focus:ring-[#3B49DF] focus:border-blue-500 block w-full p-2.5" name="password"/>
                    </div>
                </div>
                <div className={'mt-2 w-[90%] md:w-[688px] pb-3'}>
                    <div>
                        <label htmlFor="confirm_password" className="block mb-2 text-base font-medium text-[#171717] dark:text-white">Confirm Password</label>
                        <input type="password" id="confirm_password"
                            className="bg-gray-50 border border-gray-300 text-[#171717] text-base rounded-lg focus:ring-[#3B49DF] focus:border-blue-500 block w-full p-2.5" name="confirm_password"/>
                    </div>
                </div>
                <div className={'w-full mt-7 gap-2 bg-white min-h-[88px]'}>
                    <div className={'w-full flex'}>
                        <button disabled={processing} className={'break-words w-[90%] min-h-[40px] bg-[#3B49DF] hover:bg-[#2F3AB2] font-medium text-white rounded-lg'}>
                            Set New Password
                        </button>
                    </div>
                </div>
            </div>
    </form>
    )
}

PasswordSetting.layout = page => <Setting children={page} title="Settings - DEV Community" />

export default PasswordSetting;
