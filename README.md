
---

# QuackSpace

**QuackSpace** is a Zoom clone application designed for seamless video conferencing, real-time chat, and collaborative online meetings. Built with modern web technologies, QuackSpace offers a user-friendly interface and robust features to support virtual communication and collaboration.

## Features

- **High-Quality Video Conferencing:** Enjoy clear and stable video calls with multiple participants.
- **Real-Time Messaging:** Chat with participants during the meeting without interrupting the flow.
- **Screen Sharing:** Share your screen to present documents, slideshows, or applications.
- **Meeting Recording:** Record your meetings for future reference or sharing with absent participants.
- **Participant Management:** Host controls for muting, removing participants, and assigning co-hosts.
- **Custom Meeting Backgrounds:** Personalize your video feed with custom virtual backgrounds.
- **Breakout Rooms:** Split meetings into smaller groups for focused discussions and then rejoin the main meeting.
- **Instant and Scheduled Meetings:** Start meetings instantly or schedule them for later with calendar integration.
- **Secure Authentication:** Secure sign-in with options for single sign-on (SSO) and social media logins.
- **Cross-Platform Support:** Works seamlessly on web, desktop, and mobile devices.

### Prerequisites

- **Node.js:** Ensure you have Node.js installed (version 14.x or higher).


### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/demenico14/quackspace.git
   cd quackspace
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and configure the following variables:

   ```plaintext
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```






---

Feel free to customize the content as per your project specifics!
