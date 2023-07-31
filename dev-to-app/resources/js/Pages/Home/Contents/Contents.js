import React, {Suspense} from "react";
import {Link} from "@inertiajs/inertia-react";
import {useSelector} from "react-redux";

const NextContent = React.lazy(() => import('@/Pages/Home/Contents/NextContent/NextContent'));
const FirstContent = React.lazy(() => import('@/Pages/Home/Contents/FirstContent/FirstContent'));

function Contents({listPost}) {

    const navbar = useSelector(state => state.navbar.value);

    return (
        <div>
            <div className={`${navbar ? 'h-[43px]' : 'min-h-[43px]'} text-lg sm:justify-center flex flex-wrap items-center gap-2`}>
                <Link className={'hover:text-[#3B49DF] p-2 text-[#575757] hover:bg-[#FFFFFF] rounded-lg h-[43px]'} href={'/'}>
                    Relevant
                </Link>
                <Link className={'hover:text-[#3B49DF] p-2 text-[#575757] hover:bg-[#FFFFFF] rounded-lg h-[43px]'} href={'/'}>
                    Latest
                </Link>
                <Link className={'hover:text-[#3B49DF] p-2 text-[#575757] hover:bg-[#FFFFFF] rounded-lg h-[43px]'} href={'/'}>
                    Top
                </Link>
            </div>

            <div className={`${navbar ? 'h-screen fixed overflow-hidden' : ''} mt-2 w-full p-2`}>
                <Suspense fallback={<div>Loading</div>}>
                    <FirstContent detailUserCreate={listPost.length >= 1 ? listPost[0].users[0] : {}} text={listPost[0]?.title} countComment={listPost[0]?.comments.length} detailPost={listPost[0]}/>
                </Suspense>
                {
                    listPost.length >= 1 ?
                        listPost.slice(1, listPost.length - 1).map((post) => (
                            <Suspense fallback={<div>Loading</div>}>
                                <NextContent countComment={post?.comments.length} detailPost={post} detailUserCreate={post?.users[0]} text={post?.title}/>
                            </Suspense>
                        ))
                        : <h1>Loading</h1>
                }
            </div>

        </div>
    )
}

export default Contents
