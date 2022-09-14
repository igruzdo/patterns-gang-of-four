//Заместитель — это структурный паттерн проектирования, который позволяет подставлять вместо реальных объектов специальные объекты-заменители. Эти объекты перехватывают вызовы к оригинальному объекту, позволяя сделать что-то до или после передачи вызова оригиналу.


class CarAccess {
    public open(): void {
        console.log('Opening car door');
    }

    public close(): void {
        console.log('Closing the car door');
    }
}

//заместитель/прослойка с тем же интерфейсом, что и оригинальный класс

class SecuritySystem {
    public door: CarAccess;

    constructor(door: CarAccess) {
        this.door = door
    }

    public open(password: string): void {
        if(this.auth(password)) {
            this.door.open()
        } else {
            console.log('Access denied')
        }
    }

    public auth(password: string): boolean {
        return  password === "Ilon"
    }

    public close(): void {
        this.door.close()
    }
}