import React from "react";

export default function BookingModal({
  booking,
  handleChange,
  handleSubmit,
  loading,
}) {
  // console.log(date);

  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="py-2 px-4 bg-blue-500 rounded text-white text-sm shadow font-medium"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <span className="hidden md:flex">New Booking</span>
        <img src="/icons/plus.svg" alt="..." className="md:hidden w-5 h-5" />
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-5/6 my-6 mx-auto max-w-lg md:w-5/12">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between py-4 px-6 border-b border-solid border-borderbg rounded-t">
                  <h3 className="text-base font-medium text-blackcolor leading-5">
                    Make booking
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-20 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form id="addressForm" onSubmit={handleSubmit}>
                    <div className="relative w-full mb-3">
                      <label
                        htmlFor="fullName"
                        className="text-sm font-medium text-gray-900 block mb-2 text-left"
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        className="border border-solid border-gray-300 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full name"
                        style={{ transition: "all .15s ease" }}
                        name="fullName"
                        value={booking.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-gray-900 block mb-2 text-left"
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        className="border border-solid border-gray-300 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Phone number"
                        style={{ transition: "all .15s ease" }}
                        name="phone"
                        value={booking.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        htmlFor="date"
                        className="text-sm font-medium text-gray-900 block mb-2 text-left"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        className="border border-solid border-gray-300 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Date"
                        style={{ transition: "all .15s ease" }}
                        name="date"
                        value={booking.date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        htmlFor="title"
                        className="text-sm font-medium text-gray-900 block mb-2 text-left"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        className="border border-solid border-gray-300 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="title"
                        style={{ transition: "all .15s ease" }}
                        name="title"
                        value={booking.title}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex p-6 border-t border-solid rounded-b justify-center">
                  <button
                    className={`${
                      loading ? "bg-blue-200" : "bg-blue-600"
                    } text-white capitalize text-lg px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 font-normal`}
                    form="addressForm"
                    type="submit"
                    disabled={loading}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
