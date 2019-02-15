# Project01

Project01 is a script that implements practical functions that keep your repo nice and tidy and organized. 
## Code Style 
The project will primarily be composed of a single bash script
## Screenshots
![This is the current style of interface used in the program. It will be polished in the future when more features are implemented](https://i.imgur.com/T8eKla8.png)

## Features
- [x] Deleting Temporary Files 
- [X] Interactive Interface
- [ ] TODO Log
- [ ] Compile Error Log
- [ ] Merge Log
- [ ] File Type Count
- [ ] Finding Last Working File
- [ ] Other
- 
## How to Use + Code Examples

#### Interactive Interface

![When the script is executed, it will prompt you for input corresponding to the task that should be completed.](https://imgur.com/Kee8tZl.png)
Currently, the only available option is to delete temporary files. To select this option, enter "1" as the input. Any other input currently echos that the input is not valid, and the script exits.

![For example, if the Enter key is clicked, this will appear and the script finishes its execution](https://i.imgur.com/QdUjiWa.png)

#### Deleting Temporary Files

This finds and deletes all untracked, and only untracked files in the repository with the .tmp extension.
We use the 

> git ls-files . exclude-standard others 

function which will store all untracked files in the directory, which is CS1XA3, into 'tempfiles'. Tempfiles with the tmp extension are piped into an xargs which removes them.

![If 1 is entered, the task is completed.](https://imgur.com/kdRLiha.png)
#### Code Snippet
![Programmed as a bash script](https://i.gyazo.com/2ae4cad22758b45264450b084ee82175.png)
