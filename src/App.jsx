
import { useState } from "react";

function App() {
  const [view, setView] = useState("checkin");
  const [emotionText, setEmotionText] = useState("");

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#d1f2eb] via-[#a9dfbf] to-[#d6eaf8] text-gray-900 font-sans">
      <div className="w-64 bg-white/50 backdrop-blur-md p-6 space-y-6 shadow-lg">
        <div className="text-2xl font-bold text-emerald-900">Feelink</div>
        <button onClick={() => setView("checkin")} className="flex items-center space-x-2 text-left w-full py-2 text-emerald-900 hover:text-emerald-600">
          <span>📋</span><span>Check-in</span>
        </button>
        <button onClick={() => setView("chat")} className="flex items-center space-x-2 text-left w-full py-2 text-emerald-900 hover:text-emerald-600">
          <span>💬</span><span>Chat</span>
        </button>
        <button onClick={() => setView("simulacao")} className="flex items-center space-x-2 text-left w-full py-2 text-emerald-900 hover:text-emerald-600">
          <span>📱</span><span>Simulação</span>
        </button>
        <button onClick={() => setView("suporte")} className="flex items-center space-x-2 text-left w-full py-2 text-emerald-900 hover:text-emerald-600">
          <span>❤️</span><span>Suporte</span>
        </button>
      </div>

      <div className="flex-1 p-12">
        {view === "checkin" && (
          <div>
            <h1 className="text-3xl font-bold mb-2 text-emerald-900">Como você está se sentindo hoje?</h1>
            <p className="text-gray-700 mb-6">Toque em uma das opções ou descreva suas emoções para receber sugestões personalizadas.</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button className="bg-yellow-300 hover:bg-yellow-400 py-4 rounded-xl text-lg font-semibold text-gray-900">Ansioso(a)</button>
              <button className="bg-blue-300 hover:bg-blue-400 py-4 rounded-xl text-lg font-semibold text-gray-900">Triste</button>
              <button className="bg-green-300 hover:bg-green-400 py-4 rounded-xl text-lg font-semibold text-gray-900">Feliz</button>
              <button className="bg-red-300 hover:bg-red-400 py-4 rounded-xl text-lg font-semibold text-gray-900">Raiva</button>
            </div>
            <textarea
              className="w-full p-4 rounded-xl text-gray-800"
              rows="3"
              placeholder="Descreva sua emoção..."
              value={emotionText}
              onChange={(e) => setEmotionText(e.target.value)}
            ></textarea>
          </div>
        )}
        {view === "chat" && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-emerald-900">Chat</h1>
            <p className="text-gray-800">Em breve, você poderá conversar com nossa IA empática!</p>
          </div>
        )}
        {view === "simulacao" && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-emerald-900">Simulação</h1>
            <p className="bg-white/80 text-gray-900 p-4 rounded-xl mb-4 shadow">“Você nunca me ouve! É como se eu estivesse falando com as paredes!”</p>
            <p className="bg-white/80 text-gray-900 p-4 rounded-xl shadow">💡 Sugestão: Podemos tentar ouvir mais um ao outro e falar com mais calma?</p>
          </div>
        )}
        {view === "suporte" && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-emerald-900">Suporte</h1>
            <p className="text-gray-800">Conecte-se com profissionais ou acesse recursos de apoio emocional.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
