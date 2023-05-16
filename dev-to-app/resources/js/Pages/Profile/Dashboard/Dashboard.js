import Layout from "@/Pages/Layout/Layout";
import DetailBoxStatistic from "./DetailBoxStatistic/DetailBoxStatistic";
import { Head, Link } from "@inertiajs/inertia-react";
import LinkDashboard from "./LinkDashboard/LinkDashboard";
import PostBox from "./PostBox/PostBox";

function Dashboard() {
    return (
        <>
            <Head title="Dashboard - DEV Community" />
            <div className="min-h-screen bg-[#F5F5F5]">
                <div className="min-h-fit font-['Segoe_UI'] max-w-[1280px] pt-9 mx-auto">
                    <h1 className="font-bold text-3xl text-[#090909] p-2">Dashboard</h1>
                    <div className="flex w-full flex-wrap gap-4 pt-6 justify-center">
                        <DetailBoxStatistic count={0} desc={'Total post reactions'}/>
                        <DetailBoxStatistic count={'< 500'} desc={'Total post views'}/>
                        <DetailBoxStatistic count={5} desc={'Credits available'}/>
                        <DetailBoxStatistic count={0} desc={'Listings created'}/>
                    </div>
                    <div className="w-full flex gap-2 mt-4 p-2 flex-wrap min-h-[416px]">
                        <div className="min-h-full w-full lg:w-[18%] relative">
                            <div className="sticky top-0">
                                <LinkDashboard/>
                            </div>
                        </div>
                        <div className="p-2 w-full min-h-full lg:w-[80%] relative">
                            <div className="h-[38.6px] flex justify-between sticky top-0 items-center w-full">
                                <h2 className="font-bold text-xl">Posts</h2>
                                <select className="w-[174.4px] rounded-md border-1 border-[#D4D4D4]" name="filter" id="filter">
                                    <option value="creation-desc">Recently Created</option>
                                    <option value="published-desc">Recently Published</option>
                                    <option value="views-desc">Most Views</option>
                                    <option value="reactions-desc">Most Reactions</option>
                                    <option value="comments-desc">Most Comments</option>
                                </select>
                            </div>
                            <div className="min-h-[650px] shadow-[0_1px_3px_0px_rgba(0,0,0,0.02),0_0px_0px_1px_rgba(27,31,35,0.15)] mt-3 rounded-md overflow-hidden">
                                <PostBox/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = page => <Layout children={page} title="Welcome" />
export default Dashboard;
