import "./App.css";
import Card from "./components/Card";

import webdev from "./assets/webdev.jpeg";
import startup from "./assets/startup.jpg";
import js from "./assets/js.jpg";
import reactImg from "./assets/react.png";
import project from "./assets/project.jpg";
import openSource from "./assets/opensource.jpg";
import hackathon from "./assets/hackathon.jpg";
import codingChallenge from "./assets/codingchallenge.jpg";
import careerPanel from "./assets/careerpanel.jpg";
import ai from "./assets/ai.jpg";

function App() {

  const events = [
    {
      title: "React Workshop",
      description: "Learn React basics",
      date: "June 15",
      image: reactImg,
      link: "https://react.dev/learn",
    },
    {
      title: "JavaScript Bootcamp",
      description: "Deep dive into JS",
      date: "June 18",
      image: js,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      title: "Hackathon",
      description: "Build projects in 24 hours",
      date: "June 20",
      image: hackathon,
      link: "https://mlh.io/seasons/2026/events",
    },
    {
      title: "AI Meetup",
      description: "Discuss AI trends",
      date: "June 22",
      image: ai,
      link: "https://openai.com/research",
    },
    {
      title: "Web Dev Basics",
      description: "HTML, CSS, JS fundamentals",
      date: "June 25",
      image: webdev,
      link: "https://developer.mozilla.org/en-US/docs/Learn",
    },
    {
      title: "Open Source Day",
      description: "Contribute to GitHub projects",
      date: "June 28",
      image: openSource,
      link: "https://github.com/explore",
    },
    {
      title: "Startup Talk",
      description: "How startups are built",
      date: "July 1",
      image: startup,
      link: "https://www.ycombinator.com/library",
    },
    {
      title: "Coding Challenge",
      description: "Solve coding problems",
      date: "July 3",
      image: codingChallenge,
      link: "https://leetcode.com/problemset/all/",
    },
    {
      title: "Tech Career Panel",
      description: "Learn about tech jobs",
      date: "July 5",
      image: careerPanel,
      link: "https://roadmap.sh/frontend",
    },
    {
      title: "Project Showcase",
      description: "Show your final projects",
      date: "July 7",
      image: project,
      link: "https://devpost.com",
    },
  ];

  return (
    <div>
      <h1 className="title">Tech Events</h1>
      
      <div className="card-container">
        {events.map((event) => (
        <Card
          title={event.title}
          description={event.description}
          date={event.date}
          image={event.image}
          link={event.link}
        />
      ))}
    </div>

    </div>
  );
}

export default App;