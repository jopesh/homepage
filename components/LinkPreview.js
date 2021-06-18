import * as HoverCard from "@radix-ui/react-hover-card"
import Image from "next/image"

import { Transition } from "@headlessui/react"
import { useState, useCallback } from "react"

export default function LinkPreview({
  children,
  href,
  screenshot,
  className,
  side = "top",
}) {
  const [open, setOpen] = useState([false, false])
  const handleOpen = useCallback((t) => {
    if (t) setOpen([true, true])
    else {
      setOpen([true, false])
      setTimeout(() => setOpen([false, false]), 300)
    }
  }, [])
  return (
    <HoverCard.Root open={open[0]} onOpenChange={handleOpen}>
      <HoverCard.Trigger
        href={href}
        className={
          "text-indigo-600 hover:underline dark:text-indigo-300 " + className
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </HoverCard.Trigger>
      <HoverCard.Content side={side} sideOffset={5}>
        <Transition
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          href={href}
          show={open[1]}
          appear={true}
          enter="transition ease-nature duration-300"
          enterFrom="translate-y-8 opacity-0 scale-50"
          enterTo="translate-y-0 opacity-100 scale-y-100"
          leave="transition ease-nature duration-300"
          leaveFrom="translate-y-0 opacity-100 scale-100"
          leaveTo="translate-y-5 opacity-0 scale-50"
          className="flex items-center justify-center p-1.5 overflow-hidden leading-none transform bg-gray-50 shadow-lg dark:bg-gray-800 rounded-xl relative"
        >
          <div className="absolute inset-1.5 rounded-lg bg-gray-200 animate-pulse" />
          <Image
            src={screenshot.url}
            width="200"
            height="125"
            layout="fixed"
            alt="Screenshot of the link"
            className="overflow-hidden rounded-lg"
          />
        </Transition>
      </HoverCard.Content>
    </HoverCard.Root>
  )
}
