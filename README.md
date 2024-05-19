# LinguaStream

Inspiration

Our objective, purpose, and inspiration for this project came from our desire to help and aid in people with accessibility needs - especially those who are visually impaired. We designed is to break down language barriers in digital content consumption by providing real-time translation. In fact, one of our team members who was struggling with learning to code is more fluent in Chinese; thus inspired us to ma​ke this project.


## What it Does

LinguaStream is a user-friendly website that provides audio translation of YouTube videos into the user's desired languages in real time, removing the need for subtitles and making content more accessible. Furthermore, LinguaStream contains a built-in chatbot to answer questions regarding the video content; enhancing user understanding and engagement by providing additional information and clarifications.


## How We Built It

For the frontend, we utilized React, TailwindCSS, ChakraUI to build interactive components for the home page and landing page, as well as Axios to fetch dynamic content.

Besides that, for the Backend, we utilized Flask to host the website and sqlLite for the user sign up/login information. Furthermore, we used youtube_transcript_api and Youtube API v3 to fetch YouTube details, and Google's texttospeech, vertexai for gemini, and firebase to generate, modify, and store the translated audios for the YouTube videos.


## Challenges We Ran Into

For the frontend, we faced challenges with routing and data fetching between the frontend and backend using Axios. To overcome this, we had to ensure our error handling logic was correct as well as using async await for asynchronous operations. 

For the backend, there were several issues with Bark which is used to clone voices so we could generate audios from text with unique and specialized voices like Obama and Gordon Ramsay. These issues included downloading various libraries, and the generated voices took very long since we were limited to CPU instead of GPU. Furthermore, it is very difficult to sync up the audios without making it inaudible.​


## Accomplishments That We're Proud Of

We are particularly proud of completing a Full Stack app with authentication. We are also very proud of creating an app that actually works an end-to-end process. Besides that, we are proud to make our app accessible for audiences with different language levels (English, Chinese, French). We are also proud of the low latency of regular voices & chatbot feature.


## What We Learned

We learnt several things, one of which was using Axios to link frontend and backend endpoints. Furthermore, we learnt to use several libraries and packages which were very new to us. Moreover, we learnt to use multiple API calls on Google Cloud Services and other services. Most importantly, we learnt how to work in a team effectively and how to build a Full Stack app from planning, building, testing, and deploying.

​
## What's Next?

We plan to diversify our target audience to more languages, accents, and dialects to be able to reach more people. Furthermore, we plan to deploy our project as a public web app, so it is accessible to people across the globe. In the future, we also plan to improve our text-to-speech system and make the audios & videos more in-sync.
