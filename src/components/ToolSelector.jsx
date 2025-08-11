/* Dropdown for AI tool modes like Title Generator, summarize, rephrase, extract keywords, open-ended q&A*/

import React, { useState } from 'react';

export default function ToolSelector() {
  const [selectedTool, setSelectedTool] = useState('Tool Selector');

  const tools = [
    'Title Generator',
    'Summarize',
    'Rephrase',
    'Extract Keywords',
    'Open-ended Q&A'
  ];

  return (
    <div className="w-full max-w-xs mx-auto">
      <label htmlFor="tool-selector" className="block text-sm font-medium text-gray-700 mb-2 mr-10">
        Select AI Tool
      </label>
      <select
        id="tool-selector"
        value={selectedTool}
        onChange={(e) => setSelectedTool(e.target.value)}
        className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        {tools.map((tool) => (
          <option key={tool} value={tool}>
            {tool}
          </option>
        ))}
      </select>
    </div>
  );
}
