import React, {Fragment, useEffect} from "react";
import Layout from "@/Pages/Layout/Layout";
import {Head} from "@inertiajs/inertia-react";

function ProfileUser({user}) {

    useEffect(() => {
        console.log(user);
    });

    return (
        <Fragment>
            <Head title={`${user?.name} - DEV Community`} />
            <div className={"font-['Segoe_UI']"}>
                <h1>WORK</h1>
            </div>
        </Fragment>
    )
}

ProfileUser.layout = page => <Layout children={page} title="Welcome" />;

export default ProfileUser;
