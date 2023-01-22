import {Link} from "@inertiajs/inertia-react";
import React from "react";

function SubCategory({href, svg, text}) {
    return (
        <Link className={'flex gap-2 text-base w-full hover:text-[#3B49DF] rounded-lg hover:bg-[#EBECFC] p-2'} href={href}>
            {svg}
            {text}
        </Link>
    )
}

export default SubCategory;
