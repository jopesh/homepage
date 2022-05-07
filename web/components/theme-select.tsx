import { Monitor, Moon, Sun } from "phosphor-react"
import { PropsWithChildren, useEffect, useState } from "react"

import { Listbox } from "@headlessui/react"
import clsx from "clsx"
import { useTheme } from "next-themes"

type ThemeSelectItemProps = {
  value: string
}

const ThemeSelectItem: React.FC<PropsWithChildren<ThemeSelectItemProps>> = ({
  children,
  value,
}) => (
  <Listbox.Option
    value={value}
    className={({ active, selected }) =>
      clsx(
        "flex w-full cursor-pointer items-center justify-between space-x-4 rounded py-1.5 px-2 font-medium",
        selected && "text-indigo-700 dark:text-indigo-300",
        active &&
          "bg-indigo-50 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300",
      )
    }
  >
    {children}
  </Listbox.Option>
)

const ThemeSelect = () => {
  // Theme state
  const { resolvedTheme, theme, setTheme } = useTheme()
  // State
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  // Return null if not mounted
  if (!mounted) return <div className="h-9 w-9" />
  // Return component if mounted
  return (
    <Listbox value={theme} onChange={setTheme} className="relative" as="div">
      <Listbox.Label className="sr-only">Select theme</Listbox.Label>
      <Listbox.Button className="rounded p-2 text-xl hover:bg-indigo-50 hover:text-indigo-800 focus:outline-none focus-visible:ring active:bg-indigo-100 dark:hover:bg-indigo-500/20 dark:hover:text-indigo-100 dark:active:bg-indigo-800">
        {resolvedTheme === "light" ? <Sun /> : <Moon />}
      </Listbox.Button>
      <Listbox.Options className="absolute right-0 z-10 mt-2 rounded border border-zinc-200 bg-white p-2 text-sm shadow-lg focus:outline-none focus-visible:ring dark:border-zinc-700 dark:bg-zinc-900">
        <ThemeSelectItem value="system">
          <span>System</span>
          <Monitor weight="bold" />
        </ThemeSelectItem>
        <ThemeSelectItem value="light">
          <span>Light</span>
          <Sun weight="bold" />
        </ThemeSelectItem>
        <ThemeSelectItem value="dark">
          <span>Dark</span>
          <Moon weight="bold" />
        </ThemeSelectItem>
      </Listbox.Options>
    </Listbox>
  )
}

export default ThemeSelect
