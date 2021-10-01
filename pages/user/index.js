import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase.config";

//page layout
import User from "@/layouts/User";

//components
import BookingModal from "@/components/user/BookingModal";
import { toast } from "react-hot-toast";

export default function Index() {
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState({
    fullName: "",
    phone: "",
    date: "",
    title: "",
    status: "",
  });

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    await addDoc(collection(db, "bookings"), booking);
    setLoading(false);
    toast.success("Appointment Booked Successful");
    setBooking({ fullName: "", phone: "", date: "", title: "", status: "" });
  };

  // const [bookings, setBookings] = useState([]);
  // useEffect(() => {
  //   const q = query(collection(db, "bookings"));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     let bookingsArray = [];
  //     querySnapshot.forEach((doc) => {
  //       bookingsArray.push({ ...doc.data(), id: doc.id });
  //     });
  //     setBookings(bookingsArray);
  //   });
  //   return () => unsubscribe();
  // }, []);

  return (
    <>
      <div className="pt-18 md:pt-20">
        <div className="container md:px-8 mx-auto px-4">
          <div className="flex w-full justify-between mb-8 mt-8">
            <>
              <BookingModal
                booking={booking}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </>

            <div className="filter flex md:w-2/5 justify-between">
              <div className="md:w-2/4">
                <input
                  type="text"
                  name="search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-blue-200 focus:border-blue-400 block w-full p-2.5 focus:outline-none focus:ring"
                  placeholder="Search booking..."
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4 md:mb-0 hidden md:flex">
                <select
                  id="filter"
                  className="form-select block w-full px-3 rounded border text-sm border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option className="text-sm">This week</option>
                  <option className="text-sm">This month</option>
                  <option className="text-sm">This year</option>
                </select>
              </div>
            </div>
          </div>
          <div className="recent-bookings">
            <h3 className="text-gray-900 mb-4 text-lg">Recent Bookings</h3>

            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Date & Time
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Contact
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            Home furniture repair
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              5.Oct.2021 (11:00AM)
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            08123456789
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Index.layout = User;
