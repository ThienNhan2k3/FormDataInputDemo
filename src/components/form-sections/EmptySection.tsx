import { ChevronRight } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface EmptySectionProps {
  title: string
}

export function EmptySection({ title }: EmptySectionProps) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="bg-gray-100 flex items-center space-x-2 text-sm font-medium w-full rounded-none border-none outline-none focus:outline-none py-4">
        <ChevronRight className="w-4 h-4" />
        <span>{title}</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-4 space-y-4">
        <div className="flex items-center justify-center px-4">
          <h2 className="text-lg font-medium">Empty</h2>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
} 