import { Head } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";
import { useEffect, useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

function NewPost() {

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
        body : '',
    });

    const [heightTextArea, setHeightTextArea] = useState(0);
    const [value, setValue] =  useState("");


    const submit = (e) => {
        e.preventDefault();
        data['body'] = value;
        post('/get_data_post')
    }

    const autoSize = (e) => {
        console.log(e.target.scrollHeight)
        setHeightTextArea(e.target.scrollHeight);
    };

    const imageHandler = () => {
        console.log("WORK");
    }

    const modules  = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script:  "sub" }, { script:  "super" }],
            ["blockquote", "code-block"],
            [{ list:  "ordered" }, { list:  "bullet" }],
            [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
            ["link", "image", "video"],
            ["clean"],
        ],
    };

    return (
        <>
            <Head title="New Post - DEV Community" />
            <div className="min-h-screen font-['Segoe_UI'] bg-[#F5F5F5]">
                <div className="max-w-[886.4px] mx-auto min-h-screen">
                    <div className="min-h-[56px] flex justify-between items-center">
                        <div className="w-[50px] h-[40px]">
                            <Link href="/">
                                <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="Icons" />
                            </Link>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="h-[40px] text-[#171717] hover:bg-[#E2E3F3] hover:text-[#3B49DF] font-medium w-max rounded-lg p-2">Edit</button>
                            <button className="h-[40px] hover:bg-[#E2E3F3] hover:text-[#3B49DF] w-max rounded-lg text-[#404040] p-2">Preview</button>
                        </div>
                    </div>
                    <div className="max-w-[806px] mt-1.5 bg-white min-h-screen mx-auto rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]">
                        <form onSubmit={submit}>
                            <div className="pt-8 pl-16 w-full">
                                <div>
                                    <button className="h-[40px] p-2 w-[163.113px] text-[#3D3D3D] font-medium rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]">Add a cover image</button>
                                </div>

                                <div className="mb-6">
                                    <textarea style={{height : `${heightTextArea > 0 ? `${heightTextArea}px` : '64px'}`}} onKeyDown={(e) => autoSize(e)} class={`block w-[90%] text-5xl font-extrabold text-[#171717] mt-3 border-transparent focus:border-transparent focus:ring-0 resize-none overflow-hidden`} placeholder="New post title here..."></textarea>
                                </div>

                                <div class="mb-6">
                                    <input type="text" id="default-input" class={`text-base text-[#171717] border-transparent focus:border-transparent focus:ring-0 rounded-lg w-[90%]`} placeholder="Add up to 4 tags..."/>
                                </div>
                            </div>
                            <div className="w-[95%] mx-auto">
                                <div className="mb-6">
                                    <ReactQuill
                                        onChange={setValue} modules={modules}
                                    />
                                </div>
                            </div>
                            <div className="mx-auto w-[95%]">
                                <button type="submit" disabled={processing}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewPost;
