import {Link} from "@inertiajs/inertia-react";
import TagContent from "@/Pages/Home/Contents/TagContent/TagContent";
import Comment from "@/Pages/Home/Contents/Comment/Comment";
import React, {Fragment, useEffect} from "react";

function TitleContent({slug = '', text, commentCount, detailUserCreate = {}}) {
    return (
        <Fragment>
            <div className={'flex gap-2 items-center'}>
                <div className={'w-[32px] h-[32px] rounded-full overflow-hidden'}>
                    <img className={'w-full h-full'} src={detailUserCreate.picture?.medium} alt="Profile"/>
                </div>
                <div className={'text-sm'}>
                    <p className={'font-medium text-[#090909] break-words'}>
                        {`${detailUserCreate.name?.first}  ${detailUserCreate.name?.last}`}
                    </p>
                    <p className={'text-[#525252]'}>Jan 27</p>
                </div>
            </div>
            <div className={'pl-9 pt-2 pr-9'}>
                <Link href={'/'} className={'text-2xl font-bold hover:text-[#2F3AB2] sm:text-sm'}>
                    {text}
                </Link>
                <div className={'flex mt-2 flex-wrap sm:gap-0.5 gap-3 text-sm text-[#3D3D3D]'}>
                    <TagContent href={'/'} tag={'#webdev'}/>
                    <TagContent href={'/'} tag={'#tailwindcss'}/>
                    <TagContent href={'/'} tag={'#react'}/>
                    <TagContent href={'/'} tag={'#html'}/>
                </div>
                <div className={'mt-2 flex justify-between items-center'}>
                    <Comment href={'/'} countComment={commentCount}/>
                    <p className={'text-[#525252] text-xs'}>
                        2 min read
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default TitleContent;
