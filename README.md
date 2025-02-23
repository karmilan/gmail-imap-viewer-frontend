# Gmail IMAP Viewer Frontend

## Overview

This project is the frontend component of a full-stack application designed to display Gmail emails using the IMAP protocol. The frontend is built using React.js and styled with Tailwind CSS. It allows users to authenticate with their Gmail account, retrieve and display emails, and navigate through them with ease.

## Features

- **Authentication**: Users can authenticate via OAuth2 for Gmail.
- **Email Display**: Emails are displayed in a responsive and styled format using Tailwind CSS.
- **Pagination/Search**: Users can navigate through emails and search for specific ones.
- **Error Handling**: User-friendly messages for errors such as connection issues or invalid credentials.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/karmilan/gmail-imap-viewer-frontend.git
cd gmail-imap-viewer-frontend
```

2. Install dependencies:

```bash
npm install
```

### Running the Application

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure

```
/src
  /components
  - Auth.js
  - EmailList.js
  - EmailItem.js
  /pages
  - Home.js
  - Login.js
  /services
  - api.js
  - App.js
  - index.js
  - tailwind.config.js
```
