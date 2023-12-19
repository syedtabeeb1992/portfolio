import React, { useEffect, useState } from "react";
import "./Experiencs.css";

import about from "../../assests/images/starlines.png";
import stixisLogo from "../../assests/images/stixlogo.png";
import bounceLogo from "../../assests/images/bounce.png";
import ebix from "../../assests/images/ebix.png";
import cuisinelinksLogo from "../../assests/images/cuisinelinks.png";
import ExperienceSolo from "./ExperienceSolo";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  getDocs,
} from "firebase/firestore";

// apiKey: "AIzaSyAyzz1ZNfvrBG7HsAqJMQJo6MOfzeZMqwE",
// authDomain: "myresume-9e160.firebaseapp.com",
// projectId: "myresume-9e160",
// storageBucket: "myresume-9e160.appspot.com",
// messagingSenderId: "6635918462",
// appId: "1:6635918462:web:f24d204bb8dcee6423b42f"

const Experience = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Check if Firebase is not already initialized
    if (!window.firebase || !window.firebase.apps.length) {
      // Initialize Firebase with your config
      const firebaseConfig = {
        apiKey: "AIzaSyAyzz1ZNfvrBG7HsAqJMQJo6MOfzeZMqwE",
        authDomain: "myresume-9e160.firebaseapp.com",
        projectId: "myresume-9e160",
        storageBucket: "myresume-9e160.appspot.com",
        messagingSenderId: "6635918462",
        appId: "1:6635918462:web:f24d204bb8dcee6423b42f",
      };

      // Initialize Firebase using modular SDK
      window.firebase = initializeApp(firebaseConfig);
    }

    // Get a reference to the firestore database using modular SDK
    const db = getFirestore(window.firebase);

    // Example: Get data from a collection named 'yourCollection'
    const collectionRef = collection(db, "workexp");

    const getdata = async () => {
      try {
        const querySnapshot = await getDocs(collectionRef);
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(newData);

        console.log("newdata", newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getdata();
  }, []);
  return (
    <section className="box-shadow-beeb exp-container " id="exp">
      <div className="container">
        <div className="title-section">&#60; Work Experiance &#62;</div>

        <div className="njnj lineone lio">
          {data.map((response) => {
            return response.workexp.map((ss) => (
              <div className="wrapper-work-exp">
                <img src={ss.img} />
                <div className="workdeets">
                  <h2>{ss.companyName}</h2>
                  <h3>{ss.designation}</h3>
                  <p> {ss.duration} </p>
                  <p style={{ fontSize: "12px" }}>{ss.skillsUsed}</p>

                  {/* {Array.isArray(ss.responsibilities) &&
                    ss.responsibilities.map((responsibility, index) => (
                      <p key={index}>{responsibility}</p>
                    ))} */}
                </div>
              </div>
            ));
          })}
        </div>

        {/* <div className="mid-exp">
          <div className="lineimg">
            <img src={about} />
          </div>

          <div className="lineone lio">
            <ExperienceSolo
              title="NAVYA CARE"
              deets="Navya Care · Full-time"
              expdeets="May 2022 - Oct 2023"
              complogo={stixisLogo}
            />
          </div>

          <div className="lineone lio">
            <div className="leftone firzero "> </div>

            <ExperienceSolo
              title="SENIOR WEB DEVELOPER"
              deets="Stixis Technologies · Full-time"
              expdeets="Aug 2021 - April 2022"
              complogo={stixisLogo}
            />
          </div>

          <div className="lineone lio">
            <ExperienceSolo
              title="SENIOR FRONT-END DEVELOPER"
              secondaryTitle="FRONT-END DEVELOPER"
              deets="Bounce"
              expdeets="Oct 2017 - Mar 2020 "
              complogo={bounceLogo}
              classs="fl-ri"
            />

            <div className="leftone "> </div>
          </div>

          <div className="lineone lio">
            <div className="leftone "> </div>
            <ExperienceSolo
              title="FRONT-END DEVELOPER"
              deets="Ebix software"
              expdeets="Dec 2015 - Oct 2017"
              complogo={ebix}
            />
          </div>

          <div className="lineone lio">
            <ExperienceSolo
              title="APPLICATION PROGRAMMER"
              deets="Cuisine Links"
              expdeets="Jan 2015 - Dec 2015 "
              classs="fl-ri"
              complogo={cuisinelinksLogo}
            />
            <div className="leftone "> </div>
          </div>
        </div> */}

        <div className="title-section">&#60; / Work Experiance &#62;</div>
      </div>
    </section>
  );
};

export default Experience;
