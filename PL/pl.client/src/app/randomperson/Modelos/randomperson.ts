export interface RandomPerson{

    gender: string;
    name:{

        title: string;
        first: string;
        last: string;

    };
    location:{

        street:{

            number: number;
            name: string;

        };
        city: string;       
    };
    email: string;
    phone: string;
    cell: string;
    picture:{

        thumbnail: string;
        medium: string;
        large: string;

    };



}

