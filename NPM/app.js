console.log("^ in semantic versioning means that will auto update through npm for all minor and patch updates. ~ means only do patch updates")

console.log("--save in command line saves to package.json as a dependency. Whereas --save-dev saves it as a developer dependency (doesn't need to be used to run app but good to have/needed for development). Adds to devDependecies area of package.json in same way as normal dependencies. still also pulled into node_modules. -g rather than -save saves it as a global package which can be accessed from any folder.")

console.log("all dependencies are stored for each module in a node_modules folder within that module.")

console.log("npm update command in command line goes and looks at all of the dependencies in the package.json file and updates all of them as far as it is allowed to update in terms of the ^ or ~.")

console.log("in order to use nodemon just type nodemon instead of node before app.js. And then whenever you edit the javascript file, it will automatically restart the server without you having to do it manually.")

console.log("if a package has a /cli folder in it then it is probably a utility meant to be used in the command line. Usually you have one use for the code meant to be run in an app and one that can be used in the cli")

console.log("just remember that when using other people's code, go look at number of installers and open issues. The more people using the code and fewer issues, the better it will likely be to work for you. Don't be afraid to open up the source code as it is just javascript code!! Test out packages before integrating them heavily into your SW as before you know it you could have lots of stuff dependent on it and then you will realise it is not what you want")