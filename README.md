# CSUN Career Center | Successful Interviewing

Successful Interviewing seeks to inform/teach students on how to carry themselves
during their upcoming interview experiences. This website gives students tips/advice
on how to prepare, behave, and act before and after an interview.

## Development

Successful Interviewing harnesses the power of the following technologies.
1. Webpack 2.0
2. Riot JS
3. SASS
4. Parallax JS (Homepage only)
5. Node JS & NPM (packages)

There is no backend for this project. 

## A little about the project's structure?

The project's structure is simple.
SRC holds all the pages and sass files being used.
PUBLIC holds all the images and animations used by the site.
Every page(scenes & subscenes) are held in separate files.
The pages have their corresponding SCSS files in the SASS folder.
You also have global SCSS files that are used by all the pages.
These control the font sizes and other global attributes of the site.

## How do you update the Project?

Copy the repo to your local machine.
You can do this by downloading the ZIP file or cloning the repo.

Terminal Approach
```javascript
git clone https://github.com/haquem1/interview.git
```
After cloning the repo, you have to install all the dependencies
Make sure to have Node.js & NPM installed within your local machine.
Go into the folder of the project.
```javascript
cd interview
npm install
```
This will install all the project's dependencies.
Once everything has installed then you have to run the DEV npm script.
```javascript
npm run dev
```
This will run the development server.
The terminal will give you the browser address of the project.
Something like this...
```javascript
project running at http://localhost:8080/
```

Note:
---
The index.js file has a hot reloading setup.
You can use that to either hot reload the whole project or just some components.
I recommend hot reloading only the component that you are currently working on.

## How do you build the project?

The use of Webpack allows you to build the project. 
```javascript
npm run build --production
```

This will build your project.
You will see the final package on the build folder within the root of the project.

## So I built the project, what now?

Congrats!
Now you need to host it.
Ask your supervisor for access to the server.
Go to the project folder and drag and drop the contents of the build folder into it.
Make sure to copy the public folder into the server as well.

## Summary
1. put contents of build folder into project's folder (within server)
2. put public folder in the project's folder
3. make sure to put the index.hmtl file in there too.

That's it, hopefully :)
If not, google is your best friend!
