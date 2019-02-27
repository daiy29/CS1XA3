 #!/bin/bash
cd ..
echo "This is Mike Dai's CS1XA3 Project01. Please choose the task that you would like to execute:"
echo "1) ""Delete Temporary Files" 
echo "2) ""Create Todo Log"
echo "3) ""Count File Types"
echo "4) ""Create GitHub Directory"
echo "5) ""Have some fun!"
echo "6) ""Backup Directory as Zip File & Upload to GitHub"

#Interface for users to select the task that would like to be executed
#A new line is given for every choice so it is asthetically pleasing


read task #Read user choice
if [ $task == "1" ] ; then #Choice 1 executes deleting temperary files
 	echo "Deleting Temporary Files"
	tempfiles=$(git ls-files . --exclude-standard --others) #All untracked files listed in current directory assigned to var  tempfiles
	find $tempfiles -type f -name '*.tmp' | xargs rm 2>/dev/null #Find these files with extension .tmp, remove them 2>/dev/null throws away error codes from no file found

elif [ $task == "2" ] ; then #Choice 2 executes moving TODO to file log
	echo "Moving TODOS to file todo.log"
	(grep -r -h  "#TODO" --exclude="project_analyze.sh" --exclude="todo.log") > todo.log #find #TODO in files, excludes this file as well as the todo.log itself

elif [ $task == "3" ] ; then #Choice 3 counts each file type and spits out number
        html=`find . -type f -name '*.html' | wc -l` #Find files, ending in extension corresponding to file type, assigns it to variable , count lines
        javascript=`find . -type f -name '*.js' | wc -l`
	css=`find . -type f -name '*.css' | wc -l`
	python=`find . -type f -name '*.py' | wc -l`
	haskell=`find . -type f -name '*.hs' | wc -l`
	bash=`find . -type f -name '*.sh' | wc -l`
	echo "The number of files are as follows"
	echo "HTML:" $html
	echo "Javascript:" $javascript
	echo "CSS:" $css
	echo "Python:" $python
	echo "Haskell:" $haskell
	echo "Bash:" $bash
elif [ $task = "4" ] ; then #Choice 4 automatically creates a github directory
        echo "What is the name of your directory?" #Read user input, and options
	read directory
	echo "What is your commit message?"
	read message
	mkdir $directory #Creates a directory with a readme, and echos TODO in the readme file.
	touch $directory/README.md
	echo "#TODO" >> $directory/README.md
	git add $directory
	git commit -m "$message"
	git push -f origin master  #Adds, commits, and pushes the new directory
	echo "The directory has been created, added, commited, and pushed."
elif [ $task = "5" ] ; then 
	echo "Playing Star Wars in 3!!!"
	sleep 1s
	echo "2!!!"
	sleep 1s
	echo "1!!!"
	sleep 1s
	telnet towel.blinkenlights.nl #Sorta a meme feature :P Just plays starwars
elif [ $task = "6" ] ; then # Task 6 backs up files and uploads them directory to your github.
	echo "What will the name of your cloned directory be?"
	read destn 
	source=~/CS1XA3/Project01
        destination=~/CS1XA3/$destn
        filename=ug-$(date +%-Y%-m%-d)-$(date +%-T).tgz #File name created with date of cloning
        tar --create --gzip --file=$destination$filename $source
	echo "It has been cloned"
	git add -A
	git commit -m "Backup up files"
	git push -f origin master
	echo "The zip files has been uploaded to GitHub" #Added, commited, pushed.
# elif [ $task = "6" ] ; then
#	echo "Generating Error Log"
#	find . -name "*.hs" -exec ghc -fno-code {} \; &> compile_fail.log
#	find . -name "*.py" -exec python -m py_compile {} \; &> compile_fail.log

# Couldn't figure out how to compile python file :/  
else
	echo "That was not a choice! Aborting!"
fi
 

