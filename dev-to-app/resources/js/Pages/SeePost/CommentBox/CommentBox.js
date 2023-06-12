import { usePage } from "@inertiajs/inertia-react";
import { useEffect, useState, lazy, Suspense } from "react";

const NotAllowedComment = lazy(() => import('./NotAllowedComment/NotAllowedComment.js'));

function CommentBox() {
    const { auth } = usePage().props;
    const [login, isLogin] = useState(false);
    const [closeAlertComment, setCloseAlertComment] = useState(false);

    useEffect(() => {
        if (auth?.user !== null) {
            isLogin(true);
        }

    }, [login]);

    const checkLogin = () => {
        setCloseAlertComment(true);
    };

    let template;

    if (closeAlertComment) {
        template =  <Suspense fallback={<h1>Loading</h1>}>
                        <NotAllowedComment closeAlertComment={setCloseAlertComment}/>
                    </Suspense>
    }

    return (
        <>
            {template}
            <form className="font-['Segoe_UI']">
            <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    <label for="comment" class="sr-only">Your comment</label>
                    <textarea disabled={closeAlertComment ? true : false} onClick={checkLogin} id="comment" rows="4" class={`${login ? '' : 'cursor-not-allowed'} w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0`} placeholder="Write a comment..." required></textarea>
                </div>
                <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Post comment
                    </button>
                </div>
            </div>
        </form>
        </>
    )
}

export default CommentBox;
