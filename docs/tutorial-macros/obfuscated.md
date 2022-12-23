---
sidebar_position: 5
---

# K4_OBFUSCATED
```md
<bool> K4_OBFUSCATED(<void>)
```
Return `true` if the script is obfuscated, otherwise return `false`.

## Purpose

An example would be debugging your scripts by controlling execution flow based on obfuscation status.

## ✅ Correct Usage

```lua
-- #script.lua
local is_debug = not K4_OBFUSCATED();

if is_debug then
  print('Script is not obfuscated')
end;
```

## ❌ Wrong Usage

```lua
-- #script.lua
local is_obfuscated = K4_OBFUSCATED;  -- trying to assign nil to variable
local is_debug = not is_obfuscated(); -- calling nil value

if is_debug then
  print('Script is not obfuscated')
end;
```