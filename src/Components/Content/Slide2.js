import React from "react";
import accountant from "../../Assets/Accounting-finance.png";
import production from "../../Assets/Production-operation.png";
import agroplan from "../../Assets/Agroplant.png";
import beauty from "../../Assets/Beauty-Care-Health-Fitness.png";
import hospital from "../../Assets/Hospitality-Travel-Tourism.png";
import education from "../../Assets/Education-Training.png";
import engineer from "../../Assets/Engineer-Architects.png";
import electric from "../../Assets/Electrician-Construction-Repair.png";
import secretary from "../../Assets/Secretary-Receptionist.png";
import software from "../../Assets/IT-Telecommunication.png";
import marketing from "../../Assets/Marketing-Sales.png";
import manager from "../../Assets/Gen Mgt-Admin.png";
import medical from "../../Assets/Medical-Pharma.png";
import design from "../../Assets/Design-Creative.png";
import others from "../../Assets/Othersf.png";

const Slide2 = () => {
  const generalData = [
    {
      id: 1,
      icon: accountant,
      name: "একাউন্টিং / হিসাব রক্ষন /...",
      number: "৬",
    },
    {
      id: 2,
      icon: production,
      name: "উৎপাদন/অপারেশন",
      number: "০",
    },
    {
      id: 3,
      icon: agroplan,
      name: "কৃষি চাষাবাদ/পশুপালন...",
      number: "০",
    },
    {
      id: 4,
      icon: beauty,
      name: "বিউটি কেয়ার/স্বাস্থ্যসেবা",
      number: "৫",
    },
    {
      id: 5,
      icon: hospital,
      name: "হসপিটালিটি/ভ্রমণ/...",
      number: "০",
    },
    {
      id: 6,
      icon: education,
      name: "শিক্ষা/প্রশিক্ষণ",
      number: "৩১",
    },
    {
      id: 7,
      icon: engineer,
      name: "ইলেকট্রিশিয়ান/ ইলেকট্র...",
      number: "০",
    },
    {
      id: 8,
      icon: electric,
      name: "প্রকৌশল/স্থাপত্য",
      number: "০",
    },
    {
      id: 9,
      icon: secretary,
      name: "সেক্রেটারি/রিসেপশনিস্ট",
      number: "০",
    },
    {
      id: 10,
      icon: software,
      name: "সফ্টওয়্যার / আইটি / টেলি...",
      number: "২৫",
    },
    {
      id: 11,
      icon: marketing,
      name: "বিপণন/বিক্রয়",
      number: "২৫",
    },
    {
      id: 12,
      icon: manager,
      name: "জেনারেল ম্যানেজমেন্ট/...",
      number: "০",
    },
    {
      id: 13,
      icon: medical,
      name: "মেডিকেল/ফার্মা",
      number: "",
    },
    {
      id: 14,
      icon: design,
      name: "ডিজাইন/ক্রিয়েটিভ",
      number: "০",
    },
    {
      id: 15,
      icon: others,
      name: "অন্যান্য",
      number: "১৫",
    },
  ];
  return (
    <div className="mt-5">
      <div className="grid lg:grid-cols-3 gap-3 ">
        {generalData.map((detail) => (
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

export default Slide2;