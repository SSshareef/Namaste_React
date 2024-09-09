# Namaste React 🚀

# what ever you can regenerate do not put it on git 😊Eg:node_modules.

npx create react app has npm in it by default

how to add npm to our project?
process:-

=> npm init  {we are not using npm -y as it skips some of the things but we dont want to skip anything}
=> it asks for the package name {I kept as namaste-react} but we an customise.
=> it asks you the the version I kept it the basic one # version 1.0.0
=> it asks for the descreption i kept as This is namaste react by Shaik Shareef
=> it asks for the entry poing I kept it as same App.js (normally it will be index.js but for now I just kept App.js)
=> it asks for the command I kept only jest for now.
=> it asks you the git repository i updated https://github.com/SSshareef/React-in-Depth.git
=> after that it asks for keyword give some random key-words.
=> give your name as the auhor or any customised name
=> license keep it as ISC by default
=> at the end click on enter for is it OK? 
=> package.json is created.


# package.json is the configuration for npm

package.json is a crucial file in Node.js and JavaScript projects because it:

# 1. Declares dependencies:
     Specifies the packages your project relies on, ensuring consistent installation across environments.

# 2. Defines project metadata:
     Includes project name, version, description, author, and license information.

# 3. Scripts:
     Allows you to define custom scripts for tasks like building, testing, and starting your application.

# 4. Version management:
     Manages version numbers for your project and dependencies.

# 5. Standardization:
     Adheres to npm (Node Package Manager) standards, making it easy to share and collaborate on projects.


Without package.json, you'd need to manually manage dependencies, scripts, and metadata, leading to inconsistencies and potential errors.

Here's a basic example of a package.json file:


{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My project description",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "author": "Your Name",
  "license": "MIT"
}


This file declares the project name, version, dependencies (like Express), scripts (like starting the app), and author information.

# Illustration of difference between packages and dependencies:

- Your project (package) is like a recipe book.
- Dependencies are like the ingredients needed to make the recipes in the book.

In package.json:

- The recipe book's metadata (name, version, author, etc.) is described in the package section.
- The ingredients (external packages) needed to make the recipes are listed in the dependencies section.


# Difference between package.json and package-lock.json ?
package.json and package-lock.json are two separate files that serve distinct purposes in a Node.js project:

package.json:

1. Declares dependencies: Lists the packages your project depends on.
2. Defines project metadata: Includes project name, version, description, author, and license information.
3. Specifies scripts: Defines custom scripts for tasks like building, testing, and starting your application.
4. Human-editable: Meant to be edited manually by developers.

package-lock.json:

1. Records exact dependency versions: Lists the exact versions of dependencies installed in your project.
2. Ensures consistency: Ensures that the same versions of dependencies are installed across different environments.
3. Generated automatically: Created and updated automatically by npm when you install or update dependencies.
4. Not meant to be edited manually: Avoid modifying this file directly, as it can lead to inconsistencies.

Key differences:

- Purpose: package.json declares dependencies and project metadata, while package-lock.json records exact dependency versions.
- Content: package.json lists dependencies and scripts, while package-lock.json lists exact versions and dependencies.
- Editing: package.json is meant to be edited manually, while package-lock.json should not be edited directly.

When you run npm install, npm uses package.json to determine which dependencies to install and then updates package-lock.json with the exact versions installed.


# what are transitive dependencies?
Transitive dependencies are indirect dependencies of a project, which are not explicitly declared in the project's package.json file. Instead, they are dependencies of the project's direct dependencies.

Here's an example:

Project A depends on Package B (direct dependency)
Package B depends on Package C (transitive dependency)

In this case:

- Package B is a direct dependency of Project A
- Package C is a transitive dependency of Project A, because it's a dependency of Package B

Transitive dependencies are installed automatically when you run npm install, along with the direct dependencies. They are listed in the node_modules directory, but not in the package.json file.

Transitive dependencies can be:

- Dependencies of dependencies (like Package C in the example)
- Sub-dependencies of dependencies
- Peer dependencies of dependencies

It's important to be aware of transitive dependencies because they can:

- Introduce security vulnerabilities
- Cause version conflicts
- Increase the project's overall size

To manage transitive dependencies, you can use tools like npm ls to list all dependencies, including transitive ones, or npm dedupe to remove duplicate dependencies.



###############################################################################################################


take a search bar (debouncing)
take a search bar (throttling)


#############################################################################################################

# npm and npx

npm (Node Package Manager) and npx (Node Package Executor) are two command-line tools that come with Node.js. Here's the difference:

npm:-

1. Package manager: Installs, updates, and manages dependencies for your project.
2. Global installations: Installs packages globally on your system (e.g., npm install -g).
3. Local installations: Installs packages locally in your project directory (e.g., npm install).
4. Package management: Manages dependencies, versions, and scripts in your project's package.json file.

npx:

1. Package executor: Executes packages without installing them globally or locally.
2. Temporary installations: Downloads and executes packages temporarily, without leaving any trace.
3. One-off commands: Runs one-off commands or scripts without installing packages.
4. Latest versions: Always uses the latest version of a package, without worrying about versions.

Key differences:

- Purpose: npm manages packages, while npx executes packages.
- Installation: npm installs packages, while npx doesn't install packages.
- Scope: npm has global and local scope, while npx has temporary scope.
- Versioning: npm manages versions, while npx always uses the latest version.

Use npm for:

- Managing dependencies in your project.
- Installing packages globally or locally.

Use npx for:

- Running one-off commands or scripts.
- Executing packages without installation.
- Trying out packages without committing to installation.

In summary, npm manages packages, while npx executes packages temporarily without installation.
