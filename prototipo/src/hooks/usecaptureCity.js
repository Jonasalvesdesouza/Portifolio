export const useCaptureCity = (location) =>{
    const citys = location.map((object)=>{
        return object.city
    })

    return citys
}