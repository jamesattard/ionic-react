# About
This repo contains a number of exercises to practice Ionic React

# Instructions

## Setup Ionic Environment:
```
npm install -g @ionic/cli
ionic start myApp blank --type=react
cd myApp
```

## Start the Development Server:
`ionic serve`

## Push to Simulator (Capacitor)
```
ionic build
ionic cap add android
ionic cap add ios
ionic cap sync
ionic cap run android --livereload --external
```
