import React, {useEffect} from "react";
import Layout from "@/Pages/Layout/Layout";
import LayoutCreateAndCreate from "@/Pages/LoginSignUp/LayoutSignAndCreate";
import {Head, Link} from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";

function SignUp({title}) {

    const { flash } = usePage().props;
    const { data, setData, post, errors } = useForm({
        name : '',
        username : '',
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/new_user');
    };

    useEffect(() => {
       console.log(flash);
    });

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={"mt-8 font-['Segoe_UI']"}>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" className={'text-base font-medium text-[#171717]'}>Nama Lengkap</label>
                    <div className={'max-w-[544px] min-h-[38.6px] rounded-lg mt-2'}>
                        <input required={true} onChange={e => setData('name', e.target.value)} name={'name'} id={'name'} type="text" className={'w-full h-full rounded-lg border border-[#D4D4D4]'}/>
                        <p id="filled_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span
                            className="font-medium">{errors?.name}</span></p>
                        <p id="filled_success_help" className="mt-2 text-xs text-green-600 dark:text-green-400"><span
                            className="font-medium">{flash?.message && data.name !== '' && !('name' in errors) ? 'Well done!' : ''}</span></p>
                    </div>

                    <div className={'mt-3'}> </div>

                    <label htmlFor="username" className={'text-base font-medium text-[#171717]'}>Username</label>
                    <div className={'max-w-[544px] min-h-[38.6px] rounded-lg mt-2'}>
                        <input required={true} onChange={e => setData('username', e.target.value)} name={'username'} id={'username'} type="text" className={'w-full h-full rounded-lg border border-[#D4D4D4]'}/>
                        <p id="filled_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span
                            className="font-medium">{errors?.username}</span></p>
                        <p id="filled_success_help" className="mt-2 text-xs text-green-600 dark:text-green-400"><span
                            className="font-medium">{flash?.message && data.username !== '' && !('username' in errors) ? 'Well done!' : ''}</span></p>
                    </div>

                    <div className={'mt-3'}> </div>

                    <label htmlFor="email" className={'text-base font-medium text-[#171717]'}>Email</label>
                    <div className={'max-w-[544px] min-h-[38.6px] rounded-lg mt-2'}>
                        <input required={true} onChange={e => setData('email', e.target.value)} name={'email'} id={'email'} type="email" className={'w-full h-full rounded-lg border border-[#D4D4D4]'}/>
                        <p id="filled_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span
                            className="font-medium">{errors?.email}</span></p>
                        <p id="filled_success_help" className="mt-2 text-xs text-green-600 dark:text-green-400"><span
                            className="font-medium">{flash?.message && data.email !== '' && !('email' in errors) ? 'Well done!' : ''}</span></p>
                    </div>

                    <div className={'mt-3'}> </div>

                    <label htmlFor="password" className={'text-base font-medium text-[#171717]'}>Password</label>
                    <div className={'max-w-[544px] min-h-[38.6px] rounded-lg mt-2'}>
                        <input required={true} onChange={e => setData('password', e.target.value)} name={'password'} id={'password'} type="password" className={'w-full h-full rounded-lg border border-[#D4D4D4]'}/>
                        <p id="filled_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span
                            className="font-medium">{errors?.password}</span></p>
                        <p id="filled_success_help" className="mt-2 text-xs text-green-600 dark:text-green-400"><span
                            className="font-medium">{flash?.message && data.password !== '' && !('password' in errors) ? 'Well done!' : ''}</span></p>
                    </div>

                    <button type={'submit'} className={'w-full bg-[#3B49DF] hover:bg-[#2F3AB2] gap-2 font-medium flex flex-wrap items-center justify-center text-base mt-2 rounded-lg min-h-[48px]'}>
                        <span className={'inline break-words text-white'}>Create Account</span>
                    </button>
                </form>

                <Link href={'/'} className={'text-[#3B49DF] text-center text-sm'}>
                    <p className={'mt-6'}>I forgot my password</p>
                </Link>
            </div>
        </>
    )
}

SignUp.layout = page => (
    <Layout title={'SigUp'}>
        <LayoutCreateAndCreate children={page} />
    </Layout>
);

export default SignUp;
