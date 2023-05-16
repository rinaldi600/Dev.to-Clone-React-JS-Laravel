import { Link, useForm } from "@inertiajs/inertia-react";

function PostBox() {
    return (
        <div className="w-full p-4 hover:bg-[#F9F9F9] flex justify-between items-center min-h-[64px] border-b-2 border-[#EFEFEF] bg-white">
            <div>
                <Link href="/" className="text-[#3B49DF] font-bold text-lg">Test 1</Link>
                <p className="text-sm text-[#717171]"><span className="font-medium">Published:</span> May 15</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[16px] h-[16px] text-[#717171] font-bold">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                </svg>
                <p className="text-sm text-[#717171]">0</p>
            </div>
            <form>
                <div className="flex items-center flex-wrap">
                    <button type="button" className="text-sm w-[63px] rounded-lg hover:bg-[#F0F0F0] h-[32px]">Edit</button>
                    <button type="button" className="text-sm text-[#DC2626] rounded-lg w-[63px] h-[32px] hover:bg-[#F0F0F0]">Delete</button>
                </div>
            </form>
        </div>
    )
}

export default PostBox;
