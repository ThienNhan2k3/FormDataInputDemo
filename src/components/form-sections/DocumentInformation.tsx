import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Checkbox } from "@/components/ui/checkbox"
import type { Control } from "react-hook-form"
import type { FormData } from "@/lib/schema"
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { useState } from "react"

interface DocumentInformationProps {
  control: Control<FormData>
}

export function DocumentInformation({ control }: DocumentInformationProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Collapsible defaultOpen onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="bg-gray-100 flex items-center space-x-2 text-sm font-medium w-full rounded-none border-none outline-none focus:outline-none py-4">
        {isOpen ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
        <span>Thông tin chứng thực</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-4 space-y-4">
        <div className="flex justify-start items-start gap-4 px-4">
          <Label htmlFor="documentNumber" className="w-40 shrink-0">Mã số thuế</Label>
          <div className="space-y-4">
            <FormField
              control={control}
              name="documentInfo.documentNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      id="documentNumber" 
                      placeholder="Mã số thuế" 
                      className="w-52"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Checkbox id="confirm" className="border-teal-800 border-2 text-teal-800 focus:ring-teal-800 grow-0 p-0 outline-none focus:outline-none"/>
              <Label htmlFor="confirm" className="text-sm">
                Đơn vị đã xác nhận tính hợp lệ của chứng thư gốc và chịu trách nhiệm về tính chính xác của nội
                dung
              </Label>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 px-4">
          <div className="flex justify-start items-center gap-4 w-[55%]">
            <Label htmlFor="documentDate" className="w-40 shrink-0">Ngày cấp mã số thuế</Label>
            <FormField
              control={control}
              name="documentInfo.documentDate"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      id="documentDate" 
                      type="date" 
                      className="w-fit justify-between"
                      {...field}
                      value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                      onChange={(e) => field.onChange(new Date(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-start items-center gap-4 w-[45%]">
            <Label htmlFor="documentPlace" className="w-fit shrink-0">Quốc gia cấp</Label>
            <FormField
              control={control}
              name="documentInfo.documentPlace"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn quốc gia" className="w-36"/>
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="vietnam">Việt Nam</SelectItem>
                        <SelectItem value="usa">Hoa Kỳ</SelectItem>
                        <SelectItem value="china">Trung Quốc</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div className="flex justify-end py-5 px-10 border-t border-gray-200">
          <Button className="bg-teal-800 text-white">Xuất file</Button>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
} 