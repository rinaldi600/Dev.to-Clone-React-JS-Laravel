import { Link } from "@inertiajs/inertia-react";

function LinkDashboard() {
    return (
        <ul>
            <li className="w-full h-[40px] bg-white rounded-md grid items-center pl-2 grid-flow-col justify-between pr-2">
                <Link className="w-[100%] hover:text-[#2F72CD] text-[#090909] text-base font-medium" href="#">Posts</Link>
                <p className="bg-[#D4D4D4] text-sm font-medium rounded-lg p-1 text-[#404040]">1</p>
            </li>
            <li className="w-full h-[40px] hover:bg-[#E2E3F3] rounded-md grid items-center pl-2 grid-flow-col justify-between pr-2">
                <Link className="w-[100%] text-[#090909] text-base" href="#">Series</Link>
                <p className="bg-[#D4D4D4] text-sm font-medium rounded-lg p-1 text-[#404040]">0</p>
            </li>
            <li className="w-full h-[40px] hover:bg-[#E2E3F3] rounded-md grid items-center pl-2 grid-flow-col justify-between pr-2">
                <Link className="w-[100%] text-[#090909] text-base" href="#">Followers</Link>
                <p className="bg-[#D4D4D4] text-sm font-medium rounded-lg p-1 text-[#404040]">1</p>
            </li>
            <li className="w-full h-[40px] hover:bg-[#E2E3F3] rounded-md grid items-center pl-2 grid-flow-col justify-between pr-2">
                <Link className="w-[100%] text-[#090909] text-base" href="#">Following tags</Link>
                <p className="bg-[#D4D4D4] text-sm font-medium rounded-lg p-1 text-[#404040]">0</p>
            </li>
        </ul>
    )
}

export default LinkDashboard;
