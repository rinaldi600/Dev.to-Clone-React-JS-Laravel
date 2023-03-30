import Layout from "@/Pages/Layout/Layout";
import { Head } from "@inertiajs/inertia-react";

function NotificationsUser() {
    return (
        <>
            <Head title="Notifications - DEV Community" />
            <div className="min-h-screen pt-7 bg-[#F5F5F5] font-['Segoe_UI']">
                <div className="max-w-[992px] bg-red-300 min-h-[200px] mx-auto">
                    <h1 className="font-bold text-3xl text-[#090909]">Notifications</h1>
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
