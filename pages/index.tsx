// pages/index.tsx
import { useState, FormEvent } from 'react';
import { fetchSearchResults, SearchResult } from '../lib/googleSearch';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    const searchResults = await fetchSearchResults(query);
    setResults(searchResults);
  };

  return (
    <div className={styles.container}>
      <h1>Google Search</h1>
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>
      <ul className={styles.results}>
        {results.map((result, index) => (
          <li key={index} className={styles.resultItem}>
            <a href={result.link} target="_blank" rel="noopener noreferrer" className={styles.resultLink}>
              {result.title}
            </a>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}