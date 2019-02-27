# Project01

Project01 is a script that implements practical functions that keep your repo nice and tidy and organized. 
## Code Style 
The project will primarily be composed of a single bash script
## Screenshots
This is the current style of interface used in the program.
![This is the current style of interface used in the program.](https://i.imgur.com/T8eKla8.png)

## Features
- [x] Deleting Temporary Files 
- [x] Interactive Interface
- [x] TODO Log
- [x] Create Github Directory
- [x] Star Wars
- [x] File Type Count
- [x] Create Backup Files

## How to Use + Code Examples

#### Interactive Interface

If 1 is entered, the task is completed.

![When the script is executed, it will prompt you for input corresponding to the task that should be completed.](https://imgur.com/Kee8tZl.png)
The available options are to delete temporary files, create TODO log, count file types, create github directory, play star wars, and backup a directory. To select one these options, enter "1" to "6" as the input to choose them respectively. Any other input currently echos that the input is not valid, and the script exits. I chose to simply exit the script if an input that isn't specified is given instead of looping requesting user input. 

![For example, if the Enter key is clicked, this will appear and the script finishes its execution](https://i.imgur.com/QdUjiWa.png)

#### Deleting Temporary Files

This finds and deletes all untracked, and only untracked files in the repository with the .tmp extension.
We use the 

> git ls-files . exclude-standard others 

function which will store all untracked files in the directory, which is CS1XA3, into 'tempfiles'. Tempfiles with the tmp extension are piped into an xargs which removes them.



#### Create TODO Log

This finds every mention of #TODO and moves it into a log

> grep -r -h "#TODO" --exclude="project_analyze.sh" --exclude="todo.log") > todo.log

We exclude the script itself as well as the TODO log, to avoid errors. 

#### Count File Types

This program calculates the number of each specified file. We have HTML, Javascript, CSS, Python, Haskell, and Bash. We keep track of the files using 

> find . -type f name '*.filetype' | wc -l

Which counts the number of lines of file type. It returns the number for every file

#### Create GitHub Directory

I chose to implement this feature because it's always a hassle for me trying to figure out why my updates aren't being changed on github. This helps automatically create a directory and add, commit, and push it to github. We use the standard commands add, commit, and push and creates a README with the message TODO

#### Play Star Wars

Why not :^)

#### Backup Files

There have been many times where I've accidentally made mistakes while editing branches and had to restart different assignments from scratch because there were no backups. This part of the script creates a zip file, and uploads it to github. The code we use to do this is

> tar create --create --gzip --file 

#### Code Snippet
![Programmed as a bash script](https://i.gyazo.com/2ae4cad22758b45264450b084ee82175.png)



