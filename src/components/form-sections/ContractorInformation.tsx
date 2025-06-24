import { ChevronDown, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import type { Control } from "react-hook-form"
import type { FormData } from "@/lib/schema"
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { useState } from "react"

interface ContractorInformationProps {
  control: Control<FormData>
}

export function ContractorInformation({ control }: ContractorInformationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="bg-gray-100 flex items-center space-x-2 text-sm font-medium w-full rounded-none border-none outline-none focus:outline-none py-4">
        {isOpen ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
        <span>Thông tin dành cho nhà thầu, nhà đầu tư</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 py-8 space-y-4">
        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="contractorName" className="w-40 shrink-0">Tên nhà thầu</Label>
          <FormField
            control={control}
            name="contractorInfo.contractorName"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="contractorName" 
                    placeholder="Tên nhà thầu" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="contractorCode" className="w-40 shrink-0">Mã nhà thầu</Label>
          <FormField
            control={control}
            name="contractorInfo.contractorCode"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="contractorCode" 
                    placeholder="Mã nhà thầu" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
} 