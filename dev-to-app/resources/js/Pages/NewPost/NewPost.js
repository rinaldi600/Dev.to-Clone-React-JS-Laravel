import { Head } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState, useRef, useEffect, Suspense } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { split, values } from "lodash";
import Turnstone from 'turnstone';

const SuccessUpload = React.lazy(() => import('./successUpload/SuccessUpload'));
const DeleteUpload = React.lazy(() => import('./deleteUpload/DeleteUpload'));
const TagPost = React.lazy(() => import('./tagPost/TagPost'));


function NewPost() {

    const { data, setData, post, processing, errors, transform} = useForm({
        email: '',
        password: '',
        remember: false,
        body : '',
        image_content : [],
        tags : [],
    });

    const [successUpload, setSuccessUpload] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);
    const [heightTextArea, setHeightTextArea] = useState(0);
    const [tagList, setTagList] = useState([]);
    const [countTag, setCountTag] = useState(4);
    const editorRef = useRef(null);
    const tagRef = useRef(null);

    const submit = (e) => {
        e.preventDefault();
        data.tags = tagList;
        // data.body = editorRef.current.getContent();
        post('/get_data_post');
    }

    const autoSize = (e) => {
        console.log(e.target.scrollHeight)
        setHeightTextArea(e.target.scrollHeight);
    };

    useEffect(() => {
        setTimeout(() => {
            if (successUpload) {
                setSuccessUpload(false);
            }
            if (successDelete) {
                setSuccessDelete(false);
            }
        }, 2000);
    })

    const example_image_upload_handler = (blobInfo, progress) => new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open('POST', '/handler_image');

        xhr.upload.onprogress = (e) => {
          progress(e.loaded / e.total * 100);
        };

        xhr.onload = () => {
          if (xhr.status === 403) {
            reject({ message: 'HTTP Error: ' + xhr.status, remove: true });
            return;
          }

          if (xhr.status < 200 || xhr.status >= 300) {
            reject('HTTP Error: ' + xhr.status);
            return;
          }

          const json = JSON.parse(xhr.responseText);

          if (!json || typeof json.location != 'string') {
            console.log(xhr.responseText);
            reject('Invalid JSON: ' + xhr.responseText);
            return;
          }

          resolve(json.location);

          const pathName = split(json.location, '/');
          setData(values => ({
            ...values,
            ['image_content'] : [
                ...values.image_content,
                `${pathName[2]}/${pathName[4]}`,
            ]
          }));
          setSuccessUpload(true);

        };

        xhr.onerror = () => {
          reject('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
        };

        const formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());

        xhr.send(formData);
    });

    const listbox = {
        data: ['webdev', 'javascript', 'programming', 'react', 'database', 'tutorial']
    }

    const removeTag = (detailTag) => {
        console.log(detailTag);
        const temp = [...tagList];

        temp.splice(detailTag.position, 1);

        setTagList(temp);
        if (countTag < 5 && countTag > -1) {
            setCountTag(countTag + 1);
        }
    };

    const getTagPost = (e) => {
        if (e !== undefined) {
            if (tagList.length < 4) {
                setTagList(prevList => [...prevList, e]);
            }
            setCountTag(countTag - 1);
        }
        tagRef.current?.clear();
    }

    const styles = {
        input: 'w-[90%] border py-2 px-4 text-lg outline-none rounded-md',
        listbox: 'bg-[#F5F5F5] w-[90%] p-2 text-[#3D3D3D] cursor-pointer rounded-lg',
        highlightedItem: 'text-black',
        query: 'cursor-pointer',
        typeahead: 'text-slate-500 cursor-pointer',
        noItems: 'cursor-default text-center my-20',
        match: 'font-semibold cursor-pointer',
        groupHeading: 'px-5 py-3 text-pink-500 cursor-pointer',
    }

    return (
        <>
            <Head title="New Post - DEV Community" />
            <div className="min-h-screen p-2 pb-8 font-['Segoe_UI'] bg-[#F5F5F5]">
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
                    <div className="max-w-[806px] mt-1.5 pb-5 bg-white min-h-screen mx-auto rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]">
                        <form onSubmit={submit} onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault(); }}>
                            <div className="pt-8 pl-16 w-full">
                                <div>
                                    <button className="h-[40px] p-2 w-[163.113px] text-[#3D3D3D] font-medium rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]">Add a cover image</button>
                                </div>

                                <div className="mb-6">
                                    <textarea style={{height : `${heightTextArea > 0 ? `${heightTextArea}px` : '64px'}`}} onKeyDown={(e) => autoSize(e)} class={`block w-[90%] text-5xl font-extrabold text-[#171717] mt-3 border-transparent focus:border-transparent focus:ring-0 resize-none overflow-hidden`} placeholder="New post title here..."></textarea>
                                </div>

                                <div class="mb-6 flex items-center gap-2">

                                    <Suspense fallback={<div>Loading</div>}>
                                        {
                                            tagList.map((list, index) => (
                                                <TagPost removeTag={removeTag} name={{
                                                    nameTag : list,
                                                    position : index,
                                                }}/>
                                            ))
                                        }

                                    </Suspense>
                                    <div className="w-full">
                                        {
                                            countTag === 0 ?
                                            ''
                                            :
                                            <Turnstone ref={tagRef} listbox={listbox} styles={styles} typeahead={true} autoFocus={false} onSelect={(e) => getTagPost(e)} disabled={countTag < 1 ? true : false} listboxIsImmutable={true} maxItems={6} id='tags' name='tags' placeholder={`Add up to ${countTag} tags...`} />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="w-[95%] mx-auto">
                                <div className="mb-6">
                                    {/* <Editor
                                        apiKey='2f2dpdvg7yhphgmbfb3j1aao0ipm1rs22z57mubmiemdvq1c'
                                        onInit={(evt, editor) => {
                                            editorRef.current = editor;

                                            editor.on('keydown', (e) => {
                                                if ((e.key == "Backspace" || e.key == "Delete") && editor.selection) {
                                                    var selectedNode = editor.selection.getNode();
                                                    if (selectedNode && selectedNode.nodeName == 'IMG') {
                                                       const imageSrc = selectedNode.src;
                                                       const pathName = split(new URL(imageSrc).pathname, '/');
                                                        const requestOptions = {
                                                            method: 'POST',
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                                "X-CSRF-TOKEN": document.head.querySelector('meta[name="csrf-token"]').content,
                                                            },
                                                            body: JSON.stringify({ nameImage: `${pathName[2]}/${pathName[4]}` })
                                                        };
                                                        fetch('/delete_image_post', requestOptions)
                                                            .then((response) => response.json())
                                                            .then((responseJson) => {
                                                                setData(values => ({
                                                                    ...values,
                                                                    ['image_content'] : values.image_content.filter(item => item !== `${pathName[2]}/${pathName[4]}`)
                                                                  }));
                                                                  setSuccessDelete(true);
                                                                console.log(responseJson);
                                                            })
                                                            .catch((error) => {
                                                                console.error(error);
                                                            });
                                                    }

                                                }
                                            })

                                        }}
                                        initialValue="<p>This is the initial content of the editor.</p>"
                                        init={{
                                            // width: 600,
                                            height: 500,
                                            plugins: [
                                              'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
                                              'searchreplace', 'wordcount', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media',
                                              'table', 'emoticons', 'template', 'help'
                                            ],
                                            toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
                                              'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
                                              'forecolor backcolor emoticons | help',
                                            menu: {
                                              favs: { title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons' }
                                            },
                                            menubar: 'favs file edit view insert format tools table help',
                                            images_upload_handler: example_image_upload_handler,
                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                                            placeholder : "Write your post content here..."
                                        }}
                                    /> */}
                                    {
                                        successUpload ?
                                        <Suspense fallback={<div>Loading</div>}>
                                            <SuccessUpload />
                                        </Suspense>
                                        :
                                        ''
                                    }
                                    {
                                        successDelete ?
                                        <Suspense fallback={<div>Loading</div>}>
                                            <DeleteUpload />
                                        </Suspense>
                                        :
                                        ''
                                    }
                                </div>
                            </div>
                            <div className="mx-auto w-[95%]">
                                <button className="w-[84.9px] h-[40px] bg-[#3B49DF] hover:bg-[#2F3AB2] text-base font-medium text-white rounded-lg" type="submit" disabled={processing}>Publish</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewPost;
