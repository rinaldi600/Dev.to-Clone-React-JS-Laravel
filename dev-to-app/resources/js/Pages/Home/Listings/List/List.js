import {Link} from "@inertiajs/inertia-react";
import React from "react";

function List({href, text, category}) {
    return (
        <div className={'min-h-[105px] p-2 grid items-center border-b border-[#EAEAEA] hover:bg-white'}>
            <Link href={href} className={'text-base text-[#404040]'}>
                {text}
            </Link>
            <p className={'text-[#717171] text-sm'}>{category}</p>
        </div>
    )
}
export default List;
