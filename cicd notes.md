$ git clone https://github.com/muddassir-2025/learn-cicd-typescript-starter

👉 For development, it’s better to move to Linux home: cd ~

we will we using ubuntu wsl to do things (run bootdev cli) :

install ubuntu - curl - go - bootdev cli - sudo-apt ... all that stupid stuff

------------------------------------------------------------------------------------------------

mukht@DESKTOP-N98AIOF:~$ ls
Downloads  go
mukht@DESKTOP-N98AIOF:~$ mkdir learning-cicd
mukht@DESKTOP-N98AIOF:~$ cd learning-cicd
mukht@DESKTOP-N98AIOF:~/learning-cicd$

-------------------------------------------------------

mukht@DESKTOP-N98AIOF:~/learning-cicd$ git clone https://github.com/muddassir-2025/learn-cicd-typescript-starter
Cloning into 'learn-cicd-typescript-starter'...
remote: Enumerating objects: 113, done.
remote: Total 113 (delta 0), reused 0 (delta 0), pack-reused 113 (from 1)
Receiving objects: 100% (113/113), 75.51 KiB | 1.80 MiB/s, done.
Resolving deltas: 100% (37/37), done.
mukht@DESKTOP-N98AIOF:~/learning-cicd$


🧠 What you did wrong (very common)

You are one folder too high.
Your repo is actually inside:

~/learning-cicd/learn-cicd-typescript-starter

NOT: ~/learning-cicd

install packages in your repo : mukht@DESKTOP-N98AIOF:~/learning-cicd/learn-cicd-typescript-starter$ npm install

-------------------------------------

create an .env file : vi .env -> write PORT=8000 -> esc : wq (to save and exit)

Run `npm audit` for details.
mukht@DESKTOP-N98AIOF:~/learning-cicd/learn-cicd-typescript-starter$ vi .env
mukht@DESKTOP-N98AIOF:~/learning-cicd/learn-cicd-typescript-starter$ ls
Dockerfile  README.md  drizzle.config.ts  node_modules  package-lock.json  package.json  src  tsconfig.json

to see hidden files :

mukht@DESKTOP-N98AIOF:~/learning-cicd/learn-cicd-typescript-starter$ ls -a
.   .env  .gitignore  README.md          node_modules       package.json  tsconfig.json
..  .git  Dockerfile  drizzle.config.ts  package-lock.json  src
mukht@DESKTOP-N98AIOF:~/learning-cicd/learn-cicd-typescript-starter$

to see in .env : cat .env


mukht@DESKTOP-N98AIOF:~/learning-cicd/learn-cicd-typescript-starter$ npm run dev

> learn-cicd-typescript-starter@1.0.0 dev
> npx tsc && node dist/main.js

DATABASE_URL environment variable is not set
Running without CRUD endpoints
Server is running on port: 8000

use 2 wsl terminal to run tests : 

go to your current folder and run : cd ~/learning-cicd/learn-cicd-typescript-starter

to open wsl : search Ubuntu

--------------------------------------------------------------

to see where the folder is saved in pc : in ubuntu wsl : explore.exe .

\\wsl.localhost\Ubuntu\home\mukht\learning-cicd\learn-cicd-typescript-starter

or see it in linux - NOT -- this pc

--> ubuntu -> home -> mukth -> ...

--> create your projects in home and packages in root 

--> to go home cd ~


to open folder in vs code :

command line.

Go to your Ubuntu terminal tab.

Make sure you are inside your project folder by running:

Bash

cd ~/learning-cicd/learn-cicd-typescript-starter
Type this exact command and hit Enter:

Bash

code .
(The dot . tells VS Code to open the current folder).

--------------------------------------------------------------------

mukht@DESKTOP-N98AIOF:~$ git config --global user.name "Mohammed Muddassir Ali"
git config --global user.email "your-email@example.com"

mukht@DESKTOP-N98AIOF:~/learning-cicd/learn-cicd-typescript-starter$ git switch addtests
Already on 'addtests'

mukht@DESKTOP-N98AIOF:~/learning-cicd/learn-cicd-typescript-starter$ git push --set-upstream origin addtests
Username for 'https://github.com': Mohammed Muddassir Ali
Password for 'https://Mohammed%20Muddassir%20Ali@github.com':
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
remote:
remote: Create a pull request for 'addtests' on GitHub by visiting:
remote:      https://github.com/muddassir-2025/learn-cicd-typescript-starter/pull/new/addtests
remote:
To https://github.com/muddassir-2025/learn-cicd-typescript-starter
 * [new branch]      addtests -> addtests
branch 'addtests' set up to track 'origin/addtests'.

---------------------------------------------------------------------------------

