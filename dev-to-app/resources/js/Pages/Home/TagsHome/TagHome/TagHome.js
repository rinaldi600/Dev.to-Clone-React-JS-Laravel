import {Link} from "@inertiajs/inertia-react";
import React from "react";

function TagHome({href, text, commentCount}) {
    return (
        <div className={'min-h-[81px] p-2 flex flex-col justify-center border-b border-[#EAEAEA] hover:bg-white'}>
            <Link href={href} className={'text-base text-[#404040]'}>
                {text}
            </Link>
            <p className={'text-[#717171] text-sm'}>{commentCount} comments</p>
        </div>
    )
}

export default TagHome;
