export const useCaptureMonth = (dates) =>{
    const date = dates.map((object)=>{
        return object.month
    })

    return date
}