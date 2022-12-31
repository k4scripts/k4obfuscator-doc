---
sidebar_position: 0
---

# Settings Introduction

Settings allow you to setup your obfuscation enviroment and control how your script will be obfuscated.

## 📦 Bytecode Compression

Smaller bytecode size means smaller output size.

### Compression Types
* **UTF-8**   (Smaller bytecode size)
* **NORMAL**

## 🐛 Preserve Line Info

Preserve line info will preserve corrisponding lines to all instructions in order to debug your script.

:::warning
Keeping this setting on production scripts is not recommended.
:::

![PLIExample](img/PreserveLineInfo.png)

## 🔒 Encrypt Strings

*Encrypt Strings* will encrypt all your constant strings automatically, without the need to specify which one encrypt with the [K4_ENCRYPT](/docs/tutorial-macros/encrypt.md) macro.

## 📜 Loadstring Enabled

*Loadstring Enabled* will allow the vm to take advantage of [loadstring](https://www.lua.org/manual/5.1/manual.html#pdf-loadstring) function enhanching protections.

> WIP: This feature will also compress output size.