export const useRemoveStringFromArray = (initialArray, stringToRemove) => {

    const updatedArray = initialArray.filter(item => item.router !== stringToRemove)


    return updatedArray
}
