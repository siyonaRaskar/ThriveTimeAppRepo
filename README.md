# SIYONA'S UPDATE
hello testing change from school!
The name of the application: Thrive Time

A list of the team members: Siyona Raskar (Individual Project)

A description of the project goals and features:

Project Goals:
- Add, edit, and delete tasks. Tag and prioritize tasks. Mark tasks as completed. Let users set a due date for each task.

Project Features:
- Priority Levels (high, medium, low with color indications)
- Tags / Categories (School, Work, Personal)
- Motivational Quote of the day
- User picks the deadlines and will be able to edit
- Background Lofi Music

A description of the overall architecture of the application:

- 4 pages: Create Task Page, View ALL Tasks Page, View TODAY'S Tasks Page, Completed Tasks Page
- Pop up when app is opened with motivational quote
- The main data structure in my app will be an array called tasks, where each element is an object representing a single task. Each task object includes properties like name, deadline, and “completed” to store important information. This structure allows me to easily filter and map through the array to display the correct tasks on each screen based on their completion status or deadline.



# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
