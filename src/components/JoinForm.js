import { useState } from "react";


function JoinForm() {
  const [loading, ] = useState(false)

  return (
      <div className="w-screen h-screen bg-black">
            <div className="h-full w-full flex align-center justify-center flex-col">
                <h2 className="text-4xl text-center font-bold text-white">Let's meet in 100ms</h2>
                <button className="bg-blue-600 max-w-fit mx-auto px-6 py-4 my-8 text-white text-2xl">{loading ? "Loading..." : "Join Room"}</button>
            </div>
      </div>
  );
}

export default JoinForm;