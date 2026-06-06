export function getCategories(data) {
const categories = []

data.forEach((element) => {
    const category = element.category
if (!categories.includes(category))  {
    categories.unshift(category)
}
});

return categories
}
export function getCategoriesNews (data, category) {
    return data.filter((element) => {
        return element.category === category
    })
}