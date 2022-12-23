# config-plugin-remove-jitpack

JitPack is added in the base template for Android builds on Expo, this removes it.

## Install

```
yarn add config-plugin-remove-jitpack
```

Open `app.json` (or `app.config.{js/ts}`) and add to plugins:

```
{
  "plugins": [
    "config-plugin-remove-jitpack"
  ]
}
```