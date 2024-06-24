
# NextJS v14 Google OneTap Authentication

This repository demonstrates how to implement Google OneTap authentication in a NextJS v14 app using the App Router.

## Installation

### 1. Create a Google Application

To get started, you'll need to create a Google Application. Follow the steps in [this guide](https://developers.google.com/identity/sign-in/web/sign-in) to set up your application and obtain your Client ID.

### 2. Configure the Environment Variables

Once you have your Client ID, copy it and follow these steps:

1. Rename the `template.env.local` file to `.env.local`.
2. Open the `.env.local` file and add your Client ID as follows:

```
NEXT_PUBLIC_GOOGLE_CLIENT_ID=YOUR_CLIENT_ID_HERE
```

### 3. Authorized URLs

Make sure your application is running on an HTTPS URL that has been authorized in your Google API Console. This is necessary for the Google OneTap feature to work correctly.

## Usage

To use the Google OneTap authentication in your NextJS v14 project, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/slxca/google-onetap-nextjs.git
```

2. Install the dependencies:

```sh
cd google-onetap-nextjs
npm install
```

3. Start the development server:

```sh
npm run dev
```

4. Open your application in the browser. You should see the Google OneTap prompt appear.

## Demo

You can see a live demo of this implementation at [onetap.s-luca.com](https://onetap.s-luca.com).

## Contributing

We welcome contributions! Please feel free to submit issues, fork the repository, and open pull requests.

## Support

If you find this project helpful, please consider supporting us by sponsoring on GitHub: [github.com/sponsors/slxca](https://github.com/sponsors/slxca).

---

Thank you for your interest in our project! We hope it helps you implement Google OneTap authentication in your NextJS applications.
