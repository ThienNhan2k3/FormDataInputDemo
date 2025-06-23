import { ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import type { Control } from "react-hook-form"
import type { FormData } from "@/lib/schema"
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"

interface CharterCapitalProps {
  control: Control<FormData>
}

export function CharterCapital({ control }: CharterCapitalProps) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="bg-gray-100 flex items-center space-x-2 text-sm font-medium w-full rounded-none border-none outline-none focus:outline-none py-4">
        <ChevronRight className="w-4 h-4" />
        <span>Vốn điều lệ</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 py-8 space-y-4">
        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="amount" className="w-40 shrink-0">Vốn điều lệ</Label>
          <FormField
            control={control}
            name="charterCapital.amount"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="amount" 
                    type="number"
                    placeholder="300000000" 
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <span className="text-gray-500">đồng</span>
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="amountInWords" className="w-40 shrink-0">Bằng chữ</Label>
          <FormField
            control={control}
            name="charterCapital.amountInWords"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="amountInWords" 
                    placeholder="Ba trăm triệu đồng" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="shareValue" className="w-40 shrink-0">Mệnh giá cổ phần</Label>
          <FormField
            control={control}
            name="charterCapital.shareValue"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="shareValue" 
                    type="number"
                    placeholder="10000" 
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <span className="text-gray-500">đồng</span>
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="totalShares" className="w-40 shrink-0">Tổng số cổ phần</Label>
          <FormField
            control={control}
            name="charterCapital.totalShares"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="totalShares" 
                    type="number"
                    placeholder="30000" 
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
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