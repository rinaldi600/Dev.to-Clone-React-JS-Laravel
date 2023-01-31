import React from "react";
import LayoutCreateAndCreate from "@/Pages/LoginSignUp/LayoutSignAndCreate";
import Layout from "@/Pages/Layout/Layout";

function SignIn() {
    return (
        <div>
            <h1>SIGN</h1>
        </div>
    )
}

SignIn.layout = page => (
    <Layout title={'Sign'}>
        <LayoutCreateAndCreate children={page} />
    </Layout>
);

export default SignIn;
