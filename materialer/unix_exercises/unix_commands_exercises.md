<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script>


# Unix Commands Exercises
Before doing these exercises be sure to read the tutorial [CommandLineCrashCourse.pdf](../../materialer/CommandLineCrashCourse.pdf)

## Necessary files to complete this exercise.

* [ex1.acc](ex1.acc)    
* [ex1.dat](ex1.dat)    
* [orphans.sp](orphans.sp)    

You can play around with these files as much as you like. If you change or destroy them, just download them again.

Note: All the following actions should be done through the terminal. It is not all commands that have been covered in class or the reading material, so you will have to search for how to solve some of the problems. You are welcome to work together but you all have to do the exercises individually.   

## Exercises
1. Start by creating a directory (folder) where all the exercise files will be placed. You decide where, but a good place would be on your desktop, or in your document directory.
1. Create a file with the name to_be_deleted.txt
1. delete the file to_be_deleted.txt
1. Move the 3 exercise files into this directory.
1. Use a text editor (VS Code is good choise) to create a file called mycommands.txt where you write all commands and observations you do in the following exercises. Use copy/paste to copy the commands. from the terminal to your text file.
1. First list the files in the directory.
1. Copy ex1.acc to myfile.acc.
1. Look at the content of both files to ensure they are identical.
1. Copy ex1.dat to myfile.acc.
1. Check that the content of myfile.acc changed.
1. Delete myfile.acc.
1. Make a directory test and move the three files to it.
1. Make a directory data and move the three files to that instead.
1. Remove test directory.
1. Change directory to data and confirm that you succeded. 
1. Go back to the home directory or work directory afterwards.
1. Make three new directories "newtest" - one inside the other, like a russian doll.
1. Move the data directory to the innermost "newtest" directory.
1. Confirm that the three files are moved along with the data directory.
1. Copy the three files to your home (your top directory).
1. Remove all newtest directories and data in the with a single command.
1. Count the lines in ex1.acc and ex1.dat.
1. Concatenate ex1.acc and ex1.dat in the file ex1.tot, i.e. copy the content of two files into one new file. Verify that all gene IDs comes first followed by numerical data.
1. Merge/Paste ex1.acc and ex1.dat together in ex1.tot, thus destroying the old file. Verify that corresponding gene IDs and numerical data are put on the same line. as the data.
1. Extract (cut) SwissProt ID and 3rd numerical data (column 1 and 5) from ex1.tot. Put results into a file ex1.res.
1. Find the 3 SwisProt ID's in ex1.res which have the largest number(s) in column 2, i.e. the top 3 entries.


_(c) 2016 by Peter Wad Sackett, pws@cbs.dtu.dk (ed. clbo@kea.dk 2019)_
