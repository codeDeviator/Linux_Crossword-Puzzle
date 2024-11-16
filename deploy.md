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
     bash

      cd  /home/ayush/Desktop/ibtc/your-app-name

   * Grant execute permissions to the script:  
     bash

     chmod \+x deploy.sh  
       
   * Run the script to install necessary tools and start the server:  
     bash

     ./deploy.sh  
   * After deployment, you can access the game at [http://localhost:3000](http://localhost:3000/)/

   

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
