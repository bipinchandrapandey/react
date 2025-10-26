import React from 'react';
import './App.css';
import CardUser from './component/card';
import GoogleLogo from './assets/mylogo/google.png'; // ✅ correct import path

const App = () => {
  const jobOpenings = [
    {
      brandLogo: GoogleLogo, // ✅ local image reference (no quotes!)
      companyName: "Google",
      datePosted: "5 days ago",
      postTag1: "Full Time",
      postTag2: "Senior Level",
      pay: 60,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      postTag1: "Part Time",
      postTag2: "Junior Level",
      pay: 35,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "1 month ago",
      postTag1: "Full Time",
      postTag2: "Mid Level",
      pay: 50,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg",
      companyName: "Apple",
      datePosted: "10 days ago",
      postTag1: "Full Time",
      postTag2: "Senior Level",
      pay: 65,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "3 weeks ago",
      postTag1: "Part Time",
      postTag2: "Junior Level",
      pay: 40,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      datePosted: "2 days ago",
      postTag1: "Full Time",
      postTag2: "Senior Level",
      pay: 70,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
      companyName: "Twitter",
      datePosted: "1 week ago",
      postTag1: "Full Time",
      postTag2: "Mid Level",
      pay: 55,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg",
      companyName: "LinkedIn",
      datePosted: "6 days ago",
      postTag1: "Part Time",
      postTag2: "Junior Level",
      pay: 38,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "10 weeks ago",
      postTag1: "Full Time",
      postTag2: "Senior Level",
      pay: 60,
      location: "Mumbai, India",
    },
    {
      brandLogo: GoogleLogo,
      companyName: "Google",
      datePosted: "3 months ago",
      postTag1: "Part Time",
      postTag2: "Mid Level",
      pay: 45,
      location: "Mumbai, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map((job, index) => (
        <CardUser
          key={index}
          brandLogo={job.brandLogo}
          companyName={job.companyName}
          datePosted={job.datePosted}
          postTag1={job.postTag1}
          postTag2={job.postTag2}
          pay={job.pay}
          location={job.location}
        />
      ))}
    </div>
  );
};

export default App;
