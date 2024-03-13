
# Incode Group Test Task

A simple React Native application for discoverinfg Star Wars Characters.

## Demo
![demo](https://github.com/malyshkoserhii/incode_test_task/assets/62348952/90f808cd-949b-4eb3-8711-3204213dbbc5)

[Demo video](https://drive.google.com/file/d/1MEtCsD7wLGiFrnLMMb0NAmAO2mLSbS6Z/view?usp=drive_link)

## Tech Stack

**Client:** React Native, Typescript, Zustand

## Run Locally

Clone the project

```bash
  git clone https://github.com/malyshkoserhii/incode_test_task.git
```

Go to the project directory

```bash
  cd incode_test_task
```

Install dependencies

```bash
  yarn add
```

Run the Application from main brach

```bash
  git checkout main
```

Install pods (if you want to run it on iOS)

```bash
  cd ios && pod install && cd ..
```

Start iOS

```bash
  yarn ios
```

Start Android

```bash
  yarn android
```

## Features

- Paginated and optimazed list with all Star Wars characters, which are provided by https://swapi.py4e.com API;
- A separate screen with a particular character, which contains main information about charcter: name, date of birth, gender, appearance, homeworld, films, species, starship, vehicles);
- Marking charactrs as favorite and toggling this status;
- Counting male, female and other genders according to favorite status;
- Favorite status and gender counting information is saved into async storage, so the this data renders even after reloading the application;
- Reseting favorite character status and count gender counter information are available only after pressing "Yes" on a special popup.
- Cross platform (iOS and Android).

## About codebase

- Application was devided into modules (in this case only one module - home);
- All comunication with API is based on a specific services (characters service, starship service etc.);
- Business logic implemented in special hooks. Every hook is responsible only for one thing (single responsibility principle);
- There are lots of shared components was implemented, in order to reuse them across the Application and make it more flexible;
- There are a lot of constants (COLORS, FONTS, STORAGE KEYS) that is storing in one place and reusing across the Application;
- Using utils in order to incapsulate some important logic;
- Using state selectors in one appropriate hook.
