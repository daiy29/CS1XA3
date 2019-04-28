# Project 03 - Type Racing 
Type Racing is a keyboard based game which through typing difficult words at an increasing pace tests your typing abilities and compares them to other users. This project was inspired by Type Racer, but implemented so that you could compete with others without needing to play in real time. 
## Program requirements
- Django==2.2
- Pillow==6.0.0
- pkg-resources==0.0.0
- pytz==2019.1
- sqlparse==0.3.0

Modifications were made to the formatting of files in the directory, and it differs from the layout in the rubric. There is no project3.html file, instead a copy of all html files used are available in the HTML folder at the base directory of the project. Modifying these HTML files **will not** affect how the program runs. These files are used as references. The files that the program are dependant on are covered in the next section.
## Navigation and Directory Format
The directory is formatted as shown below. Inside the Project03 folder, you will find a reference folder of the HTML files, the requirements, as well as this README. The django_project folder contains files that are used by django to create our program. django_project/djangoapp is the environment that we use for the project. This folder does not need to be modified. django_project/djangologin contains our database, manage, as well as four folders - djangologin, gameBoardApp, loginapp, and templates. djangologin contains settings, which are the settings used for the project, as well as urls which route different urls to views. gameBoardApp and loginapp are the apps for the game/scoreboard and user-authentication respectively. the models and views/dispviews files can be modified to create models and views. Finally, the templates folder contains the HTML files for every page in our website. The Javascript and CSS are imbedded into the HTML files.

![The image has not loaded properly.](https://i.imgur.com/qfaq4lJ.png "General Directory Format")

## Running the program
To run the program, follow these steps:

**For users in CS1XA3:**
- SSH into 1xa3 servers, and cd into daiy29
- Activate the virtual environment by navigating into the djangoapp folder, using the command source bin/activate
- In the djangologin folder, run the app using the command python3 manage.py runserver localhost:[portnum]
- the game will be available at https://mac1xa3.ca/e/[your_id]

**For other users or if previous method fails:**
- Clone my CS1XA3 repository from github
- Activate the virtual environment by navigating into the djangoapp folder, using the command "source bin/activate"
- In the djangologin folder, run the app using the command "python3 manage.py runserver localhost:10013"
- the game will be available at https://mac1xa3.ca/e/daiy29

## Game Instructions
 Once you have accessed the website, on the top of the page you will notice this navigation bar:
 
![The image has not loaded properly.](https://i.imgur.com/ixXhzd6.png "Nav Bar")
To return to the home page, click on home. To play the game, you will be prompted to register and login with a username and password. Note that although you can navigate using the task bar in the home screen, during registration, and during login, it will not be available when you are in game or when viewing the scoreboard. You can go back using the back button in your browser, or by simply going back to https://mac1xa3.ca/e/daiy29.

Once you are logged in, the "Log in the Play" tab will be called "Play Game". The timer will start as soon as you access the page. Type the given word or phrase displayed within the alotted time given. Any unused time will carry over the future rounds. There are big difficulty spikes every 10th round, but to compensate for it you will be given bonus time. To restart the game after a game over, type the current word. This will reset the difficulty, as well as your score and start the timer for your next run. By submitting your score your highest overall score as well as your username will be submitted.

You can view a database of the scores as a leaderboard to compare your results with those of others.

## Summary of Features
- Client Side: 
    - Keyboard Events 
    - Random number generation
    - In-line CSS + Bootstrap
- Server Side:
    - User authentication
    - Database of scores
    - Post requests

## Built With
- [Django](https://www.djangoproject.com/) - Python Web Framework
- HTML, Javascript, CSS/Bootstrap - Client side functionality

## Versioning
Version 1.0.0

## Authors
- [Mike Dai](https://github.com/daiy29)
## License
This project is licensed under the MIT License - see the LICENSE.md file for details
## Contribution, References, and Sources
- [Curtis D'Alves Django References](https://github.com/NotAProfDalves/elm_django_examples)
- [Contact Form Template](https://www.w3schools.com/howto/howto_css_contact_form.asp)
- [Registration/Login Django App](https://medium.com/@himanshuxd/how-to-create-registration-login-webapp-with-django-2-0-fd33dc7a6c67)
- [Nicholas Robertson for figuring out how to order scores](github.com/robern3)

