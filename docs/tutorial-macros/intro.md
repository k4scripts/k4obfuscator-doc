---
sidebar_position: 0
---

# Macros Introduction

Macros allow you to directly interact with the obfuscation process enhanching protection and obfuscation level.

### ⚠️ Macros Limitations

**Currently you can not assign macros to variables**, as this operation isn't supported by the obfuscator.
:::info
We are working on a solution to allow this feature, as a simple wrapper around some macros can solve this problem.
:::

### 📦 Universal Macros Support

To prevernt your unobfuscated script from erroring after using macros, you can define environment macros to simulate them.

```lua
-- #script.lua
local function K4_ENCRYPT(s)
  return s;
end;
local function K4_STACK()
  return debug and debug.getstack and debug.getstack() or {};
end
local function K4_CRASH() end;
local function K4_INLINE() end;
```
