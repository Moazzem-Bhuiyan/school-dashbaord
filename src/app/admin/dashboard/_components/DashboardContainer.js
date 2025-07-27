"use client";
import RecentUserTable from "./RecentUserTable";
import CustomCountUp from "@/components/CustomCountUp/CustomCountUp";
import EarningSummary from "./Earnings";
import RecentOrderTable from "./RecentOrderTable";
import { LineChart, NotebookPen } from "lucide-react";
import UserStatistics from "./UserChart";

// Dummy Data
const userStats = [
  {
    key: "available",
    title: "Available",
    count: 518,
    icon: <NotebookPen className="text-[#5CB5EE] w-16 h-16" />,
  },
  {
    key: "Grabbed",
    title: "Grabbed",
    icon: <NotebookPen className="text-[#52AA77] w-16 h-16" />,
    count: 118,
  },
  {
    key: "Overall",
    title: "Overall",
    icon: <NotebookPen className="text-orange-500 w-16 h-16" />,
    count: 1500,
  },
];

export default function DashboardContainer() {
  return (
    <div className="space-y-20">
      {/* User Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 gap-5">
        {userStats?.map((stat) => (
          <div
            key={stat.key}
            className="bg-[#FFFFFF] p-5 rounded-2xl shadow-sm text-black min-h-[150px] space-y-5"
          >
            {stat.icon}
            <div className="flex items-center gap-4 mt-2">
              <div className="flex  gap-10 items-center w-full">
                <div>
                  <p className="font-dmSans text-2xl font-bold">{stat.title}</p>
                </div>
                <div>
                  <h5 className="text-4xl font-semibold text-black mt-0.5">
                    {stat.key !== "earning" ? (
                      <CustomCountUp end={stat.count} />
                    ) : (
                      <span>
                        $<CustomCountUp end={stat.count} />
                      </span>
                    )}
                  </h5>
                </div>
              </div>
              
            </div>
             <h1 className="text-sm text-gray-500">There are many passages of Lorem Ipsum available.</h1>
          </div>
        ))}
      </section>

      {/* Charts */}
      <section className="flex-center-between xl:flex-row flex-col gap-10">
        <UserStatistics />
      </section>

      {/* Recent Users Table */}
      <section>
        <RecentUserTable />
      </section>
    </div>
  );
}