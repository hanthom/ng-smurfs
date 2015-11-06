# ng-smurfs
Create an angular app that manages smurfs.

## Description

The purpose of this project is to give you an opportunity to practice what you've learned in Angular to create a fully functional Smurf web application.

This project is a little more open-ended than some of your other projects, primarily because at this point you should be striving to understand on your own how to implement Angular to create an application. The more you do on your own without help, the quicker you'll get better at Angular and the faster you'll learn.

This app encompasses all of the major pieces of Angular we've covered thus far:

1. Controllers, views, $scope
2. Services
3. $http and Promises

## Step 1 Explore the API
Head on over to smurfs.devmounta.in and take a look at the API. It's a fairly basic REST API that shows a list of smurfs. Each smurf has a name. You have the ability post new smurfs. **Note: the database resets itself every 10 minutes or so. Don't be alarmed :)**

## Step 1: Create Main View
Create our main view that includes the following:
- A layout with a Smurf Station header
- An awesome picture/gif/background of your choice.
- A section for listing smurfs

Spend a half hour or so at least making the layout look good. This should be a project that you can put in your portfolio.

Now start the angular portion:
- Create the controller for the main view and use a service to make the main HTTP call to get your smurf data.
- Display the smurf data in your main view

## Step 2: Adding Smurfs
Add a section into your main view where you can create a new Smurf. Since all you need is a name, this shouldn't be too complicated.

Add the method to your service for creating the Smurf.
