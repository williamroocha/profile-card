import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const btnData = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/williamrochaa/",
    icon: "#",
  },
  {
    name: "GitHub",
    url: "https://github.com/williamroocha",
    icon: "#",
  },
  {
    name: "Portfolio",
    url: "https://williamrocha.dev/",
    icon: "#",
  },
];

function App() {
  return (
    <main className="wrapper">
      <Container />
    </main>
  );
}

function Container() {
  return (
    <div className="container">
      <ProfileImg />
      <ProfileDetails />
    </div>
  );
}

function ProfileImg() {
  return (
    <>
      <img
        className="profile-img"
        src={`${process.env.PUBLIC_URL}/profile.png`}
        alt="Profile"
      />
    </>
  );
}

function ProfileDetails() {
  return (
    <>
      <h1 className="profile-name">William Rocha</h1>
      <p className="location">Lisbon, Portugal</p>
      <Description />
      <Buttons btnData={btnData} />
    </>
  );
}

function Description() {
  return (
    <>
      <p className="bio">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </p>
    </>
  );
}

function Buttons({ btnData }) {
  return (
    <div className="button-container">
      {btnData.map((btn, index) => (
        <Btn key={index} name={btn.name} url={btn.url} icon={btn.icon} />
      ))}
    </div>
  );
}

function Btn({ name, url, icon }) {
  return (
    <a href={url}>
      <button className="btn" type="button">
        {name}
      </button>
    </a>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
