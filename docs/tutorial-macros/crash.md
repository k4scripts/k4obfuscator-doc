---
sidebar_position: 2
---

# K4_CRASH
```md
<void> K4_CRASH(<void>)
```

Abruptly crashes the VM state. 

## Purpose

This macro allow you to stop vm execution resulting to an infinite loop and corrupted memory, usefull for client protection.

## ✅ Correct Usage

```lua
-- #script.lua
local whitelisted = false; -- ...

local function crash()
  -- ... your code
  K4_CRASH(); -- crash vm
end

if not whitelisted then
  crash();
end;

print('Sup gamer!!') -- won't execute
```

## ❌ Wrong Usage

```lua
-- #script.lua
local whitelisted = false; -- ...
local crash = K4_CRASH; -- macros don't support assignments

local function test()
  K4_CRASH();
  print('Crashing'); -- won't execute
end

test();
print('Closing') -- won't execute
```