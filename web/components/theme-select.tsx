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
        "flex w-full cursor-pointer items-center space-x-3 rounded py-1.5 px-2 font-medium",
        selected && "text-indigo-11 dark:text-indigoDark-11",
        active &&
          "bg-indigo-3 text-indigo-11 dark:bg-indigoDark-3 dark:text-indigoDark-11",
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
      <Listbox.Button
        className={({ open }) =>
          clsx(
            "rounded p-2 text-xl hover:bg-indigo-3 hover:text-indigo-11 focus:outline-none focus-visible:ring focus-visible:ring-indigo-7 active:bg-indigo-4 dark:hover:bg-indigoDark-3 dark:hover:text-indigoDark-11 dark:focus-visible:ring-indigoDark-7 dark:active:bg-indigoDark-4",
            open &&
              "bg-slate-4 text-slate-11 dark:bg-slateDark-4 dark:text-slateDark-11",
          )
        }
      >
        {resolvedTheme === "light" ? <Sun /> : <Moon />}
      </Listbox.Button>
      <Listbox.Options className="absolute right-0 z-10 mt-2 rounded border border-slate-6 bg-slate-1 p-2 text-sm shadow-lg focus:outline-none focus-visible:ring focus-visible:ring-indigo-7 dark:border-slateDark-6 dark:bg-slateDark-2 dark:focus-visible:ring-indigoDark-7">
        <ThemeSelectItem value="system">
          <Monitor weight="bold" />
          <span>System</span>
        </ThemeSelectItem>
        <ThemeSelectItem value="light">
          <Sun weight="bold" />
          <span>Light</span>
        </ThemeSelectItem>
        <ThemeSelectItem value="dark">
          <Moon weight="bold" />
          <span>Dark</span>
        </ThemeSelectItem>
      </Listbox.Options>
    </Listbox>
  )
}

export default ThemeSelect
