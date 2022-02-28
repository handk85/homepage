# React Homepage

Working example: https://donggyun.com

This project provides a template for React+TypeScript based academic homepage.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install Dependencies

Please run `npm ci` to install required dependencies

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Customize for your own

To check an example of customization, please check [the branch](https://github.com/handk85/react-homepage/tree/donggyun) in this repo

### Data

All your publication, service, education, and work experience should be stored in `public/data/` in YAML format.
Then, it will be automatically rendered in the homepage.

### Update bio info

Please update `src/Abstract.tsx` with your bio.

### Update Contact and CV info

Please update `Contact` and `CV` functions in `src/App.tsx`.

### Update `public/index.html`

Pleaese update meta tags with your information

### Update `public/manifest.json`

- Update `short_name`, `name`, and `icons`

