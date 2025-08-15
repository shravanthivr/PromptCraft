/* Dropdown for AI tool modes like Title Generator, summarize, rephrase, extract keywords, open-ended q&A*/

import { useState } from 'react';
import Select from 'react-select'

export default function ToolSelector() {
    const [selectedTool, setSelectedTool] = useState('Tool Selector');


    const options = [
        { value: 'Title_Generator', label: 'Title Generator' },
        { value: 'Summarize', label: 'Summarize' },
        { value: 'Rephrase', label: 'Rephrase' },
        { value: 'Extract_Keywords', label: 'Extract Keywords' },
        { value: 'Open_ended_QA', label: 'Open-ended Q&A' }
    ];

    return (
        <div className="w-full mx-auto">
            <label
                htmlFor="tool-selector"
                className="block text-sm font-semibold text-blue-600 mb-2"
            >
                Select AI Tool
            </label>
            <Select
                id="tool-selector"
                className="w-64"
                value={options.find(option => option.value === selectedTool)}
                onChange={option => setSelectedTool(option.value)}
                options={options}
                placeholder="Choose a tool..."
                classNamePrefix="react-select"
                menuPortalTarget={document.body}
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }} // to keep it on top
            />
        </div>
    );
}
