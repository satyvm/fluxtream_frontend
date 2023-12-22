import Nav from "@/components/nav";
import CardStack from "@/components/card";
import FallingObjectsCanvas from "@/components/stream";
import {Chip} from "@nextui-org/react";
import DashboardCard from "@/components/dashboardCard";
import Footer from "@/components/footer";
import React from "react";

export default function Home() {
  return (
      <main>
          <Nav/>
          <div className="flex flex-col w-full h-screen items-center justify-center">
              <div className="relative min-h-min top-1/3">
                      <div className="z-10 absolute left-1/2 transform -translate-x-1/2 bg-white dark:bg-black">
                          <h1
                              className="animate-fade-up text-center text-4xl font-bold tracking-[-0.02em]
                          drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem] font-poppins"
                              style={{animationDelay: "0.15s", animationFillMode: "forwards"}}
                          >
                              Introducing FluXtream
                          </h1>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2">
                          <FallingObjectsCanvas height={160}/>
                      </div>
              </div>
              <div className="relative h-screen flex flex-col top-full">
                  <div className="mb-24">
                  <h1 className="font-poppins text-6xl text-center text-black dark:text-white p-24">
                      Good-bye to traditional <br/> payment hassle.
                  </h1>
                  <CardStack />
                  </div>
                  <div className="flex flex-col items-center justify-center m-10 my-24">
                      <Chip className="" variant="dot">
                          Dashboard
                      </Chip>
                      <h1 className="font-poppins text-6xl text-center text-black dark:text-white p-12">
                          All your streams at one place.
                      </h1>
                      <DashboardCard />
                  </div>
                  <Footer />
              </div>
          </div>
      </main>
  )
}
