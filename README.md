# frontend_boilerplate
A simple ES6/Sass/Gulp boilerplate to prototype on the front end

## How to use
Open up your terminal, create a new project directory (mkdir new_app && cd new_app), and then

    git clone https://github.com/brianjcarroll/frontend_boilerplate.git && npm install
    
After everything has been installed, simply run

    gulp
    
This will compile your SCSS (sass) and then concatenate, auto-prefix, and minify your CSS

For JS files, this will babelify (so you can use ES6), concatenate, and minify.

Finally, this watches all changes made to SCSS and JS files in the src folder.
