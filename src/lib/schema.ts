import { z } from "zod"

export const formSchema = z.object({
  documentType: z.string(),
  documentInfo: z.object({
    documentNumber: z.string(),
    documentDate: z.date({
      required_error: "Ngày chứng thực là bắt buộc",
    }),
    documentPlace: z.string(),
  }),
  generalInfo: z.object({
    companyNameVi: z.string(),
    companyNameEn: z.string(),
    legalType: z.string(),
    isBranch: z.enum(["yes", "no"], {
      required_error: "Vui lòng chọn loại đơn vị",
    }),
  }),
  charterCapital: z.object({
    amount: z.number(),
    amountInWords: z.string(),
    shareValue: z.number(),
    totalShares: z.number(),
  }),
  officeAddress: z.object({
    address: z.string(),
    province: z.string(),
    district: z.string(),
    ward: z.string(),
    phoneNumber: z.string(),
    email: z.string().email("Email không hợp lệ"),
  }),
  legalRepresentative: z.object({
    fullName: z.string(),
    gender: z.enum(["male", "female"], {
      required_error: "Vui lòng chọn giới tính",
    }),
    position: z.string(),
    birthDate: z.date({
      required_error: "Ngày sinh là bắt buộc",
    }),
    ethnicity: z.string(),
    nationality: z.string(),
    idType: z.string(),
    idNumber: z.string(),
    idIssueDate: z.date({
      required_error: "Ngày cấp là bắt buộc",
    }),
    idIssuePlace: z.string(),
    permanentAddress: z.string(),
    contactAddress: z.string(),
    phone: z.string(),
    email: z.string().email("Email không hợp lệ"),
  }),
  notificationRecipient: z.object({
    fullName: z.string(),
    phone: z.string(),
    email: z.string().email("Email không hợp lệ"),
  }),
  authorityInfo: z.object({
    authorityName: z.string(),
    authorityCode: z.string(),
  }),
  contractorInfo: z.object({
    contractorName: z.string(),
    contractorCode: z.string(),
  }),
  otherInfo: z.object({
    notes: z.string().optional(),
    attachments: z.array(z.string()).optional(),
  }),
})

export type FormData = z.infer<typeof formSchema> 