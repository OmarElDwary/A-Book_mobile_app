import { GOOGLE_API_KEY } from "@env"; 
const API_BASE = "https://www.googleapis.com/books/v1";
const API_KEY = GOOGLE_API_KEY

export const fetchBooks = async (query: string, maxResults = 10) => {
  const url = `${API_BASE}/volumes?q=${encodeURIComponent(query)}&maxResults=${maxResults}${
    API_KEY ? `&key=${API_KEY}` : ""
  }`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch books");
  return response.json();
};

export const fetchBookById = async (id: string) => {
  const url = `${API_BASE}/volumes/${id}${API_KEY ? `?key=${API_KEY}` : ""}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch book");
  return response.json();
};
