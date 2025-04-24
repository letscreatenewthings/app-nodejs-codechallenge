export interface Transaction {
    id: string;
    idDebit: string;
    idCredit: string;
    typeId: number;
    value: number;
    status: string;
    creationDate: Date;
    auditDate?: Date;
}