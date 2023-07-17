import { useForm, Link } from "@inertiajs/inertia-react";
import { useEffect, useRef } from "react";

function SearchPost() {

    const { data, setData } = useForm({
        q: '',
    });
    const elementRef = useRef();
    const urlParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        // console.log(urlParams.get('q'));
    })

    const getValue = (e) => {
        setData('q', e.target.value);
        if (e.keyCode === 13) {
            elementRef.current.click();
        }
    }

    return (
        <div className={'h-[40px] m-0 lg:relative lg:w-[420px] lg:block flex items-center w-max overflow-hidden'}>
            <input defaultValue={urlParams.get('q') === null ? data.q : urlParams.get('q')} onKeyDown={(e) => getValue(e)} type="text" className={'w-[100%] focus:border-2 lg:block hidden border-[#A3A3A3] h-full focus:z-50 border-transparent rounded-lg focus:border-[#3B49DF] focus:ring-0'} placeholder={'Search...'}/>
            <Link href={'/search'} className={'lg:absolute w-[40px] h-full lg:h-[32px] rounded-lg lg:top-1/2 lg:right-0 lg:translate-x-[-10%] lg:translate-y-[-50%] hover:bg-[#EBECFC] flex lg:hidden items-center justify-center cursor-pointer'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:text-[#2F3AB2]">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                </svg>
            </Link>
            <Link ref={elementRef} className={'lg:absolute w-[40px] h-full lg:h-[32px] rounded-lg lg:top-1/2 lg:right-0 lg:translate-x-[-10%] hidden lg:translate-y-[-50%] hover:bg-[#EBECFC] lg:flex items-center justify-center cursor-pointer'} href={`/search?q=${data?.q}`} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:text-[#2F3AB2]">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                </svg>
            </Link>
        </div>
    )
}

export default SearchPost;
