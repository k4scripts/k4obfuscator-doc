---
sidebar_position: 7
---

# K4_MAX_CFLOW_START
```md
<void> K4_MAX_CFLOW_START(<void>)
...
<void> K4_MAX_CFLOW_END(<void>)
```

Maximize the vm control flow for the specified instructions range with additional protections.

## ✅ Correct Usage

```lua
-- #script.lua

local unlock = function(pass)
  K4_MAX_CFLOW_START()
  -- ...
  local function check() end; -- even sub functions will be protected
  -- ...
  return pass == '123';
  K4_MAX_CFLOW_END()
end;

print(unlock('123'));
```

## ❌ Wrong Usage

```lua
-- #script.lua
local a = K4_MAX_CFLOW_START; -- trying to assign nil to variable
a()

local foo = function()
  K4_MAX_CFLOW_START() -- ignored as no closing macro is called
  print('Hello');
end;
```