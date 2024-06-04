'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ls from '@/lib/localStorage';

export default function Home() {
  return (
    <main className="">
      <nav>
        <a href="#" className="unibot">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={23}
              height={23}
              fill="currentColor"
              className="bi bi-chat-left-text-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
            </svg>
          </div>
          <p>UniBot</p>
        </a>
        <div className="ulbutt">
          <ul>
            <li>
              <a href="#" className="home">
                Home
              </a>
            </li>
            <li>
              <a href="#">Our Solutions</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <button className="signup">
            <a href="signin.html">Sign Up</a>
          </button>
        </div>
      </nav>
      <div className="container1">
        <div className="content">
          <h2>
            Your Personal AI
            <br /> Guide to <br />
            Student Success
          </h2>
          <p>
            Because you deserve an easier way to access university information{' '}
            <br />
            and know the latest news
          </p>
        </div>
        <div className="img1">
          <img alt="img1" src="C:\Users\dell\Downloads\robot 1.png" />
        </div>
        <button className="getstarted">
          <a href="#">Get Started</a>
        </button>
      </div>
      <div className="container2">
        <a href="#">INTROUCING UNIBOT</a>
        <h2>
          Your Ultimate Study <br /> Companion
        </h2>
        <p>
          Our self-service UniBot that is simple, enjoyable to use, and answers
          all questions a student might have about the university
        </p>
      </div>
      <div className="container3">
        <div id="content">
          <a href="#">who we are</a>
          <h2>about us</h2>
          <p className="p1">
            Welcome to Unibot, your dedicated companion in navigating the
            intricacies of
            <br /> university life. Our mission is simple: to empower students
            with easy access to
            <br /> essential information and support. Whether you're seeking
            details about courses.
            <br />
          </p>
          <p className="p2">
            Unibot is here to provide accurate and timely responses round the
            clock. With Unibot
            <br /> by your side, you can bid farewell to endless searches and
            frustration. Our intelligent <br />
            chatbot streamlines the process, offering personalized assistance
            tailored to your
            <br />
            individual needs.
            <br />
          </p>
          <p id="extra-content" style={{ display: 'none' }}>
            From enrollment queries to exam schedules, and everything in
            between, Unibot is <br />
            your reliable ally, ensuring you stay informed and ahead of the
            curve.
            <br />
            Join the students who have discovered the convenience and efficiency
            of Unibot – <br />
            your indispensable partner throughout your university journey.
          </p>
          <button id="read-more-btn">Read More</button>
        </div>
        <div className="img2">
          <img
            src="C:\Users\dell\Downloads\image 2.png"
            alt="img2"
            id="container3img"
          />
        </div>
      </div>
      <div className="container4">
        <header>
          <a href="#">conversational ai chat bot</a>
          <h2>our solutions</h2>
        </header>
        <div className="conversation">
          <img src="conv1.png" />
        </div>
        <div className="underpic">
          <p>
            Ready to experience the benefits of Unibot for more informations as
            a student.
            <br />
            <a href="signin.html">Sign up today</a> and discover the future of
            university, a simple, effective, and user-friendly way to access
            university informations
          </p>
        </div>
      </div>
      <div className="container5">
        <div className="text">
          <h2>Get in Touche with Us</h2>
          <p>
            Have a question or want to discuss how you can leverage this?
            <br />
            Contact us today and our friendly team will be happy to assist you
          </p>
        </div>
        <div className="gmail">
          <div className="profileimg">
            <img src="C:\Users\dell\Downloads\equipe.png" />
          </div>
          <p>inggroup@gmail.com</p>
        </div>
      </div>
      <div className="thank">
        <p>thank you for visiting !</p>
      </div>
    </main>
  );
}
