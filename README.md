# React + TypeScript

This template provides a minimal setup to get React working with some tsconfig rules.

Currently, we are using Daisy UI Library which uses Tailwind behind the scene:

- [@DasyUI](https://daisyui.com/)

## Expanding the tsconfig configuration for absolute imports

If you are developing a production application, update the configuration according to your project need:

```js
export default {
  // tsconfig.json
  "paths": {
      "@/*": ["PATH/*"],
      "@FOLDER_NAME_HERE/*": ["PATH_HERE/*"],
    },
}
```

- Run, `npm i`
- Run, `npm run start`
