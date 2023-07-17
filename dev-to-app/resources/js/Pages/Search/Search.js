import { useEffect } from "react";
import Layout from "../Layout/Layout";

function Search({q}) {

    useEffect(() => {
        // console.log(q);
    })

    return (
        <div className="min-h-screen bg-[#F5F5F5]">
            <h1>WORK</h1>
        </div>
    )
}

Search.layout = page => <Layout children={page} title="Welcome" />
export default Search;
