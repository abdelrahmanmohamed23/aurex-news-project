 const url = "./data/news2.json";
 let news;



export async function getNews () {
    

    try {
if (news) {
        return news
    }
        const response = await fetch(url)
        
        
        if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    news = await response.json();
    return news;
    
    }catch (error) {
        console.error(error.message)

    }
}