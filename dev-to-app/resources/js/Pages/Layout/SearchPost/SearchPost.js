import { useForm, Link } from "@inertiajs/inertia-react";
import { useCallback, useEffect, useRef, useState } from "react";

function SearchPost() {

    const { data, setData, reset } = useForm({
        q: '',
    })
    const elementRef = useRef();
    const inputElementRef = useRef();
    const urlParams = new URLSearchParams(window.location.search);
    const [urlPrev, setUrlPrev] = useState('');
    const regexURL = new RegExp('^\/[search\?q=*]+$','gmi');
    const urlCurrent = window.location.pathname + window.location.search;

    useEffect(() => {
        console.log(urlCurrent);
        console.log(regexURL);
        console.log(regexURL.test('/search?q=hhhhh'));
        // if ( urlParams.get('q') === null && inputElementRef.current.value !== '') {
        //     inputElementRef.current.value = '';
        // }
    })

    const getValue = (e) => {
        if (e.keyCode === 13) {
            elementRef.current.click();
        }
    }

    const goToLink = (e) => {
        setUrlPrev(`/search/q=${inputElementRef.current.value}`);
    }

    return (
        <div className={'h-[40px] m-0 lg:relative lg:w-[420px] lg:block flex items-center w-max overflow-hidden'}>
            <input ref={inputElementRef} defaultValue={data.q} onKeyUp={(e) => {getValue(e);setUrlPrev(`/search/q=${e.target.value}`)}} onChange={e => setData('q', e.target.value)} type="text" className={'w-[100%] focus:border-2 lg:block hidden border-[#A3A3A3] h-full focus:z-50 border-transparent rounded-lg focus:border-[#3B49DF] focus:ring-0'} placeholder={'Search...'}/>
            <Link href={'/search'} className={'lg:absolute w-[40px] h-full lg:h-[32px] rounded-lg lg:top-1/2 lg:right-0 lg:translate-x-[-10%] lg:translate-y-[-50%] hover:bg-[#EBECFC] flex lg:hidden items-center justify-center cursor-pointer'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:text-[#2F3AB2]">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                </svg>
            </Link>
            <Link href={`/search?q=${data.q}`} onClick={(e) => goToLink(e)} ref={elementRef} className={'lg:absolute w-[40px] h-full lg:h-[32px] rounded-lg lg:top-1/2 lg:right-0 lg:translate-x-[-10%] hidden lg:translate-y-[-50%] hover:bg-[#EBECFC] lg:flex items-center justify-center cursor-pointer'}>
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
