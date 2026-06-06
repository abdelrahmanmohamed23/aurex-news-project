 const  URL = "./data/news2.json";




export async function getNews () {

    try {
        const response = await fetch(URL)
        
        
        if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
   
    return response.json();
    
    }catch (error) {
        console.error(error.message)

    }
}