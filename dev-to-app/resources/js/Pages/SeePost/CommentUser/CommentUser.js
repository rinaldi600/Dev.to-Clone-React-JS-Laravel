import { useState, Suspense, lazy } from "react";

const CommentBox = lazy(() => import('../CommentBox/CommentBox'));

function CommentUser() {

    const [isComment, showComment] = useState(false);

    const cancel = (param) => {
        showComment(param);
    }

    return (
        <>
            <div className="flex w-full gap-2  font-['Segoe_UI']">
                <div className={`flex items-center justify-center w-[32px] h-[32px] rounded-full overflow-hidden`}>
                    <img className="w-full h-full" src={`https://res.cloudinary.com/practicaldev/image/fetch/s--RmY55OKL--/c_limit,f_auto,fl_progressive,q_auto,w_256/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png`} alt="Profile User" />
                </div>
                <div className="w-[90%]">
                    <div class="w-full mb-4">
                        <div class="px-4 py-2 rounded-lg border border-gray-200 bg-white rounded-t-lg dark:bg-gray-800">
                            <p className="break-words">Hey, I recently built a completely free AI chatbot powered by GPT-3. I'd really love to hear your feedback.</p>
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
                    <CommentBox cancel={cancel} valueCancel={true} />
                    :
                    ''
                }
            </Suspense>
        </>
    )
}

export default CommentUser;