import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import Circle from "../Common/icon/Circle";
import DatePicker from "react-datepicker";


export default function HomeAppointment({ data, servicesData }) {
  const [startDate, setStartDate] = useState();
  const [timee, setTimee] = useState();
    const [dis, setDis] = useState({
    name: "",
    phone: "",
    message: "",
    email: "",
  });
  const [btnDis, setBtnDis] = useState(false);
  useEffect(() => {
    if (
      dis.email.length &&
      dis.name.length &&
      dis.phone.length &&
      dis.message.length
    ) {
      setBtnDis(true);
      document.getElementById("submit").disabled = false;
    } else {
      setBtnDis(false);
      // document.getElementById("submit").disabled = true;
    }
  }, [dis]);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data = Object.assign({}, data, { date: startDate })
    data = Object.assign({}, data, { time: timee })
    if (data.name.trim().length === 0) {
      toast("Please Enter a correct Name");
      return;
    }
    if (data.phone.length > 20) {
      toast("Please Enter a correct phone number");
    } else if (data.message.length > 800) {
      toast("write a correct message");
    } else {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          // console.log("Response received", res);
          if (res.status === 200) {
            // console.log("Response succeeded!");
            toast("Thank you for contacting us!");
          } else {
            // console.log("Email/Password is invalid.");
            toast("Something is wrong.");
          }
          setBtnDis(false);
          document.getElementById("submit").disabled = true;
        })
        .catch((e) => console.log(e));
      reset();
    }
  };
  return (
    <div className="bg-[#E7DABF]">
      <div className="max-w-[1140px] mx-auto px-4 grid md:grid-cols-2 py-[60px] gap-x-[20px]">
        <div className="flex flex-col justify-center p-[10px]">
          <h2 className="text-[33px] md:text-[60px] lg:text-[70px] leading-[40px] md:leading-[75px] font-[900] text-[#2A2006] mb-[20px]">
            {data?.title}
          </h2>

          <h4 className="text-[#54400d] mb-[34px]">
            {data?.tagline}
          </h4>
          <h5>
            {data?.description}
          </h5>
          <div className="mt-[20px]">
            <h3 className="mb-[20px] text-[25px] leading-[30px] font-[900]">{data?.question}</h3>
            <div className="flex items-center gap-x-2">
              <div><Circle /></div>
              <p className="text-[17px] leading-[25px] font-normal text-[#54400d]">{data?.one}</p>
            </div>
            <div className="flex items-center py-2 gap-x-2">
              <div><Circle /></div>
              <p className="text-[17px] leading-[25px] font-normal text-[#54400d]">{data?.two}</p>
            </div>
            <div className="flex items-center gap-x-2">
              <div><Circle /></div>
              <p className="text-[17px] leading-[25px] font-normal text-[#54400d]">{data?.three}</p>
            </div>
            <div className="flex items-center py-2 gap-x-2">
              <div><Circle /></div>
              <p className="text-[17px] leading-[25px] font-normal text-[#54400d]">{data?.four}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1C766B] mt-10 md:mt-0">
          <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="items-center sm:flex px-[30px] gap-x-[12px] py-[25px] ">
              <div className="sm:w-[50%] flex flex-col">
                <input
                  {...register("name", { required: true })}
                  tabIndex={0}
                  id="name"
                    onChange={(e) => setDis({ ...dis, name: e.target.value })}
                  name="name"
                  placeholder="Full Name *"
                  required
                  role="input"
                  arial-label="Please input your Name"
                  type="text"
                  className="p-3 text-base leading-none text-gray-900 bg-gray-100 border border-gray-200 focus:oultine-none focus:border-indigo-700 outline-[#248F82] transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="sm:w-[50%] flex flex-col  sm:mt-0 mt-4">
                <input
                  {...register("phone", { required: true })}
                  id="phone"
                  name="phone"
                    onChange={(e) => setDis({ ...dis, phone: e.target.value })}
                  onKeyDown={(e) =>
                    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
                  }
                  // pattern="[0-9]{1,15}"
                  placeholder="Phone Number *"
                  required
                  type="number"
                  className="p-3 text-base leading-none outline-[#248F82] text-gray-900 bg-gray-100 border border-gray-200 focus:oultine-none focus:border-indigo-700"
                />
              </div>
            </div>
            <div className="items-center sm:flex px-[30px] gap-x-[12px] ">
              <div className="sm:w-[50%] flex flex-col">
                <input
                  {...register("email", { required: true })}
                  tabIndex={0}
                  id="email"
                  placeholder="Email *"
                  name="email"
                    onChange={(e) => setDis({ ...dis, email: e.target.value })}
                  required
                  role="input"
                  arial-label="Please input your email"
                  type="email"
                  className="p-3 text-base leading-none outline-[#248F82] text-gray-900 bg-gray-100 border border-gray-200 focus:oultine-none focus:border-indigo-700 "
                />
              </div>
              <div className="sm:w-[50%] flex flex-col sm:mt-0 mt-4">
                <select className="p-3 text-base leading-none text-gray-900 placeholder-gray-100 bg-gray-100 border border-gray-200  focus:oultine-none outline-[#248F82]">
                  <option  disabled selected>Choose a service</option>
                  {servicesData?.map((item, index) => (
                    <option key={index} value={item?.attributes?.title}>
                      {item?.attributes?.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="items-center sm:flex px-[30px] gap-x-[12px] py-[25px]">
              <div className="sm:w-[50%] flex flex-col">
                <DatePicker minDate={new Date()} placeholderText={'Date'} selected={startDate} onChange={(date) => setStartDate(date)} required />

              </div>
              <div className="sm:w-[50%] flex flex-col sm:mt-0 mt-4">
                <DatePicker
                  placeholderText={'Time'}
                  selected={timee}
                  onChange={(date) => setTimee(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={5}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col w-full px-[30px]">
                <label htmlFor="message" className="mb-1 text-white">Message</label>
                <textarea
                  defaultValue={""}
                  {...register("message", { required: true })}
                  id="message"
                  name="message"
                  placeholder="Leave your message here *"
                   onChange={(e) => setDis({ ...dis, message: e.target.value })}
                  tabIndex={0}
                  required
                  aria-label="leave a message"
                  role="textbox"
                  // type="name"
                  className="p-3 text-base leading-none outline-[#248F82] text-gray-900 bg-gray-100 border border-gray-200 resize-none h-36 focus:oultine-none focus:border-indigo-700"
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full px-[30px] py-[20px]">
              <button
              id="submit"
                type="submit"
                className={`px-10 w-full py-4 text-base font-semibold leading-none text-black bg-[#F5DFBB] btn hover:bg-black hover:text-white focus:ring-2 focus:ring-offset-2  duration-300 focus:outline-none
                 ${!btnDis && "cursor-not-allowed"
                      }`}
              >
                SUBMIT NOW
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
