import { Head } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState, useRef, useEffect, Suspense} from "react";
import { Editor } from "@tinymce/tinymce-react";
import { split, values } from "lodash";
import { AutoComplete } from 'primereact/autocomplete';

const SuccessUpload = React.lazy(() => import('./successUpload/SuccessUpload'));
const DeleteUpload = React.lazy(() => import('./deleteUpload/DeleteUpload'));

function NewPost() {

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
        body : '',
        image_content : [],
    });

    const [successUpload, setSuccessUpload] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);
    const tags = [
        'web', 'javascript'
    ];

    const [heightTextArea, setHeightTextArea] = useState(0);

    const editorRef = useRef(null);

    const log = () => {
      if (editorRef.current) {
        return editorRef.current.getContent()
      }
    };

    const submit = (e) => {
        console.log(data);
        // e.preventDefault();
        // data['body'] = log();
        // post('/get_data_post')
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
                    {/* onSubmit={submit} */}
                        <form>
                            <div className="pt-8 pl-16 w-full">
                                <div>
                                    <button className="h-[40px] p-2 w-[163.113px] text-[#3D3D3D] font-medium rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]">Add a cover image</button>
                                </div>

                                <div className="mb-6">
                                    <textarea style={{height : `${heightTextArea > 0 ? `${heightTextArea}px` : '64px'}`}} onKeyDown={(e) => autoSize(e)} class={`block w-[90%] text-5xl font-extrabold text-[#171717] mt-3 border-transparent focus:border-transparent focus:ring-0 resize-none overflow-hidden`} placeholder="New post title here..."></textarea>
                                </div>

                                <div class="mb-6">
                                    <AutoComplete value={'web'} suggestions={tags}  />
                                    <input type="text" id="default-input" class={`text-base text-[#171717] border-transparent focus:border-transparent focus:ring-0 rounded-lg w-[90%]`} placeholder="Add up to 4 tags..."/>
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
                                <button className="w-[84.9px] h-[40px] bg-[#3B49DF] hover:bg-[#2F3AB2] text-base font-medium text-white rounded-lg" onClick={submit} type="button" disabled={processing}>Publish</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewPost;
