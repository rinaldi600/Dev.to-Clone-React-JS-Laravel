function TagPost({name}) {

    return (
        <div className={`bg-[#EEE9EF] ${name !== '' ? 'flex h-[32px]' : 'hidden'} p-2 items-center rounded-lg`}>
            <span>{name}</span>
        </div>
    )

}

export default TagPost;
