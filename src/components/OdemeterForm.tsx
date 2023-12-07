'use client';
import React, { useState } from 'react';
import Heading from '@/components/ui/Heading'; // Adjust the import path as needed
import SubHeading from '@/components/ui/SubHeading'; // Adjust the import path as needed

const OdometerForm = () => {
  const [startReading, setStartReading] = useState('');
  const [endReading, setEndReading] = useState('');
  const [error, setError] = useState('');
  const [tripId, setTripId] = useState('');

  const handleStartSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add logic to store the start reading
  };

  const handleEndSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add logic to store the end reading and calculate the distance
  };

  return (
    <div className="container mx-auto p-4 md:w-3/4 lg:w-1/2">
      <Heading title="Odometer Tracking" iconClass="fas fa-tachometer-alt" />

      {/* Start Reading Form */}
      <div className="card bg-base-100 shadow-xl mb-6">
        <div className="card-body border">
          <SubHeading
            title="Enter Start Reading"
            iconClass="fas fa-pencil-alt"
          />
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleStartSubmit} className="flex flex-col gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Start Reading</span>
              </label>
              <input
                type="number"
                value={startReading}
                onChange={(e) => setStartReading(e.target.value)}
                placeholder="Start Odometer Reading"
                className="input input-bordered"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save Start Reading
            </button>
          </form>
        </div>
      </div>

      {/* End Reading Form */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body border">
          <SubHeading title="Enter End Reading" iconClass="fas fa-pencil-alt" />
          <form onSubmit={handleEndSubmit} className="flex flex-col gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">End Reading</span>
              </label>
              <input
                type="number"
                value={endReading}
                onChange={(e) => setEndReading(e.target.value)}
                placeholder="End Odometer Reading"
                className="input input-bordered"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save End Reading and Calculate Distance
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OdometerForm;
