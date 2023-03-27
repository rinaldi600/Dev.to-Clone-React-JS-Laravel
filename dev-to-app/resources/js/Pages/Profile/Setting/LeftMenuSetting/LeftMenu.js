import React from "react";
import { Link } from "@inertiajs/inertia-react";

function LeftMenu({widthWindow, modalShow}) {

    return (
        <ul className={`text-[#404040] ${modalShow || widthWindow >= 991 ? '' : 'hidden'}`}>
            <li className={'cursor-pointer flex gap-1 p-2 flex hover:bg-[#E2E3F3] rounded-lg'}>
                <Link href="/settings/profile" className="flex gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-[#FFCC4D]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/>
                    </svg>
                    Profile
                </Link>
            </li>
            <li className={'cursor-pointer p-2 gap-1 hover:bg-[#E2E3F3] rounded-lg flex'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-[#66757F]">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"/>
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Customization
            </li>
            <li className={'cursor-pointer p-2 gap-1 flex hover:bg-[#E2E3F3] rounded-lg'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none" role="img" aria-labelledby="ab8q7x31we0su37umh93oo6ibwhvyv77"
                     className="crayons-icon crayons-icon--default"><title
                    id="ab8q7x31we0su37umh93oo6ibwhvyv77">Notifications</title>
                    <path
                        d="M14.222 20.333c0 1.228-4.444 1.228-4.444 0v-5.555a2.222 2.222 0 114.444 0v5.555z"
                        fill="#C1694F"></path>
                    <path d="M16.444 3.667H7.556v11.11h13.333V8.112a4.444 4.444 0 00-4.445-4.444z"
                          fill="#99AAB5"></path>
                    <path
                        d="M7.556 3.667A4.444 4.444 0 003.11 8.11v6.667H12V8.11a4.445 4.445 0 00-4.444-4.444"
                        fill="#292F33"></path>
                    <path
                        d="M20.889 9.222h-6.667a1.111 1.111 0 000 2.222h4.445v1.112a1.11 1.11 0 001.11 1.11h1.112A1.111 1.111 0 0022 12.557v-2.223a1.111 1.111 0 00-1.111-1.11z"
                        fill="#DD2E44"></path>
                </svg>
                Notifications
            </li>
            <li className={'cursor-pointer p-2 flex gap-1 hover:bg-[#E2E3F3] rounded-lg'}>
                <Link className="flex gap-1" href='/settings/account'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" role="img" aria-labelledby="a1p0lr53ffz39oi1j7s3rs3tfpsm47gi"
                        className="crayons-icon crayons-icon--default"><title
                        id="a1p0lr53ffz39oi1j7s3rs3tfpsm47gi">Account</title>
                        <path
                            d="M14.728 9.999a9.75 9.75 0 00-1.6 1.345c-.07-2.358-.637-5.408-3.762-6.901-.618-3.364-7.83-1.655-7.183-1.329 1.285.65 1.97 2.305 2.796 3.175 1.474 1.552 3.113 1.647 3.928.433 1.927 1.252 2.054 3.627 1.995 6.166-.006.28-.013.542-.013.78v7.776c0 .614 2.223.614 2.223 0v-6.383c.3-.53 1.179-1.947 2.46-2.941.881.774 2.301.527 3.59-.83.829-.871 1.275-2.525 2.56-3.176.68-.342-7.11-2.218-6.993 1.885"
                            fill="#77B255"></path>
                    </svg>
                    Account
                </Link>
            </li>
            <li className={'cursor-pointer p-2 flex gap-1 hover:bg-[#E2E3F3] rounded-lg'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none" role="img" aria-labelledby="ag0t50h9phvu0nil1654d48g8yfjc8jj"
                     className="crayons-icon crayons-icon--default"><title
                    id="ag0t50h9phvu0nil1654d48g8yfjc8jj">Billing</title>
                    <path
                        d="M4.222 4.778A2.222 2.222 0 002 7v10a2.222 2.222 0 002.222 2.222h15.556A2.222 2.222 0 0022 17V7s0-2.222-2.222-2.222H4.222z"
                        fill="#FFAC33"></path>
                    <path d="M22 10.333H2V7.556h20v2.777z" fill="#292F33"></path>
                    <path d="M19.778 15.889H4.222v-3.333h15.556v3.333z" fill="#F4F7F9"></path>
                    <path
                        d="M12.556 15.333c-.947 0-1.301-.672-1.372-1-.304.023-.6.168-1.002.424-.426.27-.908.576-1.515.576-.665 0-1.07-.375-1.111-1.11-.002-.032.02-.105.011-.105-1.032 0-1.779.978-1.786.989a.555.555 0 11-.895-.658c.042-.058 1.064-1.338 2.67-1.338 1.076 0 1.137.764 1.154 1.049l.003.06c.27-.018.55-.196.873-.401.533-.339 1.196-.762 2.083-.535.484.124.56.574.588.743a.764.764 0 00.027.125c.005 0 .082.05.321.073.456.041.957-.155 1.486-.363.549-.216 1.117-.439 1.728-.439 1.883 0 2.649.909 2.73 1.013a.556.556 0 01-.876.684c-.013-.015-.516-.585-1.854-.585-.401 0-.848.175-1.322.36-.56.22-1.351.438-1.941.438z"
                        fill="#8899A6"></path>
                </svg>
                Billing
            </li>
            <li className={'cursor-pointer flex gap-1 p-2 hover:bg-[#E2E3F3] rounded-lg'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none" role="img" aria-labelledby="a9dur54iwinwwyifbxd8spwme9af6bed"
                     className="crayons-icon crayons-icon--default"><title
                    id="a9dur54iwinwwyifbxd8spwme9af6bed">Organization</title>
                    <path
                        d="M20.889 9.222a1.111 1.111 0 01-1.111 1.111h-3.334a1.111 1.111 0 01-1.11-1.11V8.11A1.111 1.111 0 0116.443 7h3.334a1.11 1.11 0 011.11 1.111v1.111zm-12.222 0a1.111 1.111 0 01-1.111 1.111H4.222a1.111 1.111 0 01-1.11-1.11V8.11A1.111 1.111 0 014.221 7h3.334a1.111 1.111 0 011.11 1.111v1.111z"
                        fill="#DAC8B1"></path>
                    <path
                        d="M22 20.889A1.111 1.111 0 0120.889 22H3.11A1.111 1.111 0 012 20.889V9.222a1.111 1.111 0 011.111-1.11H20.89A1.111 1.111 0 0122 9.221V20.89z"
                        fill="#F1DCC1"></path>
                    <path
                        d="M14.222 7V5.889c0-.41-.224-.765-.555-.957v-.154a1.111 1.111 0 00-1.111-1.111h-1.112a1.11 1.11 0 00-1.11 1.11v.155a1.106 1.106 0 00-.556.957V7h-.556v15h5.556V7h-.556z"
                        fill="#DAC8B1"></path>
                    <path
                        d="M10.889 7H9.778V5.889h1.11V7zm2.222 0h1.111V5.889h-1.11V7zm-.555 0h-1.112V5.889h1.112V7z"
                        fill="#55ACEE"></path>
                    <path
                        d="M11.444 18.111h-1.11v-7.778h1.11v7.778zm2.223 0h-1.111v-7.778h1.11v7.778z"
                        fill="#3B88C3"></path>
                    <path
                        d="M16.444 18.111h-1.11v-6.667h1.11v6.667zm2.223 0h-1.111v-6.667h1.11v6.667zm2.222 0h-1.111v-6.667h1.11v6.667zm-16.667 0h-1.11v-6.667h1.11v6.667zm2.222 0h-1.11v-6.667h1.11v6.667zm2.223 0H7.556v-6.667h1.11v6.667zm-4.445 1.667h-1.11v-1.111h1.11v1.11zm2.222 0h-1.11v-1.111h1.11v1.11zm2.223 0H7.556v-1.111h1.11v1.11z"
                        fill="#55ACEE"></path>
                    <path
                        d="M11.444 19.778h-1.11v-1.111h1.11v1.11zm2.223 0h-1.111v-1.111h1.11v1.11z"
                        fill="#3B88C3"></path>
                    <path
                        d="M16.444 19.778h-1.11v-1.111h1.11v1.11zm2.223 0h-1.111v-1.111h1.11v1.11zm2.222 0h-1.111v-1.111h1.11v1.11z"
                        fill="#55ACEE"></path>
                    <path
                        d="M4.222 22h-1.11v-1.667h1.11V22zm2.222 0h-1.11v-1.667h1.11V22zm2.223 0H7.556v-1.667h1.11V22zm2.777 0h-1.11v-1.667h1.11V22zm2.223 0h-1.111v-1.667h1.11V22zm2.777 0h-1.11v-1.667h1.11V22zm1.112 0h1.11v-1.667h-1.11V22zm3.333 0h-1.111v-1.667h1.11V22z"
                        fill="#66757F"></path>
                </svg>
                Organization
            </li>
            <li className={'cursor-pointer p-2 flex gap-1 hover:bg-[#E2E3F3] rounded-lg'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none" role="img" aria-labelledby="agi69jp9l9zdbn2ow0lt7iqhbtyaprwc"
                     className="crayons-icon crayons-icon--default"><title
                    id="agi69jp9l9zdbn2ow0lt7iqhbtyaprwc">Extensions</title>
                    <path
                        d="M7.556 22a.554.554 0 01-.494-.81l3.87-7.523h-6.71a.556.556 0 01-.363-.976L16.082 2.135a.555.555 0 01.857.675l-3.87 7.523h6.709a.556.556 0 01.363.976L7.919 21.865a.555.555 0 01-.363.135"
                        fill="#FFAC33"></path>
                </svg>
                Extensions
            </li>
        </ul>
    )
}

export default LeftMenu;
