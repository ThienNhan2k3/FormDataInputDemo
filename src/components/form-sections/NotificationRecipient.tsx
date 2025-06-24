import { ChevronDown, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import type { Control } from "react-hook-form"
import type { FormData } from "@/lib/schema"
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { useState } from "react"

interface NotificationRecipientProps {
  control: Control<FormData>
}

export function NotificationRecipient({ control }: NotificationRecipientProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="bg-gray-100 flex items-center space-x-2 text-sm font-medium w-full rounded-none border-none outline-none focus:outline-none py-4">
        {isOpen ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
        <span>Thông tin Người nhận thông báo</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 py-8 space-y-4">
        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="fullName" className="w-40 shrink-0">Họ và tên</Label>
          <FormField
            control={control}
            name="notificationRecipient.fullName"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="fullName" 
                    placeholder="Họ và tên" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="phone" className="w-40 shrink-0">Số điện thoại</Label>
          <FormField
            control={control}
            name="notificationRecipient.phone"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="phone" 
                    placeholder="Số điện thoại" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="email" className="w-40 shrink-0">Email</Label>
          <FormField
            control={control}
            name="notificationRecipient.email"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="email" 
                    placeholder="Email" 
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