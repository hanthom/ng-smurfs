# ng-smurfs
Create an angular app that manages smurfs.

## Description

The purpose of this project is to give you an opportunity to practice what you've learned in Angular to create a fully functional Smurf web application.

This project is a little more open-ended than some of your other projects, primarily because at this point you should be striving to understand on your own how to implement Angular to create an application. The more you do on your own without help, the quicker you'll get better at Angular and the faster you'll learn.

This app encompasses all of the major pieces of Angular we've covered thus far:

1. Controllers, views, $scope
2. Services
3. $http and Promises

## Step 1: Explore the API
Head on over to smurfs.devmounta.in and take a look at the API. It's a fairly basic REST API that shows a list of smurfs. Each smurf has a name. You have the ability post new smurfs. **Note: the database resets itself every 10 minutes or so. Don't be alarmed :)**

## Step 2: Create Main View
Create our main view that includes the following:
- A layout with a Smurf Station header
- An awesome picture/gif/background of your choice.
- A section for listing smurfs

Spend a half hour or so at least making the layout look good. This should be a project that you can put in your portfolio.

Now start the angular portion:
- Create the controller for the main view and use a service to make the main HTTP call to get your smurf data.
- Display the smurf data in your main view

## Step 3: Adding Smurfs
Add a section into your main view where you can create a new Smurf. Since all you need is a name, this shouldn't be too complicated.

Add the method to your service for creating the Smurf.

## Step 4: Routing
Add routing to your app so that when a Smurf is clicked on from the main view, the user is taken to a `/smurfs/:smurfId` route unique to each Smurf.

Use a `resolve` so that the router can retrieve the individual Smurf data before activating the individual Smurf state.

## Step 5: Smurf profile directive
Create a directive for showing the Smurf's profile picture. The profile should be a smaller (scaled down if needed), square image taken from the `img` property of the Smurf's JSON data.

Use the directive in both the main view (next to each Smurf in the list) as well as on the individual Smurf details route.

Make it so that when the profile picture is clicked, the image is opened in a new tab.
