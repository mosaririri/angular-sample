export class Session{
    private login: boolean;
    private id: string;


    constructor(){
        this.login = false;
    }

    regist(id: string): Session {
       this.login = true; 
       this.id = id;
       return this;
    }

    reset(): Session {
        this.login = false;
        this.id = null;
        return this;
    }

    isLogin(): boolean {
        return this.login;
    }
}