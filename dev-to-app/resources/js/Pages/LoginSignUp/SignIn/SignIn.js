import React from "react";
import LayoutCreateAndCreate from "@/Pages/LoginSignUp/LayoutSignAndCreate";
import Layout from "@/Pages/Layout/Layout";
import {Head, Link} from "@inertiajs/inertia-react";
import {useForm} from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";

function SignIn({title}) {

    const { flash } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember_me: false,
    });

    function submit(e) {
        e.preventDefault();
        post('/login_user');
    }

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={"mt-8 font-['Segoe_UI']"}>

                <form onSubmit={submit}>
                    <label htmlFor="email" className={'text-base font-medium text-[#171717]'}>Email</label>
                    <div className={'max-w-[544px] min-h-[38.6px] rounded-lg mt-2'}>
                        <input onChange={e => setData('email', e.target.value)} required={true} name={'email'} id={'email'} type="email" className={'w-full h-full rounded-lg border border-[#D4D4D4]'}/>
                        <p id="filled_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span
                            className="font-medium">{errors?.email}</span></p>
                        <p id="filled_success_help" className="mt-2 text-xs text-green-600 dark:text-green-400"><span
                            className="font-medium">{flash?.message && data.email !== '' && !('email' in errors) ? 'Well done!' : ''}</span></p>
                    </div>

                    <div className={'mt-3'}> </div>

                    <label htmlFor="password" className={'text-base font-medium text-[#171717]'}>Password</label>
                    <div className={'max-w-[544px] min-h-[38.6px] rounded-lg mt-2'}>
                        <input onChange={e => setData('password', e.target.value)} required={true} name={'password'} id={'password'} type="password" className={'w-full h-full rounded-lg border border-[#D4D4D4]'}/>
                        <p id="filled_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span
                            className="font-medium">{errors?.password}</span></p>
                        <p id="filled_success_help" className="mt-2 text-xs text-green-600 dark:text-green-400"><span
                            className="font-medium">{flash?.message && data.password !== '' && !('password' in errors) ? 'Well done!' : ''}</span></p>
                    </div>

                    <div className={'w-[143.275px] min-h-[24px] rounded-lg hover:bg-[#F5F5F5] mt-3 flex items-center justify-center gap-2 p-0.5 flex-wrap'}>
                        <input onChange={e => setData('remember_me', e.target.checked)} type="checkbox" name={'remember_me'} className={'checked:bg-[#3B49DF] ring-0 checked:border-none focus:outline-none focus:ring-0 w-[18px] h-[18px] rounded-md border border-[#D4D4D4]'}/>
                        <p className={'text-base text-[#171717]'}>Remember Me</p>
                    </div>

                    <button disabled={processing} className={'w-full bg-[#3B49DF] hover:bg-[#2F3AB2] gap-2 font-medium flex flex-wrap items-center justify-center text-base mt-2 rounded-lg min-h-[48px]'}>
                        <span className={'inline break-words text-white'}>Continue</span>
                    </button>
                </form>

                <Link href={'/'} className={'text-[#3B49DF] text-center text-sm'}>
                    <p className={'mt-6'}>I forgot my password</p>
                </Link>
            </div>
        </>
    )
}

SignIn.layout = page => (
    <Layout title={'Sign'}>
        <LayoutCreateAndCreate children={page} />
    </Layout>
);

export default SignIn;
