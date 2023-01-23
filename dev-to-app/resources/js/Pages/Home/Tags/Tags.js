import React from "react";
import Tag from "@/Pages/Home/Tags/Tag/Tag";
import {Link} from "@inertiajs/inertia-react";

function Tags() {
    return (
        <div className={'p-2 w-full'}>
            <h3 className={'font-bold text-base p-2'}>Popular Tags</h3>
            <div className={'max-h-[42vh] overflow-y-scroll'}>
                <Tag href={'/'} tag={'#webdev'}/>
                <Tag href={'/'} tag={'#javascript'}/>
                <Tag href={'/'} tag={'#beginners'}/>
                <Tag href={'/'} tag={'#programming'}/>
                <Tag href={'/'} tag={'#tutorial'}/>
                <Tag href={'/'} tag={'#react'}/>
                <Tag href={'/'} tag={'#python'}/>
                <Tag href={'/'} tag={'#aws'}/>
                <Tag href={'/'} tag={'#productivity'}/>
                <Tag href={'/'} tag={'#devops'}/>
            </div>

            <div className={'w-[240px] flex justify-center items-center min-h-[200px] bg-[#FAFAFA] shadow-[0px_1px_4px_rgba(0,0,0,0.16)] rounded-lg mt-5'}>
                <div className={'grid justify-items-center'}>
                    <div className={'w-[216px] h-[108px] rounded-lg overflow-hidden'}>
                        <img className={'w-full h-full'} src="https://res.cloudinary.com/practicaldev/image/fetch/s--0VA_opuX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r958p7649efealx01xe6.png" alt=""/>
                    </div>
                    <div className={'w-[216px]'}>
                        <Link className={'text-base font-bold text-[#3B49DF]'} href={'/'}>
                            Immerse yourself in the WebAssembly ecosystem ✅
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tags
