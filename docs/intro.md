---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **K4Obfuscator in less than 5 minutes**.

## Getting Started

Get started by **requesting an obfuscation key to K4Obfuscator bot**.

### What you'll need

- [Lua Script](https://www.lua.org/manual/5.1/):
  - You must follow Lua 5.1 syntax, as VM generation is developed around it.

## Obfuscate your first script

Let's prepare a script to obfuscate..
```lua
-- #script.lua
local n = {'a', 'b', 'c'};
local function f()
  local r = '';
  for i=1, #n do
    r = r .. n[math.random(1, #n)];
  end
  return r;
end
print(f());
```

Start obfuscating by running `/obfuscate <key>`.

The bot will prompt you a display with buttons that will help you setup your obfuscation environment: