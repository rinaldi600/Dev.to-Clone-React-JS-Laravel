import { Head } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import { useEffect } from "react";

function NotificationsUser({children}) {

    let styleLink = `p-2 hover:bg-[#E2E3F3] cursor-pointer h-fit rounded-lg hover:text-[#2F3ABC] text-[#404040] text-base hover:font-medium`;

    useEffect(() => {

    });

    return (
        <>
            <Head title="Notifications - DEV Community" />
            <div className="min-h-screen pt-7 bg-[#F5F5F5] font-['Segoe_UI']">
                <div className="max-w-[992px] min-h-[200px] mx-auto">
                    <h1 className="font-bold text-3xl text-[#090909]">Notifications</h1>
                    <div className="md:flex gap-0 flex-wrap pt-10 min-h-[200px]">
                        <div className="md:w-[25%] md:block flex justify-center font-['Segoe_UI'] w-full h-fit">
                            <ul className="flex md:block">
                                <li className={`${styleLink} ${window.location.pathname === '/notifications' ? 'bg-white' : ''}`}>
                                    <Link className="w-full inline-block" href="/notifications">All</Link>
                                </li>
                                <li className={`${styleLink} ${window.location.pathname === '/notifications/comments' ? 'bg-white' : ''}`}>
                                    <Link className="w-full inline-block" href="/notifications/comments">Comments</Link>
                                </li>
                                <li className={`${styleLink} ${window.location.pathname === '/notifications/posts' ? 'bg-white' : ''}`}>
                                    <Link className="w-full inline-block" href="/notifications/posts">Posts</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="pl-4 md:w-[75%] w-full h-fit">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotificationsUser;
