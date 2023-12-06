'use client';

import React from 'react';

export default function About() {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="container mx-auto p-6">
        {/* Main Heading */}
        <h1 className="text-5xl font-bold text-center mb-6">
          About Inspirational Voices
        </h1>

        {/* Our Journey Section */}
        <div className="card bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title text-4xl">
              Our Journey: From Code to Inspiration
            </h2>
            <p>
              Welcome to Inspirational Voices, a homage to the profound wisdom
              and enduring legacies of black thought leaders throughout history.
              What began as a simple coding exercise in JavaScript, has
              blossomed into a powerful educational tool and a source of daily
              inspiration.
            </p>
          </div>
        </div>

        {/* The Initial Spark Section */}
        <div className="card bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title text-4xl">The Initial Spark</h2>
            <p>
              As a budding developer, I set out to refine my skills in
              JavaScript, particularly focusing on array methods. The idea was
              straightforward - create a random quote generator. However, as I
              delved deeper into the project, I realized that this could be more
              than just a coding exercise. It could be a platform to amplify
              voices that have shaped history and continue to inspire us today.
            </p>
          </div>
        </div>

        {/* A Tribute to Thought Leaders Section */}
        <div className="card bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title text-4xl">
              A Tribute to Thought Leaders
            </h2>
            <p>
              Thus, Inspirational Voices was born - a digital tribute to black
              thought leaders. Each time you click the quote generator button,
              not only does a random, impactful quote appear, but so does the
                        image of the leader who said it. This integration of visual and
                        textual elements aims to create a more immersive and meaningful
                        experience.
                    </p>
                </div>
            </div>

            {/* More Than Just an App Section */}
            <div className="card bg-base-100 shadow-xl mb-4">
                <div className="card-body">
                    <h2 className="card-title text-4xl">More Than Just an App</h2>
                    <p>
                        This app is a blend of technology and history, designed to
                        educate, motivate, and resonate with its users. It&apos;s a testament
              to how a simple practice in coding can evolve into something
              impactful and significant.
            </p>
          </div>
        </div>

        {/* Our Commitment Section */}
        <div className="card bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title text-4xl">Our Commitment</h2>
            <p>
              We are committed to continuously enriching our database with more
              quotes and leaders, ensuring that every interaction with our app
              is a unique and enlightening experience. Our goal is to inspire
              our users through the powerful words of these leaders, fostering a
              deeper understanding and appreciation of their contributions.
            </p>
          </div>
        </div>

        {/* Join Our Journey Section */}
        <div className="card bg-base-100 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title text-4xl">Join Our Journey</h2>
            <p>
              We invite you to explore, learn, and be inspired. Every quote you
              discover here is a step towards understanding the profound impact
              these leaders have had on the world. Thank you for being part of
              this journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
