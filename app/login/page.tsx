"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    studentId: "",
    password: "",
  });

  return (
    <main className="min-h-screen bg-white relative">
      <div className="absolute inset-0 bg-[url(/initial/building.png)] bg-center bg-cover opacity-50" />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="w-full h-[120px] bg-red-500 px-4 py-2 flex justify-between items-center">
          <Image
            src="/initial/name.png"
            alt="TCU name"
            width={160}
            height={120}
            className="h-[120px] w-auto"
            priority
          />

          <div className="flex items-center">
            <Image
              src="/initial/ssc.png"
              alt="SSC logo"
              width={140}
              height={90}
              className="w-[90px] h-auto md:w-[140px]"
            />
            <Image
              src="/initial/tcu.png"
              alt="TCU logo"
              width={140}
              height={90}
              className="w-[90px] h-auto md:w-[140px]"
            />
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 max-w-md mx-auto w-full">
          <div className="text-center mb-6">
            <p className="text-xs text-gray-500 opacity-80">
              YOUR UNIVERSITY <br /> FIRST EVER
            </p>
            <Image
              src="/initial/voting.png"
              alt="Voting"
              width={420}
              height={250}
              className="mx-auto"
            />
          </div>

          <form className="w-full space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="student-id"
                className="block text-sm text-start text-black font-bold"
              >
                STUDENT ID
              </label>
              <input
                type="text"
                id="student-id"
                value={credentials.studentId}
                onChange={(e) =>
                  setCredentials({ ...credentials, studentId: e.target.value })
                }
                className="text-black w-full h-10 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                placeholder="Student ID"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm text-start text-black font-bold"
              >
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                className="text-black w-full h-10 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                placeholder="Password"
                required
              />
            </div>

            <button
              type="button"
              className="w-full text-gray-500 text-sm underline"
            >
              Forget Password?
            </button>

            <button
              type="submit"
              className="w-full bg-gray-500 py-3 px-12 text-xl font-bold text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              LOG IN
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-6">
            Don't have an account yet?{" "}
            <Link
              href="/register"
              className="underline text-blue-500 hover:text-blue-600"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
