interface Tab <T>{
    id:number;
    position: number;
    data:any;
}

type numberTab = Tab <number>

type stringTab = Tab <string>


