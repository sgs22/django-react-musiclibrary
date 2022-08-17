
# Music Library

A music web app to share content freely, focusing on royalty-free music that can be distributed and shared as well as the ability for users to uplaod their own content. Future is to support lossless audio and Dolby Atmos® music files.


## Features

- Django Rest framework/React
- Music Library
- Interactive Music Player
- Cross platform


## Run Locally

Clone the project

```bash
  git clone https://github.com/sgs22/django-react-musiclibrary.git
```

Go to the project directory

```bash
  cd backend
```
Install backend dependencies

```bash
  pipenv install 
```

Activate shell

```bash
  pipenv shell 
```

Start local django server (http://127.0.0.1:8000/api/)

```bash
  python manage.py runserver 
```
Go to the frontend project directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server (http://localhost:3000/)

```bash
  npm run start
```

## TODO

- add link to song path from playlist over song id view.
- create basic media player to play song selected.

