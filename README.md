# Events Project

## Description

This project is a web application for managing events, integrating features like user authentication, database management, Google Calendar for scheduling, and Stripe for payment processing.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Auth.js**: Authentication library for managing user sessions.
- **Prisma**: ORM (Object-Relational Mapping) tool for database access.
- **PostgreSQL**: Relational database for storing application data.
- **Google Calendar API**: For event scheduling and calendar management.
- **Stripe API**: For handling payments.

## Prerequisites

- Node.js (version 14.x or above)
- PostgreSQL
- Google Cloud account (for Google Calendar API)
- Stripe account (for payment processing)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/KcalbJ/events-app.git
    cd events-project
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root of your project and add the following environment variables:

    ```env
    POSTGRES_URL
    POSTGRES_PRISMA_URL
    POSTGRES_URL_NO_SSL
    POSTGRES_URL_NON_POOLING
    POSTGRES_USER
    POSTGRES_HOST
    POSTGRES_PASSWORD
    POSTGRES_DATABASE

    AUTH_SECRET

    AUTH_GOOGLE_ID
    AUTH_GOOGLE_SECRET

    AUTH_RESEND_KEY

    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    STRIPE_SECRET_KEY
    STRIPE_WEBHOOK_SECRET

    NEXT_PUBLIC_SERVER_URL
    ```

4. **Set up the PostgreSQL database:**

    Make sure PostgreSQL is running on your local machine. You can use a tool like pgAdmin to connect to the provided database URL.

5. **Run Prisma migrations:**

    ```bash
    npx prisma migrate dev --name init
    ```

6. **Seed the database (optional):**

    ```bash
    npx prisma db seed
    ```

7. **Generate Prisma client:**

    ```bash
    npx prisma generate
    ```

## Running the Project Locally

1. **Start the development server:**

    ```bash
    npm run dev
    ```

2. **Access the application:**

    Open your browser and go to `http://localhost:3000`.

## Google Calendar Integration

To use Google Calendar API, you need to set up OAuth 2.0 credentials in the Google Cloud Console. 

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project.
3. Navigate to the OAuth consent screen and configure it.
4. Go to Credentials and create OAuth 2.0 Client IDs.
5. Set the authorized redirect URIs to `http://localhost:3000/api/auth/callback/google`.
6. Copy the Client ID and Client Secret to your `.env` file.

## Stripe Integration

To use Stripe for payment processing:

1. Sign in to your Stripe account and get your API keys from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys).
2. Add the API keys to your `.env` file.

## Additional Scripts

- **Build the project:**

    ```bash
    npm run build
    ```

- **Start the production server:**

    ```bash
    npm start
    ```

- **Lint the code:**

    ```bash
    npm run lint
    ```

- **Format the code:**

    ```bash
    npm run format
    ```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
