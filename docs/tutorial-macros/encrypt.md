---
sidebar_position: 2
---

# K4_ENCRYPT
```md
<string> K4_ENCRYPT(<string>)
```

Protect a string from constants dumping. 

## Purpose

This macro allow you to increase security on specific strings that contains sensitive information.

## ✅ Correct Usage

```lua
-- #script.lua
local hello = K4_ENCRYPT('Hello');

print(hello, K4_ENCRYPT('World!')); -- print "Hello World!"
```

## ❌ Wrong Usage

```lua
-- #script.lua
local hello = 'test';
hello = K4_ENCRYPT(hello); -- obfuscation error

print(hello); -- print "Hello World!"
```