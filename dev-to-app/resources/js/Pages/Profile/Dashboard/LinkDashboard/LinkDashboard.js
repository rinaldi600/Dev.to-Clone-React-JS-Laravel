import { Link } from "@inertiajs/inertia-react";

function LinkDashboard() {
    return (
        <>
            <ul>
                <li className="w-full min-h-[40px] bg-white rounded-md grid items-center pl-2 grid-flow-col justify-between pr-2">
                    <Link className="w-[100%] hover:text-[#2F72CD] text-[#090909] text-base font-medium" href="#">Posts</Link>
                    <p className="bg-[#D4D4D4] text-sm w-[15.5px] flex justify-center items-center h-[22px] font-medium rounded-lg p-1 text-[#404040]">1</p>
                </li>
                <li className="w-full min-h-[40px] hover:bg-[#E2E3F3] rounded-md grid items-center pl-2 grid-flow-col justify-between pr-2">
                    <Link className="w-[100%] text-[#090909] text-base" href="#">Series</Link>
                    <p className="bg-[#D4D4D4] flex justify-center items-center text-sm font-medium w-[15.5px] h-[22px] rounded-lg p-1 text-[#404040]">0</p>
                </li>
                <li className="w-full min-h-[40px] hover:bg-[#E2E3F3] rounded-md grid items-center pl-2 grid-flow-col justify-between pr-2">
                    <Link className="w-[100%] text-[#090909] text-base" href="#">Followers</Link>
                    <p className="bg-[#D4D4D4] text-sm w-[15.5px] flex justify-center items-center h-[22px] font-medium rounded-lg p-1 text-[#404040]">1</p>
                </li>
                <li className="w-full min-h-[40px] hover:bg-[#E2E3F3] rounded-md grid items-center pl-2 grid-flow-col justify-between pr-2">
                    <Link className="w-[100%] text-[#090909] text-base" href="#">Following tags</Link>
                    <p className="bg-[#D4D4D4] text-sm w-[15.5px] h-[22px] flex justify-center items-center font-medium rounded-lg p-1 text-[#404040]">0</p>
                </li>
                <li className="w-full min-h-[40px] hover:bg-[#E2E3F3] rounded-md grid items-center pl-2 grid-flow-col justify-between pr-2">
                    <Link className="w-[100%] text-[#090909] text-base" href="#">Following users</Link>
                    <p className="bg-[#D4D4D4] text-sm w-[15.5px] h-[22px] flex justify-center items-center font-medium rounded-lg p-1 text-[#404040]">0</p>
                </li>
                <li className="w-full min-h-[40px] hover:bg-[#E2E3F3] rounded-md grid items-center pl-2 grid-flow-col justify-between pr-2">
                    <Link className="w-[100%] text-[#090909] text-base" href="#">Following organizations</Link>
                    <p className="bg-[#D4D4D4] text-sm w-[15.5px] h-[22px] flex justify-center items-center font-medium rounded-lg p-1 text-[#404040]">0</p>
                </li>
                <li className="w-full min-h-[40px] hover:bg-[#E2E3F3] rounded-md grid items-center pl-2 grid-flow-col justify-between pr-2">
                    <Link className="w-[100%] text-[#090909] text-base" href="#">Following podcasts</Link>
                    <p className="bg-[#D4D4D4] text-sm w-[15.5px] h-[22px] flex justify-center items-center font-medium rounded-lg p-1 text-[#404040]">0</p>
                </li>
                <li className="w-full min-h-[40px] hover:bg-[#E2E3F3] rounded-md grid items-center pl-2 grid-flow-col justify-start pr-2">
                    <Link className="w-[100%] text-[#090909] flex gap-2 items-center text-base" href="#">
                        Listings
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[16px] h-[16px] fill-[#404040]text-[#404040]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </Link>
                </li>
                <li className="w-full min-h-[40px] hover:bg-[#E2E3F3] rounded-md grid items-center pl-2 grid-flow-col justify-between pr-2">
                    <Link className="w-[100%] text-[#090909] text-base" href="#">Analytics</Link>
                    <p className="bg-[#D4D4D4] text-sm w-[15.5px] h-[22px] flex justify-center items-center font-medium rounded-lg p-1 text-[#404040]">0</p>
                </li>
            </ul>
            <button className="h-[40px] mt-3 rounded-lg w-full bg-[#D6D6D7]">
                Upload a video
            </button>
        </>
    )
}

export default LinkDashboard;
