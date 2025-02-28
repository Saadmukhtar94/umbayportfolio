export default function Hero() {
    return (
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4">Game Developer</h1>
          <p className="text-xl text-gray-400 mb-8">
            Creating immersive experiences with Unity
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg">
            View Projects
          </button>
        </div>
      </section>
    );
  }