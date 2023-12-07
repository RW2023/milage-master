//src/components/OdometerForm.tsx
'use client';

import React, { useState } from 'react';
import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';

const OdometerForm = () => {
  const [startReading, setStartReading] = useState('');
  const [endReading, setEndReading] = useState('');
  const [feedback, setFeedback] = useState({ message: '', isError: false });

  const handleSubmit = async (start: string, end: string, isStart: boolean) => {
    try {
      const response = await fetch('/api/addReading', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startReading: isStart ? start : undefined,
          endReading: isStart ? undefined : end,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Server responded with an error');
      }

      setFeedback({ message: 'Reading saved successfully!', isError: false });
      setStartReading('');
      setEndReading('');
    } catch (error) {
      if (error instanceof Error) {
        setFeedback({
          message: error.message || 'Failed to save reading. Please try again.',
          isError: true,
        });
      }
    }
  };

  const handleStartSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(startReading, '', true);
  };

  const handleEndSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit('', endReading, false);
  };

  return (
    <div className="container mx-auto p-4">
      <Heading title="Odometer Tracking" iconClass="fas fa-tachometer-alt" />

      {/* Feedback Message */}
      {feedback.message && (
        <div
          className={`alert ${
            feedback.isError ? 'alert-error' : 'alert-success'
          }`}
        >
          <div className="flex-1">
            <label>{feedback.message}</label>
          </div>
        </div>
      )}

      {/* Start Reading Form */}
      <div className="card bg-base-100 shadow-xl my-6">
        <div className="card-body">
          <SubHeading
            title="Enter Start Reading"
            iconClass="fas fa-pencil-alt"
          />
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
      <div className="card bg-base-100 shadow-xl my-6">
        <div className="card-body">
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
