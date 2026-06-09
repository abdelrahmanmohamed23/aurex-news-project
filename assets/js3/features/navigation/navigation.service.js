


export function getCategories (news) {
    const categories = new Set()
 news.forEach(element => {
    
    categories.add(element.category )
 });
  return [...categories];
}