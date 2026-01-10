import React from 'react'
import Card from './component/card.jsx'
const App = () => {
  const jobs = [
  {
    date: "20 May, 2023",
    company: "Amazon",
    title: "Senior UI/UX Designer",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    tag1: "Part time",
    tag2: "Senior level",
    tag3: "Distant",
    tag4: "Project work",
    salary: "$250/hr",
    location: "San Francisco, CA",
    buttonText: "Details",
    bookmarked: false
  },
  {
    date: "12 June, 2023",
    company: "Google",
    title: "Product Designer",
    logo: "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571050.jpg",
    tag1: "Full time",
    tag2: "Mid level",
    tag3: "Remote",
    tag4: "Design",
    salary: "$180/hr",
    location: "Mountain View, CA",
    buttonText: "Details",
    bookmarked: true
  },
  {
    date: "05 July, 2023",
    company: "Microsoft",
    title: "UX Researcher",
    logo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    tag1: "Contract",
    tag2: "Senior level",
    tag3: "Hybrid",
    tag4: "Research",
    salary: "$200/hr",
    location: "Redmond, WA",
    buttonText: "Details",
    bookmarked: false
  },
  {
    date: "18 July, 2023",
    company: "Meta",
    title: "Product UI Designer",
    logo: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
    tag1: "Full time",
    tag2: "Senior level",
    tag3: "Remote",
    tag4: "UI Design",
    salary: "$220/hr",
    location: "Menlo Park, CA",
    buttonText: "Details",
    bookmarked: false
  },
  {
    date: "02 Aug, 2023",
    company: "Netflix",
    title: "UX Engineer",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcNmVEdCO0ZpinFKT3zS55EQpNos4EX6Qvw&s",
    tag1: "Full time",
    tag2: "Senior level",
    tag3: "Remote",
    tag4: "Engineering",
    salary: "$240/hr",
    location: "Los Gatos, CA",
    buttonText: "Details",
    bookmarked: true
  },
  {
    date: "15 Aug, 2023",
    company: "Apple",
    title: "Human Interface Designer",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rIxFRNX2QZlnQidGjE75yAg9jR4Jhy3Jgw&s",
    tag1: "Full time",
    tag2: "Senior level",
    tag3: "Onsite",
    tag4: "HCI",
    salary: "$260/hr",
    location: "Cupertino, CA",
    buttonText: "Details",
    bookmarked: false
  },
  {
    date: "28 Aug, 2023",
    company: "Adobe",
    title: "UX/UI Designer",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLTsEbEc9W4KLOFJi16maxjlDgTLIVi2Qc5Q&s",
    tag1: "Contract",
    tag2: "Mid level",
    tag3: "Remote",
    tag4: "Creative",
    salary: "$170/hr",
    location: "San Jose, CA",
    buttonText: "Details",
    bookmarked: false
  },
  {
    date: "10 Sep, 2023",
    company: "Spotify",
    title: "Product Experience Designer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
    tag1: "Full time",
    tag2: "Senior level",
    tag3: "Remote",
    tag4: "Product",
    salary: "$210/hr",
    location: "Stockholm, Sweden",
    buttonText: "Details",
    bookmarked: true
  },
  {
    date: "22 Sep, 2023",
    company: "Airbnb",
    title: "UX Designer",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicMDzk5BVKCMaspR4wow1fC8Kt9fDI-ACBg&s",
    tag1: "Full time",
    tag2: "Mid level",
    tag3: "Hybrid",
    tag4: "UX",
    salary: "$190/hr",
    location: "San Francisco, CA",
    buttonText: "Details",
    bookmarked: false
  },
  {
    date: "04 Oct, 2023",
    company: "Uber",
    title: "Interaction Designer",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAibtuIe2BI9kfJQE2nBDrdkgyBSrASSPWw&s",
    tag1: "Full time",
    tag2: "Senior level",
    tag3: "Hybrid",
    tag4: "Interaction",
    salary: "$205/hr",
    location: "New York, NY",
    buttonText: "Details",
    bookmarked: false
  },
  {
    date: "16 Oct, 2023",
    company: "LinkedIn",
    title: "UX Product Designer",
    logo: "https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png",
    tag1: "Full time",
    tag2: "Senior level",
    tag3: "Remote",
    tag4: "Product UX",
    salary: "$215/hr",
    location: "Sunnyvale, CA",
    buttonText: "Details",
    bookmarked: true
  },
  {
    date: "29 Oct, 2023",
    company: "Twitter (X)",
    title: "Visual Designer",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDqLCMa1-Co57fvh9N4gHopncC-Cls-xDyhQ&s",
    tag1: "Contract",
    tag2: "Mid level",
    tag3: "Remote",
    tag4: "Visual",
    salary: "$165/hr",
    location: "Remote",
    buttonText: "Details",
    bookmarked: false
  },
  {
    date: "11 Nov, 2023",
    company: "Tesla",
    title: "UI Designer",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtR3neyop9Cpm0RBJU4pRFAXIpYAk6qqf2OA&s",
    tag1: "Full time",
    tag2: "Senior level",
    tag3: "Onsite",
    tag4: "Automotive",
    salary: "$230/hr",
    location: "Austin, TX",
    buttonText: "Details",
    bookmarked: false
  },
  {
    date: "23 Nov, 2023",
    company: "IBM",
    title: "UX Consultant",
    logo: "https://substackcdn.com/image/fetch/$s_!aFzv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa27a43b7-f1ec-4586-9898-5f43c9b7cdbf_1000x1000.jpeg",
    tag1: "Full time",
    tag2: "Senior level",
    tag3: "Hybrid",
    tag4: "Consulting",
    salary: "$195/hr",
    location: "Armonk, NY",
    buttonText: "Details",
    bookmarked: true
  },
  {
    date: "05 Dec, 2023",
    company: "Salesforce",
    title: "Experience Designer",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEADR-fK69mReHZLDOZhxT62IAgdLObf0Z2Q&s",
    tag1: "Full time",
    tag2: "Mid level",
    tag3: "Remote",
    tag4: "Experience",
    salary: "$185/hr",
    location: "San Francisco, CA",
    buttonText: "Details",
    bookmarked: false
  }
];


  return (
    <div className='parent'>
      {/* {jobs.map(function(job, idx){
       <div key={idx}>
         return <Card date={job.date}
          company={job.company} 
          title={job.title} 
          logo={job.logo} 
          tag1={job.tag1} 
          tag2={job.tag2} 
          tag3={job.tag3} 
          tag4={job.tag4}
          salary={job.salary} 
          location={job.location} 
          buttonText={job.buttonText} 
          bookmarked={job.bookmarked} />
       </div>
      })} */}
      {jobs.map((job, idx) => (
        <div key={idx}>
          <Card
            date={job.date}
            company={job.company}
            title={job.title}
            logo={job.logo}
            tag1={job.tag1}
            tag2={job.tag2}
            tag3={job.tag3}
            tag4={job.tag4}
            salary={job.salary}
            location={job.location}
            buttonText={job.buttonText}
            bookmarked={job.bookmarked}
          />
        </div>
      ))} 
    </div>
  )
}

export default App
