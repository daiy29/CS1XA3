 #!/bin/bash
cd ..
echo "This is Mike Dai's CS1XA3 Project01. Please choose the task that you would like to execute:"
echo "1) ""Delete Temporary Files" 
echo "2) ""Create Todo Log"
echo "3) ""Count File Types"
echo "4) ""Create GitHub Directory"
echo "5) ""Have some fun!"
echo "6) ""Backup Directory as Zip File & Upload to GitHub"
read task
if [ $task == "1" ] ; then
 	echo "Deleting Temporary Files"
	tempfiles=$(git ls-files . --exclude-standard --others)
	find $tempfiles -type f -name '*.tmp' | xargs rm 2>/dev/null

elif [ $task == "2" ] ; then
	echo "Moving TODOS to file todo.log"
	(grep -r -h  "#TODO" --exclude="project_analyze.sh" --exclude="todo.log") > todo.log

elif [ $task == "3" ] ; then
        html=`find . -type f -name '*.html' | wc -l`
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
elif [ $task = "4" ] ; then
        echo "What is the name of your directory?"
	read directory
	echo "What is your commit message?"
	read message
	mkdir $directory
	touch $directory/README.md
	echo "#TODO" >> $directory/README.md
	git add $directory
	git commit -m "$message"
	git push -f origin master
	echo "The directory has been created, added, commited, and pushed."
elif [ $task = "5" ] ; then
	echo "Playing Star Wars in 3!!!"
	sleep 1s
	echo "2!!!"
	sleep 1s
	echo "1!!!"
	sleep 1s
	telnet towel.blinkenlights.nl
elif [ $task = "6" ] ; then
	echo "What will the name of your cloned directory be?"
	read destn
	source=~/CS1XA3/Project01
        destination=~/CS1XA3/$destn
        filename=ug-$(date +%-Y%-m%-d)-$(date +%-T).tgz
        tar --create --gzip --file=$destination$filename $source
	echo "It has been cloned"
	git add -A
	git commit -m "Backup up files"
	git push -f origin master
	echo "The zip files has been uploaded to GitHub"
# elif [ $task = "6" ] ; then
#	echo "Generating Error Log"
#	find . -name "*.hs" -exec ghc -fno-code {} \; &> compile_fail.log
#	find . -name "*.py" -exec python -m py_compile {} \; &> compile_fail.log

# Couldn't figure out how to compile python file :/  
else
	echo "That was not a choice! Aborting!"
fi
 

