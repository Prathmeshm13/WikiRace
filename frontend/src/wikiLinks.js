import { useState, useEffect } from 'react';

const useWikiLinks = (dest) => {
  const [links, setLinks] = useState([]); // Initialize state
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchWikiLinks = async () => {
      setLoading(true); // Start loading
      try {
        const url = `https://en.wikipedia.org/w/api.php?action=parse&page=${dest}&format=json&origin=*`;
        const response = await fetch(url);
        const data = await response.json();
        const html = data.parse.text['*'];

        // Parse HTML and extract links
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        let extractedLinks = Array.from(doc.querySelectorAll('a')).map((a) => a.href);

        // Process links
        extractedLinks = extractedLinks.map((link) => link.slice(27).trim().toLowerCase()); // Extract link part
        extractedLinks.sort();
        setLinks(extractedLinks); // Update state
      } catch (error) {
        console.error('Error fetching links:', error);
        setLinks([]); // Reset on error
      }
      setLoading(false); // End loading
    };

    fetchWikiLinks(); // Fetch data whenever 'dest' changes
  }, [dest]);

  return { links, loading }; // Return both data and loading status
};

export default useWikiLinks;
