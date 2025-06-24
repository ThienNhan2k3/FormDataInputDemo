import { ChevronDown, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import type { Control } from "react-hook-form"
import type { FormData } from "@/lib/schema"
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { useState } from "react"

interface AuthorityInformationProps {
  control: Control<FormData>
}

export function AuthorityInformation({ control }: AuthorityInformationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="bg-gray-100 flex items-center space-x-2 text-sm font-medium w-full rounded-none border-none outline-none focus:outline-none py-4">
        {isOpen ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
        <span>Thông tin dành cho cơ quan có thẩm quyền</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 py-8 space-y-4">
        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="authorityName" className="w-40 shrink-0">Tên cơ quan</Label>
          <FormField
            control={control}
            name="authorityInfo.authorityName"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="authorityName" 
                    placeholder="Tên cơ quan" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="authorityCode" className="w-40 shrink-0">Mã cơ quan</Label>
          <FormField
            control={control}
            name="authorityInfo.authorityCode"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="authorityCode" 
                    placeholder="Mã cơ quan" 
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
 