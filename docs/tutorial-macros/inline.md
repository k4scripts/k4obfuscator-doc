---
sidebar_position: 1
---

# K4_INLINE
```md
<table> K4_INLINING_START(<bool>)
```

Inline the current function and remove it from functions list.

:::info
If the passed <bool> is `true`, all sub functions will be inlined.
:::

ℹ️ Suggested for non-recursive functions, as deep recursions could lead to errors.

## Purpose

This macro avoid attackers from easily patching specific instructions or reverse the script.

## Example
```lua
-- #script.lua
local id = 123;
local function check_id()
  K4_INLINING_START(false)
  if id == 123 then
    return true;
  end;
end
if check_id() then
  print('hello')
end;

-- #pseudo.lua
local id = 123;
local r = nil;
if id == 123 then
  r = true;
end;
if r then
  print('hello')
end
```
:::info
In this example, attackers can't simply patch `if id == 123 then` check (inside `check_id` the function), as they would have to patch it every time you use `check_id`.
:::

## ✅ Correct Usage

```lua
-- #script.lua
local f = function()
  K4_INLINING_START(); -- ignored as no parameters are passed
  print('Hello', 'World');
end;

f();
```

## ❌ Wrong Usage

```lua
-- #script.lua
K4_INLINING_START(true); -- ignored

local f = function()
  print('Hello');
  K4_INLINING_START(false); -- ignored as not called at function start
end;
```