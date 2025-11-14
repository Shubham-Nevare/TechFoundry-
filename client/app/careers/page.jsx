"use client";

import { useEffect, useState } from "react";
import { getJobListings } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function loadJobs() {
      const data = await getJobListings();
      setJobs(data);
    }
    loadJobs();
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Developous</span> Team
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We’re always looking for passionate creators, developers, and innovators to help us turn ideas into digital reality.
          </p>
        </div>

        {jobs.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No open positions at the moment.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {job.department} • {job.type} • {job.location}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {job.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <strong>Experience:</strong> {job.experience}
                  </p>
                </div>
                <Button
                  asChild
                  className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  <Link href={job.applyLink || "/contact"} target="_blank">
                    Apply Now
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
