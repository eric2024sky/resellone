// lib/googleSearch.ts
export interface SearchResult {
    title: string;
    link: string;
    snippet: string;
  }
  
  export const fetchSearchResults = async (query: string): Promise<SearchResult[]> => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    const searchEngineId = process.env.NEXT_PUBLIC_SEARCH_ENGINE_ID;
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}`);
    const data = await response.json();
    return data.items;
  };  