import React from "react";
import {Link} from "@inertiajs/inertia-react";

function Recently({text, href}) {
    return (
        <div className={'min-h-max hover:bg-white font-[Segoe_UI] p-3 mt-3 flex items-center'}>
            <Link className={'text-[#404040] hover:text-[#616AC4]'} href={href}>
                {text}
            </Link>
        </div>
    )
}

export default Recently;
