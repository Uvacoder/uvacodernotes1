---

title: Git

---



## Frequently Used

### Cancel local commit

```shell
$ git reset HEAD~1
```

### Checkout and create a new branch based on the current branch

```shell
$ git checkout -b [branch-name]

# or

$ git switch -c [branch-name]
```

### Git Stash

Useful when you need to work on other branch and don't want to commit your current work yet, and don't want to lose it either. You can stash your work aside and recover it later.



```shell
$ git stash
$ git stash -u # to include untracked files
$ git stash -m "<YOUR_MESSAGE_HERE>" # to add a custom message to your stash

# You can combine the last two commands like this:
$ git stash -u -m "<YOUR_MESSAGE_HERE>" 
```



#### Other useful `git stash` commands

```shell
# To list all your stashes
$ git stash list

# To see an specific stash
$ git stash show <stash_number>

# To apply a stash to your branch
$ git stash apply stash@{0} # this applies the latest stash

# To create a new branch and apply your stash to this new branch
$ git stash
$ git stash branch <new-branch-name> stash@{0}
```


