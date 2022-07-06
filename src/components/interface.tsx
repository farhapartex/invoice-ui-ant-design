export interface Invoice {
    id: string,
    invoiceno: string,
    fromname: string,
    fromemail: string,
    fromaddress: string,
    fromphone: string,
    frombusinessnumber: string,
    toname: string,
    toemail: string,
    toaddress: string,
    tophone: string,
}

export interface InvoiceTableData {
    key: string,
    description: string,
    rate: number,
    qty: number,
    amount?: number,
}

export interface InvoiceData {
    fromName: string,
    setFromName: React.Dispatch<React.SetStateAction<string>>,
    fromEmail: string,
    setFromEmail: React.Dispatch<React.SetStateAction<string>>,
    fromAddress: string,
    setFromAddress: React.Dispatch<React.SetStateAction<string>>,
    fromPhone: string,
    setFromPhone: React.Dispatch<React.SetStateAction<string>>,
    businessNumber: string,
    setBusinessNumber: React.Dispatch<React.SetStateAction<string>>,
    invoiceNumber: string,
    setInvoiceNumber: React.Dispatch<React.SetStateAction<string>>,
    toFullName: string,
    setToFullName: React.Dispatch<React.SetStateAction<string>>,
    toEmail: string,
    setToEmail: React.Dispatch<React.SetStateAction<string>>,
    toAddress: string,
    setToAddress: React.Dispatch<React.SetStateAction<string>>,
    toPhone: string,
    setToPhone: React.Dispatch<React.SetStateAction<string>>,
    invoiceTableData: InvoiceTableData[],
    setInvoiceTabledata: React.Dispatch<React.SetStateAction<InvoiceTableData[]>>,
}

export interface InvoiceCalculationData {
    subTotal: number,
    setSubTotal: React.Dispatch<React.SetStateAction<number>>,
    taxPercent: number,
    setTaxPercent: React.Dispatch<React.SetStateAction<number>>,
    taxAmount: number,
    setTaxAmount: React.Dispatch<React.SetStateAction<number>>,
    total: number,
    setTotal: React.Dispatch<React.SetStateAction<number>>,
}

