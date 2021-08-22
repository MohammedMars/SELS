export class User {
    public Id: number;
    public FullName: string;
    public Email: string;
    public MobileNumber: string;
    public Password: string;
    public TypeId: number;

    constructor(){
        this.Id = -1;
        this.FullName ='';
        this.Email = '';
        this.MobileNumber = '';
        this.Password = '';
        this.TypeId = -1;
    }
}