import { createContext, useState, useContext } from 'react';

const ToolContext = createContext();

export const useTool = () => {
  return useContext(ToolContext);
};

export const ToolProvider = ({ children }) => {
  const [selectedTool, setSelectedTool] = useState('Title_Generator');

  const value = {
    selectedTool,
    setSelectedTool,
  };

  return <ToolContext.Provider value={value}>{children}</ToolContext.Provider>;
};
