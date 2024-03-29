import CommentUser from "../CommentUser/CommentUser";

function RecursiveComment(nestedComment = []) {

    return (
        <>
            {
                nestedComment?.nestedComment?.length > 0
                &&
                nestedComment?.nestedComment?.map((comment) => (
                    <>
                        <div className="pl-3">
                            <CommentUser created_at={comment.created_at} name={comment?.users?.name} id={comment?.id} idPost={comment?.id_post} idComment={comment.id_comment} nestedComment textComment={comment.comment} profileUser={comment?.users?.profile_image}/>
                        </div>
                        <div className="pl-5">
                            <RecursiveComment nestedComment={comment?.reply_comment} />
                        </div>
                    </>
                ))
            }
        </>
    )
}

export default RecursiveComment;
