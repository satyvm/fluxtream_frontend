import Nav from "@/components/nav";
import FallingObjectsCanvas from "@/components/stream";

export default function Home() {
  return (
      <main>
          <Nav/>
          <div className="relative">
              <div className="z-10 absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-black">
                  <h1
                      className="animate-fade-up text-center text-4xl font-bold tracking-[-0.02em]
                      drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem] font-poppins"
                      style={{animationDelay: "0.15s", animationFillMode: "forwards"}}
                  >
                      Introducing FluXtream
                  </h1>
              </div>
              <div className="absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <FallingObjectsCanvas height={160}/>
              </div>
          </div>
      </main>
  )
}
