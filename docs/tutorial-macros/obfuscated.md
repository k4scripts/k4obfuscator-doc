---
sidebar_position: 5
---

# K4_OBFUSCATED
```md
<bool> K4_OBFUSCATED
```
Set to `true` if the script is obfuscated, otherwise is `nil`.

:::note
This macro does not pollute the stack
::: 

## Purpose

An example would be debugging your scripts by controlling execution flow based on obfuscation status.

## ✅ Correct Usage

```lua
-- #script.lua
local is_debug = not K4_OBFUSCATED;

if is_debug then
  print('Script is not obfuscated')
end;

if K4_OBFUSCATED then
  print('Script is obfuscated')
end;
```

## ❌ Wrong Usage

```lua
-- #script.lua
local is_obfuscated = K4_OBFUSCATED();  -- trying to call nil value
local is_debug = not is_obfuscated(); -- calling nil value

if is_debug then
  print('Script is not obfuscated')
end;
```