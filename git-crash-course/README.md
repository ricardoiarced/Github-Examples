## Git Hidden Folder

There is a hidden folder called `.git` which tells you that our project is a git repo.

If we wanted to create a git repo in a new project we' create the folder and then initialize that repo using `git init`

```sh
mkdir /workspaces/tmp/new-project
cd /workspaces/tmp/new-project
git init
touch Readme.md
code Readme.md
git status
git add Readme.md
# makes changes to Readme.md
git commit -a -m "add readme file"
```

## Cloning

We can clone in three ways: HTTPS, SSH, GitHub CLI

Since we are using GitHub Codespaces we'll  a create temporary directory in our workspace

```sh
mkdir /workspace/tmp
cd /workspace/tmp
```



### HTTPS

```sh
git clone https://github.com/rakiit/Github-Examples.git
cd Github-Examples
```

> You'll need to generate a Personal Access Token (PAT)
https://github.com/settings/token

You will use the PAT as your password when you login

- Give it access to Contents for commits

### SSH

```sh
git clone git@github.com:rakiit/Github-Examples.git
cd GitHub-Examples
```

We will need to create our own SSH rsa key pair

```sh
sshe-keygen -t  rsa
```

For WSL users and if you create a non default key you might need to add it

```sh
eval `ssh-agent`
ssh-add /home/andrew/.ssh/alt-github_id_rsa
```

We can test our connection here:

```sh
ssh -T git@github.com
```

### GitHub CLI

Install the CLI

eg. Linux (Ubuntu)

```sh
(type -p wget >/dev/null || (sudo apt update && sudo apt-get install wget -y)) \
&& sudo mkdir -p -m 755 /etc/apt/keyrings \
&& wget -qO- https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
&& sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& sudo apt update \
&& sudo apt install gh -y
```

```sh
gh auth login
gh repo clone rakiit/Github-Examples
```

## Commits

When we want to commit code we can write git commit which will open up the commit edit message in the editor of choice.

```sh
git commit 
```

Set the global editor
```sh
git config --global core.editor emacs
```

Make a commit and commit message without opening an editor
```sh
git commit -m "add another exclamation"
```

## Branches

List of branches

```sh
git branch
```

Create a new branch
```sh
git branch branch-name
```

Checkout the branch

```sh
git checkout branch-name
```

## Remotes

We can add remote but often you will just add remote via upstream when adding a branch

```sh
git remote add ...
git branch -u origin new-feature
```

## Stashing

```sh
git stash list
git stash
git stash save my-name
git stash apply
git stash pop
```

## Merging

```sh
git checkout dev
git merge main
```
## Add

When we want to stage changes that will be included in the commit.
We can use the . to add all possible files.

```
git add Readme.md
git add .
```

## Reset

Reset allows you to move Staged changes to be unstaged.
This is useful when you want to rever all files not to be not committed

```sh
git add .
git reset
```

> git reset will revert a git add.

## Status

Git status shows you what files will or will not be commited.

```sh
git status
```

## Gitconfig file

The gitconfig file is what stores yoyr global configurations for git such as email, name, editor and more.

Showing the contents of our .gitconfig file

```sh
git config --list
```

When you first install Git on a machine you are supposed to set  up your name and email

```sh
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Log

git log will show recent git commits to the git tree

## Push

When we want to push a repo to our remote origin

```
git push
```