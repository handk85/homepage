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

### Delete Google Analytics

Please delete the global site tag (gtag.js) for Google Analytics in [public/index.html](https://github.com/handk85/homepage/blob/be38cadf2076620211078e34b4601793dd9d9b68/public/index.html#L8C1-L22C37).

### Update Meta Tags

Please update/delete meta tags in [public/index.html](https://github.com/handk85/homepage/blob/c47b02fa7ac761fe8357e057489a0f0cb9c76f9f/public/index.html#L24C1-L43C29).

### Update `public/manifest.json`

- Update `short_name`, `name`, and `icons`

### Data

All your publication, service, education, and work experience should be stored in `public/data/` in YAML format.
Then, it will be automatically rendered in the homepage.

### Update bio info

Please update `src/Abstract.tsx` with your bio.

### Update Contact and CV info

Please update `Contact` and `CV` functions in `src/App.tsx`.
