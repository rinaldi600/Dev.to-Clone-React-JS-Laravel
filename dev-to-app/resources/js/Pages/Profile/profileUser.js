import React, {Fragment} from "react";
import Layout from "@/Pages/Layout/Layout";
import {Head} from "@inertiajs/inertia-react";

function ProfileUser({user}) {

    return (
        <Fragment>
            <Head title={`${user?.name} - DEV Community`} />
            <div className={"font-['Segoe_UI'] min-h-screen bg-[#F5F5F5]"}>
                <div className={'min-h-[527.2px] bg-red-300 relative flex flex-col'}>
                    <div className={`h-[130px] bg-[#15202A]`}>

                    </div>
                    <div className={'xl:w-[992px] w-full min-h-[400px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] rounded-md bg-white mx-auto'}>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

ProfileUser.layout = page => <Layout children={page} title="Welcome" />;

export default ProfileUser;
