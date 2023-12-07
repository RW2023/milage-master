'use client';
// OdometerForm.tsx
import React, { useState } from 'react';
import Heading from '@/components/ui/Heading'; 
import SubHeading from '@/components/ui/SubHeading'; 

const OdometerForm = () => {
  const [startReading, setStartReading] = useState('');
  const [endReading, setEndReading] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError(''); // Reset any existing error messages

    const start = parseFloat(startReading);
    const end = parseFloat(endReading);

    if (isNaN(start) || isNaN(end)) {
      setError('Please enter valid numbers for both readings.');
      return;
    }

    if (end <= start) {
      setError('End reading must be greater than start reading.');
      return;
    }

    const distance = end - start;
    console.log({ startReading: start, endReading: end, distance });

    // Reset fields after successful submission
    setStartReading('');
    setEndReading('');
  };

  return (
    <div className="container mx-auto p-4">
      <Heading title="Odometer Tracking" iconClass="fas fa-tachometer-alt" />
      <SubHeading title="Enter Start and End Readings" iconClass="fas fa-pencil-alt" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {error && <p className="text-red-500">{error}</p>}

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
          Submit
        </button>
      </form>
    </div>
  );
};

export default OdometerForm;
