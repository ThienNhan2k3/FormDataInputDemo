import { z } from "zod"

export const formSchema = z.object({
  documentType: z.string().min(1, "Loại chứng thực là bắt buộc"),
  documentInfo: z.object({
    documentNumber: z.string().min(1, "Số chứng thực là bắt buộc"),
    documentDate: z.date({
      required_error: "Ngày chứng thực là bắt buộc",
    }),
    documentPlace: z.string().min(1, "Nơi chứng thực là bắt buộc"),
  }),
  generalInfo: z.object({
    companyNameVi: z.string().min(1, "Tên công ty tiếng Việt là bắt buộc"),
    companyNameEn: z.string().min(1, "Tên công ty tiếng Anh là bắt buộc"),
    legalType: z.string().min(1, "Loại hình pháp lý là bắt buộc"),
    isBranch: z.enum(["yes", "no"], {
      required_error: "Vui lòng chọn loại đơn vị",
    }),
  }),
  charterCapital: z.object({
    amount: z.number().min(0, "Vốn điều lệ không được âm"),
    amountInWords: z.string().min(1, "Vốn điều lệ bằng chữ là bắt buộc"),
    shareValue: z.number().min(0, "Mệnh giá cổ phần không được âm"),
    totalShares: z.number().min(0, "Tổng số cổ phần không được âm"),
  }),
  officeAddress: z.object({
    address: z.string().min(1, "Địa chỉ là bắt buộc"),
    province: z.string().min(1, "Tỉnh/Thành phố là bắt buộc"),
    district: z.string().min(1, "Quận/Huyện là bắt buộc"),
    ward: z.string().min(1, "Phường/Xã là bắt buộc"),
    phoneNumber: z.string().min(10, "Số điện thoại phải có ít nhất 10 ký tự"),
    email: z.string().email("Email không hợp lệ"),
  }),
  legalRepresentative: z.object({
    fullName: z.string().min(1, "Họ và tên là bắt buộc"),
    gender: z.enum(["male", "female"], {
      required_error: "Vui lòng chọn giới tính",
    }),
    position: z.string().min(1, "Chức vụ là bắt buộc"),
    birthDate: z.date({
      required_error: "Ngày sinh là bắt buộc",
    }),
    ethnicity: z.string().min(1, "Dân tộc là bắt buộc"),
    nationality: z.string().min(1, "Quốc tịch là bắt buộc"),
    idType: z.string().min(1, "Loại giấy tờ pháp lý là bắt buộc"),
    idNumber: z.string().min(9, "Số giấy tờ pháp lý phải có ít nhất 9 ký tự"),
    idIssueDate: z.date({
      required_error: "Ngày cấp là bắt buộc",
    }),
    idIssuePlace: z.string().min(1, "Nơi cấp là bắt buộc"),
    permanentAddress: z.string().min(1, "Địa chỉ thường trú là bắt buộc"),
    contactAddress: z.string().min(1, "Địa chỉ liên lạc là bắt buộc"),
    phone: z.string().min(10, "Số điện thoại phải có ít nhất 10 ký tự"),
    email: z.string().email("Email không hợp lệ"),
  }),
  notificationRecipient: z.object({
    fullName: z.string().min(1, "Họ và tên là bắt buộc"),
    phone: z.string().min(10, "Số điện thoại phải có ít nhất 10 ký tự"),
    email: z.string().email("Email không hợp lệ"),
  }),
  authorityInfo: z.object({
    authorityName: z.string().min(1, "Tên cơ quan là bắt buộc"),
    authorityCode: z.string().min(1, "Mã cơ quan là bắt buộc"),
  }),
  contractorInfo: z.object({
    contractorName: z.string().min(1, "Tên nhà thầu là bắt buộc"),
    contractorCode: z.string().min(1, "Mã nhà thầu là bắt buộc"),
  }),
  otherInfo: z.object({
    notes: z.string().optional(),
    attachments: z.array(z.string()).optional(),
  }),
})

export type FormData = z.infer<typeof formSchema> 