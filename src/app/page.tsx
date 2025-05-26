import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>GIT test</h1>
      <h2>ALWAYS create a new branch from MAIN and ALWAYS pull to be sure you have all the code EVERY SINGLE TIME you're pushing or merging</h2>

      <div>
        <h2>To create a new branch:</h2>
        <ul>
          <li>git branch to check if you're in main (if not, switch with git checkout main)</li>
          <li>git checkout name-of-your-branch to create the branch</li>
        </ul> 
      </div>

      <div>
        <h2>How to merge:</h2>
        <ul>
          <li>Once you're done in your branch, type "git add ." and then git commit -m "my changes". The first time you try to push a command will show up on your terminal
              that you'll need to use to create the branch on the remote repository.
          </li>
          <li>When you pushed your changes in your branch you can create a pull request on github. Remember! The pull request is to go to MAIN.</li>
          <li>When your code has been reviewed and approved you switch to the dev branch and type "git merge name-of-your-branch" in the terminal and fix any conflicts
              if needed
          </li>
          <li>Once finished the testing you can merge your pull request on github or on VSC</li>
        </ul> 
      </div>
      <div>
        <h2>The commands:</h2>
        <p>git add . - add all files</p>
        <p>git commit -m "message" - commits the files with a message</p>
        <p>git status - check the status of changes</p>
        <p>git branch - list of all branches</p>
        <p>git branch new-branch-name - create a new branch</p>
        <p>git checkout branch-name - switch to an existing branch</p>
        <p>git merge branch-name - merge another branch into the current one you're in</p>
      </div>
    </>
  );
}
