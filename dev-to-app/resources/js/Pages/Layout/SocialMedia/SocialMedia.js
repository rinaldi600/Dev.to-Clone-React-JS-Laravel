import {Link} from "@inertiajs/inertia-react";
import React from "react";

function SocialMedia({svg}) {
    return (
        <Link className={'text-base flex justify-center items-center w-[40px] h-[40px] hover:text-[#3B49DF] rounded-lg hover:bg-[#EBECFC]'} href={'/'}>
            {svg}
        </Link>
    )
}

export default SocialMedia;
