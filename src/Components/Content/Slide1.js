import React from "react";
import electric from "../../Assets/Electrician.png";
import hammer from "../../Assets/Mechanic.png";
import driver from "../../Assets/Driver.png";
import nurse from "../../Assets/Nurse.png";
import chef from "../../Assets/Schef.png";
import plumber from "../../Assets/Plumber.png";
import waiter from "../../Assets/Waiter.png";
import houseKeeper from "../../Assets/Housekeeper.png";
import worker from "../../Assets/Mason.png";
import mali from "../../Assets/Gardener.png";
import cleaner from "../../Assets/Cleaner.png";
import carPrinter from "../../Assets/Carpenter.png";
import salesman from "../../Assets/Salesman.png";
import others from "../../Assets/Others.png";
import welder from "../../Assets/Welder.png";

const Slide1 = () => {
  const details = [
    {
      id: 1,
      icon: electric,
      name: "ইলেকট্রিশিয়ান",
      number: "১১",
    },
    {
      id: 2,
      icon: hammer,
      name: "মেকানিক/টেকনিশিয়ান ",
      number: "১০",
    },
    {
      id: 3,
      icon: driver,
      name: "ড্রাইভার",
      number: "০",
    },
    {
      id: 4,
      icon: nurse,
      name: "নার্স",
      number: "০",
    },
    {
      id: 5,
      icon: chef,
      name: "শেফ/বাবুর্চী ",
      number: "১১",
    },
    {
      id: 6,
      icon: plumber,
      name: "প্লাম্বার/পাইপফিটিং",
      number: "০",
    },
    {
      id: 7,
      icon: waiter,
      name: "ওয়েটার / ওয়েট্রেস ",
      number: "০",
    },
    {
      id: 8,
      icon: welder,
      name: "ওয়েল্ডার  ",
      number: "০",
    },
    {
      id: 9,
      icon: houseKeeper,
      name: "হাউজকিপার ",
      number: "০",
    },
    {
      id: 10,
      icon: worker,
      name: "রাজমিস্ত্রি/নির্মাণ কর্মী",
      number: "০",
    },
    {
      id: 11,
      icon: mali,
      name: "মালী ",
      number: "০",
    },
    {
      id: 12,
      icon: cleaner,
      name: "ক্লিনার ",
      number: "০",
    },
    {
      id: 13,
      icon: carPrinter,
      name: "কার্পেন্টার",
      number: "০",
    },
    {
      id: 14,
      icon: salesman,
      name: "শো-রুম সহকারী/সেলসম্যান",
      number: "০",
    },
    {
      id: 15,
      icon: others,
      name: "অন্যান্য",
      number: "১০",
    },
  ];
  return (
    <div className="mt-5">
      <div className="grid lg:grid-cols-3 gap-3 ">
        {details.map((detail) => (
          <div
            className="flex items-center bg-white p-4 rounded-xl text-black cursor-pointer hover:shadow-lg shadow-sm text-xs font-bold"
            key={detail.id}
          >
            <img src={detail.icon} alt="" className="mr-2" />
            {detail.name}
            <span className="mx-2">({detail.number})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide1;