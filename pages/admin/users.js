import React, { useState, useEffect } from "react";

import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase.config";

//page layout
import Admin from "@/layouts/Admin";

//components
import BookingModal from "@/components/user/BookingModal";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const usersList = query(collection(db, "users"));
    const unsubscribe = onSnapshot(usersList, (querySnapshot) => {
      let usersArray = [];
      querySnapshot.forEach((doc) => {
        usersArray.push({ ...doc.data(), id: doc.id });
      });
      setUsers(usersArray);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="pt-18 md:pt-20">
        <div className="container md:px-8 mx-auto px-4">
          <div className="flex w-full justify-between items-center mb-8 mt-8">
            <>
              <h3 className="text-gray-900 text-lg">
                All Users ({users.length})
              </h3>
            </>

            <div className="filter flex md:w-2/5 justify-end">
              <div className="md:w-2/4">
                <input
                  type="text"
                  name="search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-blue-200 focus:border-blue-400 block w-full p-2.5 focus:outline-none focus:ring"
                  placeholder="Search users..."
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="all-users">
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
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Email address
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Phone
                          </th>

                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            City
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                          <tr key={user.email}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="flex-shrink-0 h-10 w-10">
                                  <img
                                    class="h-10 w-10 rounded-full"
                                    src={`https://avatars.dicebear.com/api/identicon/${user.fullName}.svg`}
                                    alt=""
                                  />
                                </div>
                                <div class="ml-4">
                                  <div class="text-sm font-medium text-gray-900">
                                    {user.fullName}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-500">
                                {user.email}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {user.phone}
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Lagos, Nigeria
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
                        ))}
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
Users.layout = Admin;
