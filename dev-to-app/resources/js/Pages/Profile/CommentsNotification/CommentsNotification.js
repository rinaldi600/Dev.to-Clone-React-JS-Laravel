import TestBGProfile from '../../../../img/aiony-haust-3TLl_97HNJo-unsplash.jpg';
import { Link } from "@inertiajs/inertia-react";

function CommentsNotification({name, profileImage, title, linkPost, linkProfileComment, detailComment, detailReply, commentText}) {
    return (
    <div className="min-h-[196.8px] mb-3 p-5 rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)] bg-white w-full">
        <div className="flex flex-wrap gap-2 items-center mb-5">
            <img src={profileImage === '' ? TestBGProfile : profileImage} className="overflow-hidden sm:mx-auto rounded-full w-[48px] h-[48px]" alt="" />
            <div className="flex flex-col justify-start items-start">
                <h2 className="text-[#171717] text-base">
                    <Link className="font-bold hover:text-[#2F3AB2]" href={linkProfileComment}>{name} </Link>
                    commented on <Link href={linkPost} className="font-bold hover:text-[#2F3AB2]">{title}</Link>
                </h2>
                <Link className="text-sm text-[#717171]" href="/">about 24 hours ago</Link>
            </div>
        </div>

        <div className='w-[83%] pl-3 mx-auto sm:text-center justify-start'>
            {
                detailComment !== '' ?
                <Link href={detailComment} className='group text-sm hover:text-[#A3A8DD] text-[#9F9F9F]'>
                    Re : <span className='font-medium hover:text-[#2F3AB2] group-hover:text-[#2F3AB2] text-[#404040]'>{detailReply}</span>
                </Link>
                :
                ''
            }
        </div>

        <div className="mt-3 flex justify-end w-full min-h-[88.5px]">
            <div className="w-[92%] sm:w-full pl-2 pr-2 border border-[#EFEFEF] overflow-hidden rounded-lg min-h-fit">
                <div className="border-b border-[#EFEFEF] pl-3 flex items-center min-h-[52px]">
                    <p>{commentText}</p>
                </div>
                <div className="flex items-center gap-3 min-h-[36.8px] p-1 justify-start">
                    <button type="button" className="flex text-[#090909] text-sm hover:bg-[#F6F6F6] rounded-lg p-1.5 items-center justify-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="agrrtlkvjfq72dhuukky0d2dff02geh5" aria-hidden="true" class="crayons-icon fill-[#3D3D3D] reaction-icon not-reacted"><title id="agrrtlkvjfq72dhuukky0d2dff02geh5">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                        Reply
                    </button>
                    <button type="button" className="flex text-[#090909] text-sm hover:bg-[#F6F6F6] rounded-lg p-1.5 items-center justify-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" role="img" aria-labelledby="aj4x1em88wbu92q19re43udgrybkxlws" class="crayons-icon fill-[#3D3D3D]"><title id="aj4x1em88wbu92q19re43udgrybkxlws">View button</title>
                        <path d="M16.773 14.652l-1.06-1.062 1.06-1.06a3.751 3.751 0 10-5.303-5.304l-1.06 1.061-1.062-1.06 1.062-1.06a5.25 5.25 0 117.425 7.425l-1.061 1.06h-.001zm-2.121 2.121l-1.061 1.06a5.25 5.25 0 11-7.425-7.424l1.061-1.061 1.06 1.062-1.06 1.06a3.75 3.75 0 105.303 5.304l1.06-1.06 1.062 1.06v-.001zm-.531-7.955l1.061 1.061-5.303 5.303-1.061-1.061 5.303-5.303z"></path>
                        </svg>
                        View
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CommentsNotification;
