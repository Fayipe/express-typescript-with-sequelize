<<<<<<< HEAD
import { SchemaMap } from "@hapi/joi";
=======
import { SchemaMap } from "joi";
>>>>>>> e4605dc2bb5ec2fa8a8b4fd6a32b185a7876479d

export interface IBaseInterface extends SchemaMap {
    id?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
