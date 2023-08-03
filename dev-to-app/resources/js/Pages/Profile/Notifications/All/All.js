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
            <div className="min-h-[196.8px] p-5 rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)] bg-white w-full">
                <div className="flex flex-wrap gap-2 items-center">
                    <img src={TestBGProfile} className="overflow-hidden sm:mx-auto rounded-full w-[48px] h-[48px]" alt="" />
                    <div className="flex flex-col justify-start items-start">
                        <h2 className="text-[#171717] text-base">
                            <Link className="font-bold hover:text-[#2F3AB2]" href="/doni50">Rinaldi Hendrawan </Link>
                            commented on <Link href="/doni50/fushimi-inari-shrine" className="font-bold hover:text-[#2F3AB2]">TEST TRIAL</Link>
                        </h2>
                        <Link className="text-sm text-[#717171]" href="/">about 24 hours ago</Link>
                    </div>
                </div>

                <div className="mt-3 flex justify-end w-full min-h-[88.5px]">
                    <div className="w-[92%] sm:w-full pl-2 pr-2 border border-[#EFEFEF] overflow-hidden rounded-lg min-h-fit">
                        <div className="border-b border-[#EFEFEF] flex items-center min-h-[52px]">
                            <p>Coba</p>
                        </div>
                    </div>
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
