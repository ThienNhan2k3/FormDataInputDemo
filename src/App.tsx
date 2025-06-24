import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import StatusCard from "@/components/status-bar"
import { DocumentInformation } from "@/components/form-sections/DocumentInformation"
import { GeneralInformation } from "@/components/form-sections/GeneralInformation"
import { OfficeAddress } from "@/components/form-sections/OfficeAddress"
import { LegalRepresentative } from "@/components/form-sections/LegalRepresentative"
import { NotificationRecipient } from "@/components/form-sections/NotificationRecipient"
import { AuthorityInformation } from "@/components/form-sections/AuthorityInformation"
import { ContractorInformation } from "@/components/form-sections/ContractorInformation"
import { OtherInformation } from "@/components/form-sections/OtherInformation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "@/lib/schema"
import type { FormData } from "@/lib/schema"
import { Form } from "@/components/ui/form"

export default function App() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      documentType: "",
      documentInfo: {
        documentNumber: "",
        documentDate: new Date(),
        documentPlace: "",
      },
      generalInfo: {
        companyNameVi: "",
        companyNameEn: "",
        legalType: "",
        isBranch: "no",
      },
      charterCapital: {
        amount: 0,
        amountInWords: "",
        shareValue: 0,
        totalShares: 0,
      },
      officeAddress: {
        address: "",
        province: "",
        district: "",
        ward: "",
        phoneNumber: "",
        email: "",
      },
      legalRepresentative: {
        fullName: "",
        gender: undefined,
        position: "",
        birthDate: undefined,
        ethnicity: "",
        nationality: "",
        idType: "",
        idNumber: "",
        idIssueDate: undefined,
        idIssuePlace: "",
        permanentAddress: "",
        contactAddress: "",
        phone: "",
        email: "",
      },
      notificationRecipient: {
        fullName: "",
        phone: "",
        email: "",
      },
      authorityInfo: {
        authorityName: "",
        authorityCode: "",
      },
      contractorInfo: {
        contractorName: "",
        contractorCode: "",
      },
      otherInfo: {
        notes: "",
        attachments: [],
      },
    },
  })

  function onSubmit(data: FormData) {
    console.log(data)
    // Handle form submission here
  }

  console.log("form.getValues():::", form.getValues())

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="min-h-screen bg-slate-50 w-4/5 flex flex-col justify-between">
        <Header />
        <div className="flex justify-center relative">
          <main className="flex-1 p-4 bg-transparent max-w-3xl">
            <StatusCard />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <Card className="bg-white mb-16">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">Cập nhật thông tin</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex justify-start items-center gap-4 px-4 pb-4">
                      <Label htmlFor="document-type" className="w-40 p-3">Loại chứng thực</Label>
                      <Input 
                        id="document-type" 
                        placeholder="Mã số thuế" 
                        className="w-52"
                        {...form.register("documentType")}
                      />
                    </div>

                    <DocumentInformation control={form.control} />
                    <GeneralInformation control={form.control} />
                    <OfficeAddress control={form.control} />
                    <LegalRepresentative control={form.control} />
                    <NotificationRecipient control={form.control} />
                    <AuthorityInformation control={form.control} />
                    <ContractorInformation control={form.control} />
                    <OtherInformation control={form.control} />
                  </CardContent>
                </Card>

                <div className="flex justify-between items-center bg-white px-8 py-3 absolute bottom-0 left-0 right-0">
                  <Button type="button" variant="outline">Quay lại</Button>
                  <Button type="submit" className="bg-teal-800 text-white">Lưu lại</Button>
                </div>
              </form>
            </Form>
          </main>
        </div>
      </div>
    </div>
  )
}
