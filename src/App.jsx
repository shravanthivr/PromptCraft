
import ToolSelector from './components/ToolSelector';
import PromptForm from './components/PromptForm';
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col w-[900px] mx-auto">
      <header className="bg-white/80 backdrop-blur-sm shadow-lg py-6 mb-4 border-b border-blue-100">
        <div className="flex items-center justify-center gap-4">
          <img src="/logo.png" alt="PromptCraft Logo" className="w-20 h-20" />
          <h1 className="text-4xl font-bold text-blue-600">PromptCraft</h1>
        </div>
      </header>
      
      <div className="flex flex-wrap items-center justify-between gap-4 px-8 py-5 bg-white/80 backdrop-blur-sm border-b border-blue-100 shadow-md rounded-lg mx-4">
        <div className="flex items-center gap-4">
          <ToolSelector />
        </div>
        <input
          type="text"
          placeholder="Enter your API Key"
          className="px-5 py-2.5 border-2 border-blue-200/50 rounded-xl w-64 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/50 placeholder:text-blue-300 shadow-inner transition-all duration-300 hover:border-blue-300"
        />
      </div>

      <main className="flex flex-1 flex-col md:flex-row gap-8 px-4 py-8 max-w-5xl mx-auto w-full">
        <div className="flex-1 flex flex-col gap-8">
          {/* Prompt Section */}
          <PromptForm/>
        </div>

        {/* Right: History 
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col">
            <div className="font-semibold text-lg mb-4 text-blue-700">History <span className="text-xs text-gray-400">(click to reuse)</span></div>
            <ul className="flex-1 space-y-3 text-base text-gray-700">
              <li className="cursor-pointer hover:text-blue-600 transition">Generate a catchy blog title for AI</li>
              <li className="cursor-pointer hover:text-blue-600 transition">Summarize this text</li>
              <li className="cursor-pointer hover:text-blue-600 transition">Rephrase this sentence</li>
            </ul>
          </div>
        </aside>*/}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-4 text-center text-sm text-gray-400 tracking-wide">
        © 2025 Shravanthi &nbsp;|&nbsp; <a href="#" className="text-blue-500 hover:underline">Source on GitHub</a>
      </footer>
    </div>
  );
}
