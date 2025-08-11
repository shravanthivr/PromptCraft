import { useState } from 'react'
import ToolSelector from './components/ToolSelector'
import './App.css'

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">PromptCraft</h1>
      <div>
        <ToolSelector />
      </div>
    </div>
  );
}
