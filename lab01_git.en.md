# Lab 1: Development Env using Git, GitHub

In this lab you will be setting up your development environment using
[Git](https://git-scm.com/) for source code control and
to push / pull code to [GitHub](https://github.com/) to enable collaboration with others.


## Learning Objectives

* Experience with common [Git](https://git-scm.com/) commands
* Push and Pull to [GitHub](https://github.com/)
* Create a local repository and push updates to [GitHub](https://github.com/)
* Share your repository with others
* Deal with merge conflicts
* Share your repository with others

## Resources

### Introduction to Git / GitHub

* [Git Handbook](https://guides.github.com/introduction/git-handbook/)
* [Git CheatSheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet/)
* [Git Branching](https://learngitbranching.js.org/)
* [GitHub Tutorial](https://lab.github.com/githubtraining/introduction-to-github)
* [GitHub Backpack](https://education.github.com/pack)<br>
* [The Basics of GitHub Course](https://github.com/professor-forward/csi3540_git_intro)


### Commit Messages

* [How to Write Good Commit Messages](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/)

### Branches

* [Creating and deleting branches within your GitHub repository](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/)
* [Create a new branch with git and manage branches](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)
* [Feature Branches](https://martinfowler.com/bliki/FeatureBranch.html)
* [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)
* [GitHub Flow - 10+ years later](https://nvie.com/posts/a-successful-git-branching-model/)

### Pull Request

* [About GitHub Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
* [Pull Request Tutorial](https://yangsu.github.io/pull-request-tutorial/)
* [Pull Request Demo (video)](https://lifehacker.com/this-video-explains-how-github-works-as-simply-as-possi-1790751782)


### Command Line Tools

* [GitHub CLI](https://cli.github.com)
* [HUB (Command line tool for GitHub)](https://hub.github.com)

### Additional Articles

* [My Git Workflow (Article)](https://blog.osteele.com/2008/05/my-git-workflow/)
* [git rebase -i HEAD~25 (Video)](https://www.youtube.com/watch?v=V53cpDt2dr0)
* [GitHub Actions (Article)](https://www.bytesized.xyz/github-actions-tutorial)
* [How to undo (almost) anything with Git (Article)](https://github.blog/2015-06-08-how-to-undo-almost-anything-with-git/)


## Tasks

### Part 1: Git Setup

This is to be done individually.

Ensure that [Git](https://git-scm.com/) is installed on your local machine.
Create a local git repository called `csi3x40_labs`.

In each repository create a `README.md`</a>.
Your README should include a brief paragraph about the purpose of the repository.
Look [here for an example README.md](https://gist.github.com/jxson/1784669)
Commit the file to your local repository.

Create a <a href="https://github.com/signup">new GitHub account</a> or <a href="https://github.com/login">log into an existing</a> account.
And create a remote <a href="https://guides.github.com/activities/hello-world/">`csi3x40_labs` repository in GitHub</a>.
Share the repository with the professors and one other student in the course (through the settings.)

Push your local repository to <a href="https://github.com/">GitHub</a>.

Share your `csi3x40_labs` repository with at least one other student,
and have them review your work.  You should equally review their work.

Repeat the process above to create the following additional repositories.

* `portfolio`
* `yatzy`

You should ONLY share these repositories with the professor.

### Part 2: Managing Conflicts

This can be done in groups of 2 (3 is OK if an ODD number of students).
And only needs to be done in **ONE** student's `csi3x40_labs`
repository.  In other words, please work as a team on one shared
code base.

#### 1. Set Up Your Project

One student (A) will create a directory `lab01`
(our working directory for this lab)
and commit a `index.html` file with the HELLO WORLD html example
directly to the `main` branch.

The other student (B) will pull updates from
[GitHub](https://github.com/)
and should see
the `lab01/index.html` file.

#### 2. Create Pull Request

Student A will create a branch `f-lab01` and push it
to
[GitHub](https://github.com/).

Student A will edit `index.html` to change
"Hello World" to "Bonjour Mode" (spelling mistake on purpose).
Commit that change with the message "Translate to French".

Student A will create a
[pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
and invite Student B to review.

#### 3. Code Review

Student B will review the code (and identify the spelling mistake)
as a comment within [GitHub](https://github.com/).

Student A will correct the change "Monde" not "Mode" and will
[git commit --amend](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---amend)
the original commit and will [git push --force-with-lease](https://git-scm.com/docs/git-push#Documentation/git-push.txt---force-with-leaseltrefnamegt)
to push the change.

Student B will re-review and see the correct spelling and approve the pull request.

Student A will merge the pull-request and will
[git switch](https://git-scm.com/docs/git-switch/2.23.0)
back to main on your local repo.

#### 4. Merge Conflicts

Student B (without pulling the latest code) on
will commit their own change to "Hello World" (again, student B should NOT pull
the "Bonjour Monde" changes) to a third language of their choice.

Student B should try to push that change to
[GitHub](https://github.com/)
and it should fail.

Student B should [git fetch](https://git-scm.com/docs/git-fetch)
all changes from
[GitHub](https://github.com/)
and [git rebase origin/main](https://git-scm.com/docs/git-rebase).

Student B should observe the merge conflict "Bonjour Monde" versus (for example) "Hola Mundo".
Student B should keep their latest change (i.e. "Hola Mundo") and push
that directly to the main branch to [GitHub](https://github.com/).

If a group of three, then have Student C conduct their own `Merge Conflicts`
resolution picking a 4th language.

