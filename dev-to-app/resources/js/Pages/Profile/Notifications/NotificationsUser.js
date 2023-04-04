import Layout from "@/Pages/Layout/Layout";
import { Head } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";

function NotificationsUser() {
    const styleLink = "p-2 hover:bg-[#E2E3F3] h-fit rounded-lg hover:text-[#2F3ABC] text-[#404040] text-base hover:font-medium"
    return (
        <>
            <Head title="Notifications - DEV Community" />
            <div className="min-h-screen pt-7 bg-[#F5F5F5] font-['Segoe_UI']">
                <div className="max-w-[992px] min-h-[200px] mx-auto">
                    <h1 className="font-bold text-3xl text-[#090909]">Notifications</h1>
                    <div className="md:flex gap-0 flex-wrap pt-10 min-h-[200px]">
                        <div className="md:w-[25%] md:block flex justify-center font-['Segoe_UI'] w-full h-fit">
                            <ul className="flex md:block">
                                <li className={styleLink}>
                                    <Link href="/notifications">All</Link>
                                </li>
                                <li className={styleLink}>
                                    <Link href="/notifications/comments">Comments</Link>
                                </li>
                                <li className={styleLink}>
                                    <Link href="/notifications/posts">Posts</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-[75%] w-full bg-green-300 h-fit">
                            <h1>WORK</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

NotificationsUser.layout = page => (
    <Layout>
        <NotificationsUser children={page}/>
    </Layout>
);

export default NotificationsUser;
