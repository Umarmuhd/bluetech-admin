import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase.config";
//components
import Loader from "@/components/shared/Loader";
import toast from "react-hot-toast";

//page layout
import Admin from "@/layouts/Admin";

//components
import HeaderStats from "@/components/admin/HeaderStats";
import CardTable from "@/components/admin/CardTable";
import CardLineChart from "@/components/admin/CardLineChart";

export default function Index() {
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);

  const acceptedBookings = () => {
    const bookingsList = [...bookings];

    let bookingsNumber = 0;

    for (let i = 0; i < bookingsList.length; i++) {
      if (bookingsList[i].status === "accepted")
        bookingsNumber = bookingsNumber + 1;
    }

    return bookingsNumber;
  };

  useEffect(() => {
    const data = query(collection(db, "bookings"));
    const unsubscribe = onSnapshot(data, (querySnapshot) => {
      let bookingsArray = [];
      querySnapshot.forEach((doc) => {
        bookingsArray.push({ ...doc.data(), id: doc.id });
      });
      setBookings(bookingsArray);
    });
    return () => unsubscribe();
  }, []);

  let acceptedBooks = acceptedBookings();

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
    <div>
      <Loader show={false} />
      <div className="pt-18 md:pt-20">
        <HeaderStats
          totalBookings={bookings.length}
          totalUsers={users.length}
          acceptedBookings={acceptedBooks}
        />
        <div className="container md:px-8 mx-auto px-4">
          <div className="flex flex-col justify-between md:flex-row items-center">
            <div className="w-full md:w-9/20">
              <h3 className="mb-4">Bookings Chart</h3>
              <CardLineChart />
            </div>
            <div className="w-full md:w-3/6">
              <h3 className="mb-4">Most Recent Bookings</h3>
              <CardTable bookings={bookings.slice(0, 4)} color="light" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Index.layout = Admin;
