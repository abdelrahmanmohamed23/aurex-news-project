 const  URL = "/data/news.json";


export async function getNews () {
  
        const response = await fetch(URL)
        
        
        if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
   
    return response.json();
    
 
}