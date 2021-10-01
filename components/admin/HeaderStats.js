import React from "react";

// components

import CardStats from "./CardStats.js";

export default function HeaderStats({
  totalBookings,
  totalUsers,
  acceptedBookings,
}) {
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 mb-10">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="TOTAL BOOKING"
                  statTitle={`${totalBookings}`}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="TOTAL USERS"
                  statTitle={`${totalUsers}`}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-white"
                />
              </div>

              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="ACTIVE BOOKINGS"
                  statTitle={`${acceptedBookings}`}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
