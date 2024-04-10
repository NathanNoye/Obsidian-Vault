1. Situation: Set the scene and give the necessary details of your example.
2. Task: Describe what your responsibility was in that situation.
3. Action: Explain exactly what steps you took to address it.
4. Result: Share what outcomes your actions achieved.

### TOC
```table-of-contents
```
### Ryan's Article
https://dev.to/jobber/jobbers-react-native-migration-success-600
#### Key points
 - Loved that you use Sentry, it's fantastic for error reporting especially mobile apps.
 - Bitrise is great for the CICD pipeline. I've used both codemagic and bitrise and found bitrise offered more flexibility.
 - Thrilled that you use Split for feature flag management.
 - "I can see you put a lot of care into ensuring the app has a strong foundation!"
### Nurosene mobile app relaunch
- **Background** - The app was originally developed by a 3rd party in a custom version of the BLoC architecture. A lot of issues stemmed from a misunderstanding of this custom version.
- **Situation** - App slow to develop, wasn't native feeling, regression bugs were a normal occurrence
- **Task** - I was brought in to develop the app and eventually was promoted to lead engineer and I put forward a plan to address the issues and tech-debt caused by the original implementation
- **Action** - I met with engineering members to discuss issues they had with the current app, also met with external shareholders on issues they experienced (slow to release new features, constant bugs, etc), looked at multiple routes on how to resolve the issues, different architectures and features we had available within our current tech stack, all while focused on the end goal and priorities of the app. Approached senior leadership with a proposal for the changes with the benefits and timeline of a version 1 relaunch which was 3 months.
- **Result** - We relaunched version 1 in 1.5 months, removed all tech debt, feature development output and bug resolution time dependancy was cut by more than 60% (from 3 weeks to 2-4 days), saved the company thousands in development hours, app was more stable, and we were able to pivot faster based on customer feedback

### Nurosene Animation system
- **Background** - The key feature of the app was the brain training portion and was mainly led by the marketing team by creating brain training videos.
- **Situation** - Brain training videos were only playing at 30fps and was causing some users headaches because it looked "jittery". We needed the videos to play at 60fps. I also noticed that on slower connections - the videos wouldn't load.
- **Task** - I triaged and found the root cause of the issue (stemming from the videos). I created multiple mini POC's (created my own videos, hardcoded, rendered 60fps videos to 30fps and vice versa), all came down to the usage of videos.
- **Action** - After triaging and finding out the root cause, I approached senior management with 3 options with timelines and pros/cons and my suggestion. 
	1. Keep doing what we're doing (worst)
	2. Make an animation system (best for everyone but takes time)
	3. half and half (middle road - change animations to be slower or add motion blur to the videos to "mask" the jittering effect)
	After discussing it with the VP of engineering - I went and created an MVP. The animation system would integrate with the existing headless CMS, be flexible enough to change on the fly, load incredibly faster due to it being JSON instead of an MP4 file, allow us to create "randomized and customized" content specific to individual users, modularize our animations, and eventually introduce the self-generated brain training games.
- **Result** - I went and created the entire system in 48 hours and were able to deploy the new changes within a week of finding where the issue was originating from. It saved the company over 80k annually since we no longer needed to pay for a videographer to create animated videos. After the company shut down - the animation system was still running on autopilot for over a year since we broke the animations down into "buckets" that we would pull from based on gender, heart health, and age. The founder (who is a neurologist) could now go in and create his own trainings. If there was an animation that needed to be built for a new training - I made it so we could still upload a video and release that until our next deployment

### Thinkific theme builder
- **Background** - Thinkific has 2 apps - generic and branded (white label version of generic). Creators could originally create their "theme" by selecting a single colour and we create the rest of the colour state (disabled, clicked, etc)
- **Situation** - Originally started off with a few helper functions here and there to manage the app's but eventually grew into a massive feature with us trying to cover every basis and edge case based on the colour. Some things mathematically worked but in practice didn't (like having black text on red background - contrast is correct mathematically but is hard to read)
- **Task** - I put forward a suggestion to allow the creators create their own theme by allowing them to use on online theme builder tool on the web app where they could choose which colours are used where (button text / background, app header, disabled state, app nav background / text colour)
- **Action** - Put together basic wireframes, flow of data, where the theme would be stored both on web and in the DB, which teams would see the changes occurring, required resources, timeline, which tech stacks would be touched. After presenting that to my engineering manager, he gave me the go ahead so I went ahead and created the tickets and started work on it. I handled the mobile, web, and server side myself (including getting setup to work within the monolith). 
	- Mobile involved fetching and storing the theme data in local storage. 
	- Web involved creating the dashboard that updated the theme preview in real time by having a phone mockup display the changes.
	- Server side involved creating a new GraphQL API, models, and working with the external and internal event busses
	The entire feature was deployed to prod front to back within 2 sprints.
- **Result** - Increased sales for the app since users complained about the limited customizability but now had more reason to purchase, user complaints went down, code complexity went down,  opened the door for more customizations (changing nav bar button order, wording "Home -> dashboard"), display bugs dropped significantly, further changes became easier since managing the theme was as simple as adding support for the new colour, team was happier since it was easier to manage without worrying about regression issues.


### Questions
1. How did feel this interview went? Were you happy with my answers err did I leave anything left to be desired?
2. Whats your favourite part about working at Jobber?
3. What do you enjoy about Jobber's culture?
4. At Thinkific, there was something called "Blue Sky Week" - have you heard of it? 
	1. YES - "How does Jobber foster innovation among its team members?"
	2. NO - "Essentially it was a single week where the company could break into self-made teams and work on new innovative features. Someone made an AI powered course trailer builder that would take your videos and your voice and would use AI to build an entire trailer for your course. Does Jobber do anything similar?"