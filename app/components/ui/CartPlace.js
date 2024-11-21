"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button, Card, Rating } from "flowbite-react";
import { HiStar } from "react-icons/hi";
import Link from "next/link";

const CartPlace = ({ id, title, age, imageUrl }) => {
  return (
    <Card
      className="max-w-xs"
      imgSrc={imageUrl.src}
      imgAlt={title}
    >
      <h5 className="text-lg font-semibold tracking-tight text-gray-800">{title}</h5>
      <Rating>
        {[...Array(5)].map((_, index) => (
          <HiStar key={index} className="text-yellow-400" />
        ))}
      </Rating>

      <p className="text-gray-600 mt-2">{age}</p>
      <div className="flex justify-end mb-0 mt-2">
        <Link
          href={`places/${id}`}
          className="cursor-pointer transition-transform transform hover:scale-105 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Conocer más
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </Card>
  );
};

export default CartPlace;
