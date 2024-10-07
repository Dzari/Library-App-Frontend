import React from 'react';

export default function ButtonCard({ title, subtitle, buttonText }) {
  return (
    <section className="bg-[#1f1f1f] rounded-xl mx-2 my-8 py-4 px-[8px]">
      <div className="">
        <div className="pt-2 px-2">{title}</div>
        <div className="text-xs px-2">{subtitle}</div>
      </div>
      <button className="m-3 text-s px-4 py-1 rounded-2xl text-black bg-white">
        {buttonText}
      </button>
    </section>
  );
}
