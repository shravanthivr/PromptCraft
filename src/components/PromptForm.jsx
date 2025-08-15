
import { useState } from 'react'

const PromptForm = () =>  {
    return (
        <>
        <section className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <label className="block text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Prompt:</label>
            <textarea
              className="w-full h-32 border-2 border-blue-100 rounded-xl p-5 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none mb-6 bg-white/50 placeholder:text-blue-300 transition-all duration-300 hover:border-blue-300"
              placeholder="Type your question or prompt here..."
            />
            <button className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hover:from-blue-600 hover:to-blue-800">
              Generate
            </button>
        </section>
          {/* Response Section */}
         <section className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <label className="block text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Response:</label>
            <div className="w-full min-h-[120px] border-2 border-blue-100 rounded-xl p-5 bg-white/50 text-gray-700 shadow-inner">
              <span className="text-blue-300/80">[AI-generated text appears here]</span>
            </div>
          </section>
        </>
    )
}

 export default PromptForm;
