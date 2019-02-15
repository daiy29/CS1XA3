#!/bin/bash
cd ..
echo "This is Mike Dai's CS1XA3 Project01. Please choose the task that you would like to execute: 1) ""Delete Temporary Files"
read task
if [ $task == "1" ] ; then
 	echo "Deleting Temporary Files"
	tempfiles=$(git ls-files . --exclude-standard --others)
	find $tempfiles -type f -name '*.tmp' | xargs rm 2>/dev/null
else
	echo "That was not a choice! Aborting!"
fi
 
