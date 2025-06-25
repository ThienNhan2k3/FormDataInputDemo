import { ChevronDown, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { Control } from "react-hook-form"
import type { FormData } from "@/lib/schema"
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { useState } from "react"

interface GeneralInformationProps {
  control: Control<FormData>
}

export function GeneralInformation({ control }: GeneralInformationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="bg-gray-100 flex items-center space-x-2 text-sm font-medium w-full rounded-none border-none outline-none focus:outline-none py-4">
        {isOpen ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
        <span>Thông tin chung</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 py-8 space-y-4">
        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="company-name-vi" className="w-40 shrink-0">Tại đơn vị (Đầy đủ)</Label>
          <FormField
            control={control}
            name="generalInfo.companyNameVi"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="company-name-vi" 
                    placeholder="Công Ty Cổ Phần Gạo Á" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="company-name-en" className="w-40 shrink-0">Tại đơn vị (Tiếng Anh)</Label>
          <FormField
            control={control}
            name="generalInfo.companyNameEn"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="company-name-en" 
                    placeholder="Asia Rice Corporation" 
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="legal-type" className="w-40 shrink-0">Loại hình pháp lý</Label>
          <FormField
            control={control}
            name="generalInfo.legalType"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <SelectTrigger className="w-full" id="legal-type">
                      <SelectValue placeholder="Chọn loại hình pháp lý"/>
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="Công ty Cổ phần">Công ty cổ phần</SelectItem>
                      <SelectItem value="Công ty TNHH">Công ty TNHH</SelectItem>
                      <SelectItem value="Công ty hợp danh">Công ty hợp danh</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="is-branch" className="w-40 shrink-0">
            Đơn vị có phải chi nhánh/ văn phòng đại diện/ địa điểm kinh doanh không?
          </Label>
          <FormField
            control={control}
            name="generalInfo.isBranch"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex items-center gap-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="has-branch" className="border-teal-800 text-teal-800 focus:ring-teal-800 grow-0 p-0" />
                      <Label htmlFor="has-branch" className={field.value === "yes" ? "text-teal-800 font-medium" : ""}>Có</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no-branch" className="border-teal-800 text-teal-800 focus:ring-teal-800 grow-0 p-0" />
                      <Label htmlFor="no-branch" className={field.value === "no" ? "text-teal-800 font-medium" : ""}>Không</Label>
                    </div>
                  </RadioGroup>
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