import { useState, useEffect } from "react";

export const useGenerateAI = (selectedTool, questionToAsk) => {
  const [promptResponse, setPromptResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!questionToAsk) {
      return;
    }

    const fetchGenAPIResponse = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            tool: selectedTool,
            prompt: questionToAsk 
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPromptResponse(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGenAPIResponse();
  }, [selectedTool, questionToAsk]);

  return { promptResponse, isLoading, error };
};