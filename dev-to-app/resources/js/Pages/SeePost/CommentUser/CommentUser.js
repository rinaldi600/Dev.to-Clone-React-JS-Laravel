import { useState, Suspense, lazy, useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";

const CommentBox = lazy(() => import('../CommentBox/CommentBox'));

function CommentUser({idComment, textComment, profileUser, idPost, id}) {

    const [isComment, showComment] = useState(false);
    const { flash } = usePage().props

    const cancel = (param) => {
        showComment(param);
    }

    useEffect(() => {

    })

    const closeCommentBox = (e) => {
        showComment(e);
    }

    return (
        <>
            <div className="flex w-full gap-2 font-['Segoe_UI']">
                <div className={`flex items-center justify-center w-[32px] h-[32px] rounded-full overflow-hidden`}>
                    <img className="w-full h-full" src={(profileUser === '') || (profileUser === undefined) || (profileUser === null) ? `https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png` : profileUser} alt="Profile User" />
                </div>
                <div className="w-[90%]">
                    <div class="w-full mb-4">
                        <div class={`px-4 py-2 rounded-lg ${(flash?.jump_to_specific_element !== null & flash?.jump_to_specific_element === id) ? 'border border-[#057a55]' : 'border border-gray-200' } bg-white rounded-t-lg dark:bg-gray-800`}>
                            <p id={id} className={`break-words`}>{textComment}</p>
                        </div>
                        <div class="flex items-center justify-between pt-2">
                            <button onClick={() => showComment(true)} type="button" class="flex items-center justify-center text-sm font-normal text-[#090909] gap-2 hover:bg-[#F6F6F6] rounded-lg w-[81.6875px] h-[32px]">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[20px] h-[20px] text-[#090909] font-medium">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                    </svg>
                                </div>
                                Reply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                {
                    isComment ?
                    <CommentBox closeCommentBox={closeCommentBox} idPost={idPost} idComment={idComment} cancel={cancel} valueCancel={true} />
                    :
                    ''
                }
            </Suspense>
        </>
    )
}

export default CommentUser;
