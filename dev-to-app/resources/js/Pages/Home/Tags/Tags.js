import React from "react";
import {Link} from "@inertiajs/inertia-react";

function Tags() {
    return (
        <div className={'p-2 w-full'}>
            <h3 className={'font-bold text-base p-2'}>Popular Tags</h3>
            <div className={'overflow-y-scroll'}>
                <Link className={'p-2 text-base w-full flex text-[#404040] hover:text-[#3B49DF] hover:bg-[#EBECFC]'} href={'/'}>
                    #webdev
                </Link>
            </div>
        </div>
    )
}

export default Tags
