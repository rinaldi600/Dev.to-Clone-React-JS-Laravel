import Layout from "@/Pages/Layout/Layout";
import NotificationsUser from "../NotificationsUser";
import { useEffect } from "react";
import TestBGProfile from '../../../../../img/aiony-haust-3TLl_97HNJo-unsplash.jpg';
import { Link } from "@inertiajs/inertia-react";

function All() {

    useEffect(() => {

    });

    return (
        <div>
            <div className="min-h-[196.8px] rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)] bg-white w-full">
                <div className="flex gap-2 items-center">
                    <img src={TestBGProfile} className="overflow-hidden rounded-full w-[48px] h-[48px]" alt="" />
                    <div className="flex items-center">
                        <h2>
                            <Link href="/doni50">Rinaldi Hendrawan </Link>
                            commented on TEST TRIAL
                        </h2>
                    </div>
                </div>
                <div>

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
