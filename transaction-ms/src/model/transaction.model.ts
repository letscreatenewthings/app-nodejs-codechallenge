export interface Transaction {
    id: String;
    idDebit: String;
    idCredit: String;
    typeId: BigInteger;
    value: Number;
    status: String;
    creationDate: Date;
    auditDate?: Date;
}