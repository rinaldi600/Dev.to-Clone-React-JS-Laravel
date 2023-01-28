import {Link} from "@inertiajs/inertia-react";
import React from "react";

function TagContent({href, tag}) {
    return (
        <Link className={'hover:bg-[#E5E5E5] hover:border border-[#B4B4B4] h-[29px] rounded-lg'} href={href}>
            <span className={'inline-block align-middle pr-[7px] pl-[7px]'}>{tag}</span>
        </Link>
    )
}

export default TagContent
