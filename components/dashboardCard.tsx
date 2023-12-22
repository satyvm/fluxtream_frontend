"use client"

import Tilt from "react-parallax-tilt";
import Video from 'next-video';
import dash from "/videos/dash.mp4"

export default function DashboardCard() {
    return(
        <Tilt>
            <div className="block w-full h-full bg-gray-500">
                <Video src={dash} />
            </div>
        </Tilt>
    )
}