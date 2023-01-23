import {Link} from "@inertiajs/inertia-react";
import React from "react";

function Tag({tag, href}) {
    return (
        <Link className={'p-2 text-base w-full flex text-[#404040] hover:text-[#3B49DF] hover:bg-[#EBECFC]'} href={href}>
            {tag}
        </Link>
    )
}

export default Tag
