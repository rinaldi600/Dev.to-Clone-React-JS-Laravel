import Layout from "@/Pages/Layout/Layout";
import DetailBoxStatistic from "./DetailBoxStatistic/DetailBoxStatistic";
import { Head } from "@inertiajs/inertia-react";
import LinkDashboard from "./LinkDashboard/LinkDashboard";

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
                    <div className="w-full flex mt-4 p-2 flex-wrap min-h-[416px]">
                        <div className="min-h-full w-[20%]">
                            <LinkDashboard/>
                        </div>
                        <div className="bg-green-300 min-h-full w-[80%]">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = page => <Layout children={page} title="Welcome" />
export default Dashboard;
