**MotionCRM** - Almost like Repair Cloud but for videos
```table-of-contents
```

### High level flow
1. Customer signs up for an account
2. Brought to the main dashboard but with the "onboarding" checklist (mostly just videos)
	1. Customer Creation flow
	2. Project creation flow
	3. Scripts
	4. Contracts
	5. Invoicing
3. Creates first customer
	1. Owner, Phone, email, social, website, type, location
4. Creates first project
	1. Type, video length, references, location, target audience, platforms
	2. Assigns the project to customer(s) (multiple customers might collaborate)

### High level features
- Your dashboard will show you who to follow up with, upcoming shoots, and any invoices that are due
- Any updates that a customer is connected to will update their timeline so you can track your interactions
- Projects will have a timeline as well
- Create and download invoices and attach to projects
- Create and send link to contract for customers to sign
- Store and share LUTs for multiple members in the company
- Kanban?

### Dashboard
- Tabbed view
	- Projects (in progress, upcoming, delayed, waiting on details)
	- Proposal 
		- Used to create new proposals and track them for projects I'm reaching out to start (cold calling section)
		- Diferent states:
			- Waiting to be sent
			- Awaiting client reply
			- Stale
				- Needs following up on if it's been over 2 weeks
	- Inquiry
		- This is from the contact form
		- need an API to hook into this to receive info from my website contact form

### Projects
- Title
- State
	- Not started
	- In progress
	- Delayed
	- Waiting on details
	- Cancelled
	- State note - note for myself to better understand WHY it's in this state
- Client(s) (1:M)
- Due date
- Video length
- Platforms
- Cost
- Type
	- Promo
	- Wedding
	- etc
	- Custom?
- Notes
- Todo list
	- One for the project
	- One for me (mainly social media checklist to keep on top of it)
- Project timeline (keep track of all the things I've done)
	- EX: Sent draft # N
	- Created project
	- Assigned client
	- Scouted main location
	- Gained permits
	- Moved due date
	- New quote

### Clients
- Main contact name(s)
- Business name (optional)
- Type
	- Wedding
	- Business
	- Political
	- Church
- projects (optional - 0:M)
- Phone
- Email
- Address (optional)
- Timeline (interactions)
	- Created client
	- Assigned project to client
