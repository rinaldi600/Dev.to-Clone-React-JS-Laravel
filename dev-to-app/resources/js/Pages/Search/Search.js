import { useEffect } from "react";
import Layout from "../Layout/Layout";

function Search() {

    useEffect(() => {
        // console.log(q);
    })

    return (
        <div className="min-h-screen bg-[#F5F5F5]">

        </div>
    )
}

Search.layout = page => <Layout children={page} title="Welcome" />
export default Search;
