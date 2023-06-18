import {Link} from "@inertiajs/inertia-react";
import TagContent from "@/Pages/Home/Contents/TagContent/TagContent";
import Comment from "@/Pages/Home/Contents/Comment/Comment";
import React, {Fragment, useEffect} from "react";
import BgProfile from '../../../../../img/aiony-haust-3TLl_97HNJo-unsplash.jpg'

function TitleContent({slug = '', text, commentCount, detailUserCreate = {}, detailPost}) {
    useEffect(() => {
        console.log(detailPost);
    })

    return (
        <Fragment>
            <div className={'flex gap-2 items-center'}>
                <div className={'w-[32px] h-[32px] rounded-full overflow-hidden'}>
                    <img className={'w-full h-full'} src={detailUserCreate?.profile_image === '' ? BgProfile : detailUserCreate?.profile_image} alt="Profile"/>
                </div>
                <div className={'text-sm'}>
                    <p className={'font-medium text-[#090909] break-words'}>
                        {`${detailUserCreate?.name}`}
                    </p>
                    <p className={'text-[#525252]'}>Jan 27</p>
                </div>
            </div>
            <div className={'pl-9 pt-2 pr-9'}>
                <Link href={`${detailUserCreate?.username}/${detailPost?.slug}`} className={'text-2xl font-bold hover:text-[#2F3AB2] sm:text-sm'}>
                    {text}
                </Link>
                {
                    detailPost?.tags === null ?
                    ''
                    :
                    <div className={'flex mt-2 flex-wrap sm:gap-0.5 gap-3 text-sm text-[#3D3D3D]'}>
                        <>
                            {
                                JSON.parse(detailPost?.tags).map((tag) => (
                                    <TagContent href={`/t/${tag}`} tag={tag}/>
                                ))
                            }
                        </>
                    </div>
                }
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
