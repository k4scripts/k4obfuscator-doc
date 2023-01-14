---
sidebar_position: 8
---

# K4_NO_VIRTUALIZE
```md
<void> K4_NO_VIRTUALIZE(<function>)
```

Keep passed function minified to increase execution speed.

:::warning
This macro is not recommended to be used on sensitive functions as code will be minified and visible.
:::

## ✅ Correct Usage

```lua
-- #script.lua
local func = K4_NO_VIRTUALIZE(function(a)
	print(a)
end)

func('hello'); -- print hello
```

## ❌ Wrong Usage

```lua
-- #script.lua
local func = function(a)
	print(a)
end

func = K4_NO_VIRTUALIZE(func) -- ignored as no function defition is passed
func('hello')
```