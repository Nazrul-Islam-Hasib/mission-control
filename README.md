# Mission Control

The Mission is a React-based web application that provides real-time updates and details about the current status of a Spectrum system. It leverages WebSocket connections to stream live data and offers a user-friendly interface for monitoring and taking action based on critical status changes.

## Technology Used

- React
- Tailwind CSS
- DaisiUI
- FontAwesome Icon
- Lottie Animation (https://lottiefiles.com/)


# Features

### 1. Real-time Spectrum Status Updates
   - Utilizes WebSocket connections to fetch and display live Spectrum status data.
   - Updates the user interface dynamically as new data is received.

### 2. User Action Notification Modal
   - Displays a modal when user action is required based on the Spectrum status.
   - Allows users to acknowledge and perform actions directly from the modal.

### 3. Manual Data Refresh
   - Provides a "Check Status" button for users to manually trigger a refresh of Spectrum status data.
   - Helps users stay up-to-date with the latest information.

### 4. Spectrum Details Card
   - Presents key details about the Spectrum status in a visually appealing card format.
   - Includes information such as message, velocity, altitude, temperature, ascending status, and action requirements.

### 5. FontAwesome Icons for Visual Representation
   - Uses FontAwesome icons to enhance the visual representation of Spectrum statistics.
   - Icons include rocket for velocity, line chart for altitude, thermometer for temperature, exclamation circle for ascending status, and astronaut for action required.


## Local Setup for Client-Side Application

Follow these concise steps to set up and run the client-side application locally.

**Prerequisites:**

- Node.js installed.

**Steps:**

1. **Clone the repository:**

   git clone https://github.com/Nazrul-Islam-Hasib/mission-control


2. **Install dependencies:**

   npm install
   

3. **Set environment variables in a `.env` file.**

4. **Start the development server:**

   npm run dev
   

   Access the app at `http://localhost:5173 `.
   

5. **For production build:**

   npm run build
 

   Find the production code in the `dist` directory.


