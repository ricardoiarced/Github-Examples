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

## Remotes

## Stashing

## Merging

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