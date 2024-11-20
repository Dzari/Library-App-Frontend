import React, { useState } from "react";

const GoogleBooksSearch = () => {
  const [query, setQuery] = useState(""); // User input
  const [books, setBooks] = useState([]); // Search results

  // Function to handle the API request
  const fetchBooks = async () => {
    if (!query.trim()) return; // Avoid empty searches

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
      );
      const data = await response.json();

      if (data.items) {
        setBooks(data.items);
      } else {
        setBooks([]);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    fetchBooks();
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Google Books Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginRight: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>
      <div style={{ marginTop: "20px" }}>
        {books.length > 0 ? (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {books.map((book) => (
              <li
                key={book.id}
                style={{
                  marginBottom: "20px",
                  borderBottom: "1px solid #eee",
                  paddingBottom: "10px",
                }}
              >
                <h2 style={{ fontSize: "18px", margin: "0 0 10px" }}>
                  {book.volumeInfo.title}
                </h2>
                <p>
                  <strong>Author(s):</strong>{" "}
                  {book.volumeInfo.authors
                    ? book.volumeInfo.authors.join(", ")
                    : "Unknown"}
                </p>
                <p>
                  <strong>Published:</strong>{" "}
                  {book.volumeInfo.publishedDate || "N/A"}
                </p>
                {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    style={{ width: "100px", height: "auto" }}
                  />
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No books found. Try searching for something else.</p>
        )}
      </div>
    </div>
  );
};

export default GoogleBooksSearch;
