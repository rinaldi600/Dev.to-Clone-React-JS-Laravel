import React from "react";

function Organization({urlBanner, nameOrganization}) {
    return (
        <div className={'h-[64px] cursor-pointer hover:bg-white flex items-center p-2 gap-2 w-full border-b border-[#F5F5F5]'}>
            <div className={'w-[32px] h-[32px] '}>
                <img className={'w-full h-full'} src={urlBanner} alt="Organization"/>
            </div>
            <span className={'text-base font-medium text-[#404040]'}>{nameOrganization}</span>
        </div>
    )
}

export default Organization;
