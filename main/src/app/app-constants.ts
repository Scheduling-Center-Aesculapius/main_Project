export class AppConstants {
    // local onde está a api
    public static get baseServer(): string{
        return "http://localhost:8080/"
    }

    // montando o endereço básico para o logi
    public static get baseLogin(): string{
        return this.baseServer + "deus/login"
    }

    // 
    public static get baseUrl():string{
        return this.baseServer + "/deus/admins"
    }
}
