# **Linux Crossword Puzzle Deployment and Usage Guide**

An interactive, static crossword puzzle game designed to help users learn Linux commands. Built with **React.js**, **TypeScript**, and **CSS**.

## 

## **How to Deploy the Application**

You can deploy this application on a local server using a bash script.

1. **Download the Deployment Script**  
   * Locate the deploy.sh script in your repository. Click on deploy.sh, and then use the "Download" icon to download the file.

![Alt Text](https://github.com/codeDeviator/Linux_Crossword-Puzzle/blob/main/deploy.png)

**deploy.sh script**

2. **Run the Deployment Script**  
   * Open your terminal and navigate to the folder where the script was downloaded:  

      Go to the download directory

   * Grant execute permissions to the script:
     
     chmod \+x deploy.sh  
       
   * Run the script to install necessary tools and start the server:
     
     ./deploy.sh  
   * After deployment, you can access the game at [http://localhost:3000](http://localhost:3000/)/

   

---

# **Linux Crossword Puzzle App \- Docker Setup**

This repository contains the Docker setup for the **Linux Crossword Puzzle** app built with React.js. The Dockerfile in this repository is configured for building and serving the app in a containerized environment using multi-stage builds.

## **Table of Contents**

* Prerequisites  
* Project Structure  
* Dockerfile Explanation  
* Building and Running the Docker Image  
* Accessing the Application  
* Notes

---

## **Prerequisites**

* **Docker**: Ensure Docker is installed on your machine. Download Docker here.

## **Project Structure**

The project structure should look like this:

`Linux_Crossword-Puzzle/`  
`├── Dockerfile`  
`├── package.json`  
`├── package-lock.json`  
`└── src/`  
    `├── level1/`  
    `├── level2/`  
    `└── level3/`

* **Dockerfile**: The file used to create the Docker image.  
* **package.json**: Lists dependencies and project metadata.  
* **src/**: Contains the source code for the application.

## **Dockerfile Explanation**

This Dockerfile is designed to use multi-stage builds to optimize the final image size and performance. Here’s a step-by-step breakdown:

1. **Base Image**: Uses `node:20` for the initial build stage.  
2. **Working Directory**: Sets the working directory to `/app`.  
3. **Copy Dependencies**: Copies `package.json` and `package-lock.json` files for dependency installation.  
4. **Install Dependencies**: Runs `npm install` to install project dependencies.  
5. **Copy Source Code**: Copies the rest of the application source code.  
6. **Build Application**: Runs `npm run build` to build the production version of the app.  
7. **Serve Stage**: Uses `nginx:alpine` for a lightweight final image, serving the static files.  
8. **Port Exposure**: Exposes port 80 to access the app.  
9. **Startup Command**: Runs `nginx` to serve the static build files.

## **Building and Running the Docker Image**

1. Clone the Repository:

   git clone https://github.com/codeDeviator/Linux\_Crossword-Puzzle.git  
     
2. cd Linux\_Crossword-Puzzle  
     
3. Build the Docker Image:

   docker build \-t linux-crossword-app .  
     
4. Run the Docker Container:

   docker run \-p 3000:80 linux-crossword-app  
     
5. This command maps port 80 of the container to port 3000 on your local machine.

## **Accessing the Application**

Once the container is running, you can access the app by navigating to http://localhost:3000 in your web browser.

## **Notes**

* **Multi-Stage Build**: This Dockerfile uses a multi-stage build to optimize the final image size. The `node` stage builds the app, and the `nginx` stage serves it.  
* **Environment Variables**: Update environment variables in `package.json` if needed.  
* **Custom Configuration**: Modify the `Dockerfile` as needed for other servers or development environments.

---


## **How to Use the Linux Crossword Puzzle Application**

### **Homepage**

* Open your browser and go to [http://localhost:3000/](http://localhost:3000/)  
* The homepage displays an introduction to the game, including instructions and some buttons with a footer.

### **Starting the Crossword Puzzle**

1. **Select a Level**:  
   * Choose a difficulty level (e.g., Level 1, Level 2, Level 3\) based on your experience with Linux commands.  
   * The puzzle board will load with clues related to Linux commands.  
2. **Navigating the Puzzle**  
   * Click on a clue to highlight the corresponding row or column in the puzzle grid.  
   * Type your answer in the highlighted cells.  
3. **Answer Validation**  
   * Correct Answer: If your answer is correct, the clue color will turn green.  
   * Incorrect Answer: Incorrect answers will cause the clue and cells to turn red.  
4. **Learning Mode**  
   * A “Learn Commands” button is available on the homepage to access a resource page linked to your GitHub repository. 

