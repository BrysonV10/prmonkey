/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DJvsLcSrwNT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsivePie } from "@nivo/pie"
import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";
import { Router } from "lucide-react";
import PocketBase from "pocketbase";
import {useEffect, useState} from 'react';
import Pin from "components/pin";

export default function Component() {
  let router = useRouter();
  const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL);
  console.log(pb.authStore.model)
  let [profileInfo, setProfileInfo] = useState(null);
  let [authState, setAuthState] = useState(null);

  if(pb.authStore.model == null) {
    router.push("/login");
  }
  
  // get additional profile info
  useEffect(()=>{
    setAuthState(pb.authStore.model);
    async function getProfileInfo() {
      let profile;
      try {
        profile = await pb.collection("profile").getList(1,1,{
          filter: `user="${pb.authStore.model.id}"`
        });
      } catch (e){
        console.error(e);
      }
      console.log(profile);
      try {
        setProfileInfo(profile.items[0]);
      } catch (e){
        console.error(e);
      }
      
    }
    getProfileInfo();
  }, []);

  function makeTimeReadable(time){
    let hours = Math.floor(time/3600);
    let minutes = Math.floor((time%3600)/60);
    let seconds = Math.floor(time%60);
    if(hours < 10) hours = `0${hours}`;
    if(minutes < 10) minutes = `0${minutes}`;
    if(seconds < 10) seconds = `0${seconds}`;
    if(hours == "00") return `${minutes}:${seconds}`;
    if(minutes == "00") return `${seconds}`;
    return `${hours}:${minutes}:${seconds}`;
  }

  return ( 
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar initials={authState ? authState.name.split(" ").map(word => word[0]).join("") : ""} />
      <main className="flex-1 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#6366F1] text-white py-4 px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs italic">{profileInfo?<><Pin/> Caledonia, MI</>:"Loading..."}</p>
                    <h2 className="text-2xl font-bold">{authState?authState.name:"Loading..."}</h2>
                    <p className="text-sm text-[#FCD34D]">{authState?"@"+authState.username:"Loading..."}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <SettingsIcon className="w-5 h-5" onClick={()=>router.push("/dashboard/settings")}/>
                  </Button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div>
                    <p>{profileInfo?profileInfo.bio:"Loading..."}</p>
                    <br/>
                    <h3 className="text-lg font-bold">Personal Bests</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {profileInfo?profileInfo.prs.prs.map(pr => <p>{pr.race}: {makeTimeReadable(pr.time)}</p>):"Loading..."}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MedalIcon className="w-8 h-8 text-[#6366F1]" />
                  <div>
                    <h3 className="text-lg font-bold">Achievements</h3>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="bg-[#FCD34D] text-[#6366F1] font-medium">
                        Sub 21 5K
                      </Badge>
                      <Badge variant="secondary" className="bg-[#FCD34D] text-[#6366F1] font-medium">
                        Sub 2 Hour Half
                      </Badge>
                      <Badge variant="secondary" className="bg-[#FCD34D] text-[#6366F1] font-medium">
                        Top 50%
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 space-y-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Run History</h2>
                  <Button variant="outline" className="bg-[#6366F1] text-white hover:bg-[#4F46E5]">
                    View All
                  </Button>
                </div>
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-[#6366F1] text-white">JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">Caledonia Kilt Klassic 5K</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">New 5K PR: 20:15</p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-[#6366F1] text-white">JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">Amway River Bank Run</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">New 25K PR: 2:02:02</p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">1 day ago</div>
                      </div>
                      <div className="mt-2">
                        <div className="rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Run Analytics</h2>
                  <Button variant="outline" className="bg-[#6366F1] text-white hover:bg-[#4F46E5]">
                    View All
                  </Button>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-bold mb-2">Pace Trends</h3>
                    <LineChart className="w-full aspect-[4/3]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Personal Records</h3>
                    <BarChart className="w-full aspect-[4/3]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Community Comparison</h3>
                    <BarChart className="w-full aspect-[4/3]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Run Breakdown</h3>
                    <PieChart className="w-full aspect-[4/3]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#6366F1] text-white px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; 2024 PR Monkey</p>
        <nav className="flex items-center gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}



function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function MedalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  )
}



function PieChart(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ShirtIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}