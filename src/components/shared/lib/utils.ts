import { ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const customTwMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [{ text: ['bs', 'bm', 'bl', 'bxl', 'hxs', 'hs', 'hm', 'hl', 'hxl'] }]
  }
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
