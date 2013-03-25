#Simple Editor


## WHAT IS THIS?
Well esentially a playground for me to try to build an editor.

#Is this production ready?
Nope, not one bit. Actually this is just one HUGE hack right now. That being said
I hate having things be private repos so I felt like open-sourcing it without it
being finished.

Inspiration:
 Cloud 9, Bracket, Sublime Text 2, TextMate

I essentially took the parts I liked from all editors and try to smash them together.

#Why another editor?
Well obviously I was bored. Also I feel editors have really let us down. They make us worry
about stuff we shouldn't bother with, be it spacing, code styling, valid syntax, etc. Writing
code should be simple. I want an editor that helps with that process.

Oh also I do not like closed source editors, I need to be able to edit my tools. Even if I
choose not to :-p

#MVP
 - Edit existing JS, HTML, CSS files. (Open, Save, Save As, Close without saving)
 - Create new JS, HTML, CSS Files.
 - View files in a directory and sub folders.
 - Open Files in one Simple Editor.
 - Build in editorconfig support.
 - Esprima based code fixing.

#Nice to Have
- Different edit layout,  2 cols (ver/hor)
- Support for PHP, Python (Other people can add the other editors)
- Menu items.
- Plugable editors (Ace, CodeMirror, Orion?, etc...)


#Getting a build
 So this project is build on top of node-webkit which is essentially a wrapper around
 chromiumembedded with some magic.

 Sadly the build process is pretty manual right now. I'm working on making a grunt build task
 but I have not gotten that far.


Screenshots:

![screen](https://dl.dropbox.com/u/16395906/simple-edit.png)


##Logo:
Currently I'm using [Nate Beaty](http://natebeaty.com/) Sublime Text 2 alternative icon. Mainly because I like it
also the S works. This is with his permission of course.
