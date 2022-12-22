---
sidebar_position: 1
---

# K4_STACK
```md
<table> K4_STACK(<void>)
```

Return the current calling proto stack.

## Purpose

This macro allow you to verify stack integrity or perform low level operations with the VM.

## ✅ Correct Usage

```lua
-- #script.lua
local var = 10;
local stack = K4_STACK(); -- script.lua chunk' stack

local function closure()
  -- get current closure stack
  local stack2 = K4_STACK();
  -- let's find and modify var in the stack
  for i, v in next, stack do
    if v == 10 then
      stack[i] = 100;
    end
  end
  -- since stack2 rapresent the stack of the "closure" function this NEQ operation resolve to true
  return stack2 ~= stack
end

if closure() then
  print('Working!', var)
end
```

## ❌ Wrong Usage

```lua
-- #script.lua
local var = 10;
local get_stack = K4_STACK; -- macros don't support assignments
local stack = get_stack();

stack[1] = 20; -- due to VM protections, stack won't follow "expected" positions
if var == 20 then
  print('Oof') -- won't execute
end
```