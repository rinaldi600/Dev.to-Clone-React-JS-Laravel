import { useEffect } from "react";
import { Link } from "@inertiajs/inertia-react";

function NotAllowedComment({closeAlertComment}) {

    useEffect(() => {

    })

    return (
        <div className="fixed inset-0 flex justify-items-center items-center w-full overflow-hidden bg-black/60">
            <div className="w-full">
                <div className="max-w-[640px] mx-auto overflow-hidden rounded-lg min-h-[308px] bg-white">
                    <div className="min-h-[56.8px] pl-4 pr-4 flex justify-between items-center border-b border-gray-200">
                        <h2 className="font-bold text-xl text-[#242424]">Log in to continue</h2>
                        <div onClick={() => closeAlertComment(false)} className="w-[40px] hover:text-[#2F3AB2] flex items-center justify-center cursor-pointer h-[40px] rounded-lg hover:bg-[#EBECFC]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-full pl-5 pr-5 pt-8">
                        <div className="w-[80px] rotate-[-10deg] h-[80px] rounded-lg overflow-hidden">
                            <img className="w-full h-full" src="https://res.cloudinary.com/practicaldev/image/fetch/s--pcSkTMZL--/c_limit,f_auto,fl_progressive,q_80,w_190/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png" alt="DEV Community" loading="lazy" />
                        </div>
                        <div className="pt-5">
                            <p className="text-base text-gray-700 break-words">We're a place where coders share, stay up-to-date and grow their careers.</p>
                            <Link href="/" className="max-w-[480px] h-[40px] rounded-lg bg-[]">Log In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotAllowedComment;
