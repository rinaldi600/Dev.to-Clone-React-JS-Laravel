import {Link} from "@inertiajs/inertia-react";

function ButtonLogInSignUp() {
    return (
        <div className={'flex sm:flex-col-reverse gap-2 items-center'}>
            <Link className={'sm:w-full w-[75.65px] text-base text-[#404040] hover:text-[#3B49DF] hover:underline hover:decoration-solid grid items-center justify-center h-[40px] rounded-lg hover:bg-[#EBECFC]'}>
                Log in
            </Link>
            <Link className={'sm:w-full w-[140.143px] text-[#3B49DF] hover:text-white hover:bg-[#3B49DF] font-medium border border-[#3B49DF] text-base hover:underline hover:decoration-solid grid items-center justify-center h-[40px] rounded-lg'}>
                Create Account
            </Link>
        </div>
    )
}

export default ButtonLogInSignUp;
