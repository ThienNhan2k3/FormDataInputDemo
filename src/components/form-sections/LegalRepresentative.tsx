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

interface LegalRepresentativeProps {
  control: Control<FormData>
}

export function LegalRepresentative({ control }: LegalRepresentativeProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="bg-gray-100 flex items-center space-x-2 text-sm font-medium w-full rounded-none border-none outline-none focus:outline-none py-4">
        {isOpen ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
        <span>Người đại diện theo pháp luật của công ty</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 py-8 space-y-4">
        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="fullName" className="w-40 shrink-0">Họ và tên</Label>
          <FormField
            control={control}
            name="legalRepresentative.fullName"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="fullName" 
                    placeholder="Nhập họ và tên" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="gender" className="w-40 shrink-0">Giới tính</Label>
          <FormField
            control={control}
            name="legalRepresentative.gender"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex items-center gap-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" className="border-teal-800 text-teal-800 focus:ring-teal-800 grow-0 p-0"/>
                      <Label htmlFor="male">Nam</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" className="border-teal-800 text-teal-800 focus:ring-teal-800 grow-0 p-0"/>
                      <Label htmlFor="female">Nữ</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="position" className="w-40 shrink-0">Chức danh</Label>
          <FormField
            control={control}
            name="legalRepresentative.position"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="position" 
                    placeholder="Giám đốc" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="birthDate" className="w-40 shrink-0">Sinh ngày</Label>
          <FormField
            control={control}
            name="legalRepresentative.birthDate"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="birthDate" 
                    type="date" 
                    className="w-fit"
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

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="ethnicity" className="w-40 shrink-0">Dân tộc</Label>
          <FormField
            control={control}
            name="legalRepresentative.ethnicity"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="ethnicity" 
                    placeholder="Kinh" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="nationality" className="w-40 shrink-0">Quốc tịch</Label>
          <FormField
            control={control}
            name="legalRepresentative.nationality"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="nationality" 
                    placeholder="Việt Nam" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="idType" className="w-40 shrink-0">Loại giấy tờ pháp lý</Label>
          <FormField
            control={control}
            name="legalRepresentative.idType"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <SelectTrigger id="idType">
                      <SelectValue placeholder="Chọn loại giấy tờ"/>
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="CCCD">Thẻ căn cước công dân</SelectItem>
                      <SelectItem value="CMND">Chứng minh nhân dân</SelectItem>
                      <SelectItem value="PASSPORT">Hộ chiếu</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="idNumber" className="w-40 shrink-0">Số giấy tờ pháp lý</Label>
          <FormField
            control={control}
            name="legalRepresentative.idNumber"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="idNumber" 
                    placeholder="Nhập số giấy tờ pháp lý" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="idIssueDate" className="w-40 shrink-0">Ngày cấp</Label>
          <FormField
            control={control}
            name="legalRepresentative.idIssueDate"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="idIssueDate" 
                    type="date" 
                    {...field}
                    className="w-fit"
                    value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                    onChange={(e) => field.onChange(new Date(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="idIssuePlace" className="w-40 shrink-0">Nơi cấp</Label>
          <FormField
            control={control}
            name="legalRepresentative.idIssuePlace"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="idIssuePlace" 
                    placeholder="Nhập nơi cấp" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="permanentAddress" className="w-40 shrink-0">Địa chỉ thường trú</Label>
          <FormField
            control={control}
            name="legalRepresentative.permanentAddress"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="permanentAddress" 
                    placeholder="Nhập địa chỉ thường trú" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-start items-center gap-4">
          <Label htmlFor="contactAddress" className="w-40 shrink-0">Địa chỉ liên lạc</Label>
          <FormField
            control={control}
            name="legalRepresentative.contactAddress"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="contactAddress" 
                    placeholder="Nhập địa chỉ liên lạc" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* <div className="flex justify-start items-center gap-4">
          <Label htmlFor="phone" className="w-40 shrink-0">Số điện thoại</Label>
          <FormField
            control={control}
            name="legalRepresentative.phone"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="phone" 
                    placeholder="Nhập số điện thoại" 
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
            name="legalRepresentative.email"
            render={({ field }) => (
              <FormItem style={{ flexGrow: 1 }}>
                <FormControl>
                  <Input 
                    id="email" 
                    placeholder="Nhập email" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div> */}
      </CollapsibleContent>
    </Collapsible>
  )
} 