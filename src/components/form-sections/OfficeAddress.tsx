import { ChevronDown, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import type { Control } from "react-hook-form"
import type { FormData } from "@/lib/schema"
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { useState } from "react"

interface OfficeAddressProps {
  control: Control<FormData>
}

export function OfficeAddress({ control }: OfficeAddressProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Collapsible defaultOpen onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="bg-gray-100 flex items-center space-x-2 text-sm font-medium w-full rounded-none border-none outline-none focus:outline-none py-4">
        {isOpen ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
        <span>Địa chỉ trụ sở</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-4 space-y-4 px-4 pb-8 pt-4">
        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="address" className="w-40">Địa chỉ</Label>
          <FormField
            control={control}
            name="officeAddress.address"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="address"
                    placeholder="Số nhà, đường, phố"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* <div className="flex justify-start items-center gap-4">
          <Label htmlFor="province" className="w-40">Tỉnh/Thành phố</Label>
          <FormField
            control={control}
            name="officeAddress.province"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Chọn tỉnh/thành phố"/>
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="hanoi">Hà Nội</SelectItem>
                      <SelectItem value="hochiminh">TP. Hồ Chí Minh</SelectItem>
                      <SelectItem value="danang">Đà Nẵng</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="district" className="w-40">Quận/Huyện</Label>
          <FormField
            control={control}
            name="officeAddress.district"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full" id="district">
                      <SelectValue placeholder="Chọn quận/huyện"/>
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="district1">Quận 1</SelectItem>
                      <SelectItem value="district2">Quận 2</SelectItem>
                      <SelectItem value="district3">Quận 3</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="ward" className="w-40">Phường/Xã</Label>
          <FormField
            control={control}
            name="officeAddress.ward"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full" id="ward">
                      <SelectValue placeholder="Chọn phường/xã"/>
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="ward1">Phường 1</SelectItem>
                      <SelectItem value="ward2">Phường 2</SelectItem>
                      <SelectItem value="ward3">Phường 3</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div> */}

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="phoneNumber" className="w-40">Số điện thoại</Label>
          <FormField
            control={control}
            name="officeAddress.phoneNumber"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="phoneNumber"
                    placeholder="Số điện thoại"
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
          <Label htmlFor="email" className="w-40">Email</Label>
          <FormField
            control={control}
            name="officeAddress.email"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="email"
                    placeholder="Email"
                    className="w-full"
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