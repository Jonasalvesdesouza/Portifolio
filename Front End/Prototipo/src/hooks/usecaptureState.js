export const useCaptureState = (location) => {
    const states = location.map((object)=>{
        return object.state
    })

    return states
}