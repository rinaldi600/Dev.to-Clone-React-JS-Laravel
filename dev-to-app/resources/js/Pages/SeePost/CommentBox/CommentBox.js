import { usePage, useForm } from "@inertiajs/inertia-react";
import { useEffect, useState, lazy, Suspense } from "react";

const NotAllowedComment = lazy(() => import('./NotAllowedComment/NotAllowedComment.js'));

function CommentBox({idPost, cancel, valueCancel, idComment = null}) {
    const { auth } = usePage().props;
    const [login, isLogin] = useState(false);
    const [closeAlertComment, setCloseAlertComment] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        idPost : idPost,
        comment: '',
    })

    useEffect(() => {
        if (auth?.user !== null) {
            isLogin(true);
        }
    }, [login]);

    const checkLogin = () => {
        if (auth?.user === null) {
            setCloseAlertComment(true);
        }
    };

    useEffect(() => {
        console.log(errors);
    })

    let template;

    if (closeAlertComment) {
        template =  <Suspense fallback={<h1>Loading</h1>}>
                        <NotAllowedComment closeAlertComment={setCloseAlertComment}/>
                    </Suspense>
    }

    const submit = (e) => {
        e.preventDefault()
        post('/comment_post');
      }

    return (
        <>
            {template}
            <form onSubmit={submit} className="font-['Segoe_UI']">
                <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div class="px-4 relative py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label for="comment" class="sr-only">Your comment</label>
                        <textarea value={data.comment} onChange={e => setData('comment', e.target.value)} for="outlined_error" id="outlined_error" aria-describedby="outlined_error_help" disabled={closeAlertComment ? true : false} onClick={checkLogin} rows="4" class={`${login ? '' : 'cursor-not-allowed'} w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0 ${errors?.comment ? 'block rounded-t-lg pb-2.5 pt-5 border-b-2 appearance-none  focus:outline-none border-red-600 focus:border-red-600 dark:focus-border-red-500 peer' : ''}`} placeholder="Write a comment..." required></textarea>
                    </div>
                    <div class="flex items-center gap-2 px-3 py-2 border-t dark:border-gray-600">
                        <button disabled={processing} type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Post comment
                        </button>
                        {
                            valueCancel ?
                                <div class="flex items-center justify-between">
                                    <button onClick={() => cancel(false)} type="button" class="flex items-center justify-center text-sm font-normal text-[#090909] gap-2 hover:bg-[#F6F6F6] rounded-lg w-[81.6875px] h-[32px]">
                                        Dismiss
                                    </button>
                                </div>
                                :
                                ''
                        }
                    </div>
                </div>
                {
                    errors?.comment ?
                    <p id="outlined_error_help" class="text-xs mb-4 text-red-600 dark:text-red-400"><span class="font-medium">Oh, snapp!</span> {errors?.comment}</p>
                    :
                    ''
                }
            </form>
        </>
    )
}

export default CommentBox;
