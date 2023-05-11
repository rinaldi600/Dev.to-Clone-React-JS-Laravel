function DetailBoxStatistic({count, desc}) {
    return (
        <div className="w-[300px] font-['Segoe_UI'] h-[109.5px] bg-white rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)] flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl text-[#090909]">{count}</h1>
            <p className="text-base text-[#717171]">{desc}</p>
        </div>
    )
}

export default DetailBoxStatistic;
