export const useCaptureCountry = (location) => {
    const country = location.map((object)=>{
        return object.country
    })

    return country
}