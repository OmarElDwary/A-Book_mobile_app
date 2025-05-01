const API_BASE = "https://www.googleapis.com/books/v1";
const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY

export const fetchBooks = async (query: string) => {
  const url = query 
    ? `${API_BASE}/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}` 
    : `${API_BASE}/volumes?q=the&orderBy=newest&maxResults=10&langRestrict=en&key=${API_KEY}`;

    // if (!API_KEY) {
    //   throw new Error("API Key is missing");
    // }
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch books`);
  const data = await response.json();
  return data;
};

export const fetchBooksByLatest = async (maxResults = 10) => {
  const url = `${API_BASE}/volumes?q=&orderBy=newest&maxResults=${maxResults}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch books: ${response.statusText}`);
  const data = await response.json();
  return data;
}


export const fetchBookById = async (id: string) => {
  const url = `${API_BASE}/volumes/${id}${API_KEY ? `?key=${API_KEY}` : ""}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch book");
  return response.json();
};
