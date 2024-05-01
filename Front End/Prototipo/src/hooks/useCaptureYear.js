export const useCaptureYear = (dates) => {
    const date = dates.map((object)=>{
        return object.year
    })

    return date
}