import Layout from "@/Pages/Layout/Layout";
import NotificationsUser from "../NotificationsUser";
import { useEffect, React } from "react";
import CommentsNotification from "../../CommentsNotification/CommentsNotification";
import { Link, usePage } from "@inertiajs/inertia-react";

function All() {

    const { auth } = usePage().props

    useEffect(() => {

    });

    return (
        <div>
            <CommentsNotification/>
            <CommentsNotification/>
            <div className="w-full p-14 bg-white rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)] min-h-[688.025px]">
                <div className="break-words">
                    <h3 className="text-2xl text-center sm:text-lg text-[#171717] mb-1">
                        You received the <strong>1 Week Community Wellness Streak</strong> badge
                    </h3>
                    <p className="text-center text-[#171717] text-lg mb-10">For posting at least 2 constructive comments in a single week.</p>
                    <div className="w-full border border-[#F3F3F3] rounded-lg p-3 grid justify-items-center items-center mb-4">
                        <div className="max-w-[152px] max-h-[200.025px]">
                            <img className="w-full h-full" src="https://res.cloudinary.com/practicaldev/image/fetch/s--GZrcRJz1--/c_limit,f_auto,fl_progressive,q_80,w_250/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/160/community-wellness-level-1-badge.png" alt="1 Week Community Wellness Streak" />
                        </div>
                        <p className="text-center text-[#575757] text-base">
                            <em>
                                Thank you for participating in constructive conversation! You posted two or more comments this week. Keep it up to continue the streak!
                            </em>
                        </p>
                    </div>
                    <div className="w-[320px] mb-4 grid justify-items-center mx-auto">
                        <Link className="w-full  min-h-[40px] flex items-center font-medium text-center justify-center text-base text-white bg-[#3B49DF] hover:bg-[#2F3AB2] rounded-lg" href={`/${auth?.user?.username}`}>Visit your profile</Link>
                    </div>
                    <p className="text-center text-[#171717] max-w-[480px] mb-3 mx-auto break-words">
                        You also get <Link className="hover:text-[#2F3AB2] font-bold text-[#3B49DF]">5 new credits</Link> to use for <Link className="text-[#3B49DF]">community listings</Link> if you have anything you'd like to promote. 🎉
                    </p>
                    <Link className="text-center text-[#717171] flex justify-center text-sm mx-auto">More information about listings</Link>
                </div>
            </div>
        </div>
    )
}

All.layout = page => (
    <Layout>
        <NotificationsUser children={page} />
    </Layout>
)

export default All;
