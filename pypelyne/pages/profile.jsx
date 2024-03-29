import "tailwindcss/tailwind.css";
import Link from "next/link";
import Head from "next/head";
import { Navigation } from "../components/Navigation/Navigation";
import Dropdowns from "../components/Dropdowns";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../components/firebase/firebase";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { ProfilePicture } from "../components/Profile/ProfilePicture";
import { Tag } from "../components/Tags/Tag";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export default function Profile() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const sw = withReactContent(Swal);
  let user_profile = {};

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) router.replace("/");
    else {
      sw.fire({
        title: "Processing...",
        showConfirmButton: false,
        onOpen: () => {
          sw.showLoading();
        },
      });
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email }),
      };

      fetch("http://localhost:5000/api/profile", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          user_profile = data;
          setText(user_profile.bio);
          sw.close();
        });
    }
  }, [user, loading]);

  const [text, setText] = React.useState(
    user_profile.bio == null ? "" : user_profile.bio
  );
  const onBioChange = (e) => setText(e.target.value);

  function handlesc(e) {
    e.preventDefault();

    sw.fire({
      title: "Processing...",
      showConfirmButton: false,
      onOpen: () => {
        sw.showLoading();
      },
    });

    let updateOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, bio: text }),
    };

    fetch("http://localhost:5000/api/update_profile", updateOptions)
      .then((response) => response.json())
      .then((data) => {
        sw.close();
      });
  }

  return (
    <>
      <Head>
        <title>Welecome to your Profile</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-tr from-green-400 to-blue-500 custom-blur flex items-center justify-center flex-col">
        <section id="main" className="glass rounded-3xl m-2">
          <ProfilePicture
            image="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            className="glass rounded-2xl w-52 h-52 m-auto mt-4"
          />
          <div className="flex items-center justify-center">
            <textarea
              className="glass w-3/4 h-1/5 m-3 rounded-2xl p-3"
              id="biography"
              cols="15"
              rows="5"
              value={text}
              onChange={onBioChange}
            />
          </div>
          <div
            id="tagSection"
            className="flex flex-wrap items-center justify-center "
          >
            <Tag
              tagText="Flask"
              tagColour="bg-blue-300"
              textColour="text-gray-600"
            />
            <Tag
              tagText="Python"
              tagColour="bg-blue-300"
              textColour="text-gray-600"
            />
            <Tag
              tagText="Git"
              tagColour="bg-yellow-300"
              textColour="text-gray-600"
            />
            <Tag
              tagText="Yarn"
              tagColour="bg-yellow-300"
              textColour="text-gray-600"
            />
            <Tag
              tagText="Node.JS"
              tagColour="bg-green-300"
              textColour="text-gray-600"
            />
            <Tag
              tagText="React.JS"
              tagColour="bg-green-300"
              textColour="text-gray-600"
            />
            <Tag
              tagText="Tailwindcss"
              tagColour="bg-green-300"
              textColour="text-gray-600"
            />
            <Tag
              tagText="Cockroach DB"
              tagColour="bg-purple-300"
              textColour="text-gray-600"
            />
            <Tag
              tagText="Firebase"
              tagColour="bg-purple-300"
              textColour="text-gray-600"
            />
          </div>

          <div>
            <button
              className="flex items-center glass rounded-3xl absolute bottom-40 right-52"
              onClick={handlesc}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 p-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                />
              </svg>
            </button>
          </div>
        </section>
        {/* <Dropdowns /> */}
        <Navigation />
      </main>
    </>
  );
}
