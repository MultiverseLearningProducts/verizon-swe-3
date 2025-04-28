# There are two main workflows to create a git repo: git first and github first.

###
# GIT FIRST: Workflow to create a git repo and then add a github repo and connect them
###

# Step 1: CREATE A GIT REPO
cd ~/code
mkdir git-demo
cd git-demo
git init -b main

# Step 2: MAKE YOUR FIRST COMMIT
# create some files!
git add .
git commit -m "initial commit"

# Step 2. CREATE A GITHUB REPO
# on Github, click New Repo
# don't add any files to it yet
# copy the repo's URL (from the green Code button)
git remote add origin <paste url>
git push --set-upstream origin main

###
# GITHUB FIRST: Workflow to create (or fork) a github repo and then clone it to a git repo so you can work on it
###

# Step 1: CREATE A GITHUB REPO
# EIther FORK AN EXISTING REPO 
#    on github, go to the existing repo, click Fork and create your own repo
# Or CREATE AN EMPTY REPO
#    on github, Create Repo
# copy your URL

# Step 2: CLONE REPO
cd <name of folder above repo>
git clone <paste url>

###
# OTHER USEFUL COMMANDS
###
git status
git log
git log --oneline

###
# PULL CHANGES
###
git pull origin main

###
# DEAL WITH A MERGE CONFLICT 
### 

# Option 1: fix it!
# View conflicting code in editor
# Resolve conflicts and save
# Then, add & commit first, and then pull...
git add .
git commit -m "resolve merge conflict"
git push

# Option 2: abort and fix later!
git merge --abort