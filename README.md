## IFMS

#### Technical Course in Computer Science - 6th Period - Morning Class

#### Teacher: Ygo Brito - Student: João Flores

#### Anotations, Codes and Programs for Software Engineering 2 discipline

---

### Basics commands in Terminal

List the content of a diretory (file)

```
dir
```

Create a new diretory

```
mkdir <file-name>
```

Remove an existing diretory

```
rmdir <file-name>
```

Acess a file

```
cd <file-name>
```

Cleans terminal

```
cls
```

Exit the file, returning one level

```
cd ..
```

Exit the file, returning to C: file

```
cd /
```

---

### Commands to create a Github repository using Terminal

Initiate the versioning

```
git init
```

Verify the project situation 

```
git status 
```

Add all untracked files

```
git add . 
```

Add README markdown file

```
git add README.md
```

Execute a commit (update) with message

```
git commit -m "message"
```

Link the project to the main branch

```
git branch -M main
```

Execute a remote link to a GitHub repository

```
git remote add origin <repository-url>
```

Push all files to the main branch in repository

```
git push -u origin main
```

---

### Commands to update files in a Github repository

Add all files to upload to Github resository

```
git add .
```

Create a message to describe changes

```
git commit -m "message-to-add"
```

Push all files to Github repository

```
git push -u
```

Verifying if everything is in order

```
git status
```

---

### Commands to initiate a project using NodeJS

Initiate a project by providing data manually

```
npm init
```

Initiate a project using default data

```
npm init -y
```

### Commands to install Node dependences

Jest

```
npm install --save-dev jest
```

