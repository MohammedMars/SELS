export class User {
    public id: number;
    public name: string;
    public loginName: string;
    public email: string;
    public mobileNumber: string;
    public password: string;

    constructor(){
        this.id = -1;
        this.name ='';
        this.loginName = '';
        this.email = '';
        this.mobileNumber = '';
        this.password = '';
    }
}