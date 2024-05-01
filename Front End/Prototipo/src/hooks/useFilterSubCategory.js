export const useFilterSubCategory = (array, criterion) => {
    const filter = array.filter(object => object.subcategory === criterion)

    return filter
}