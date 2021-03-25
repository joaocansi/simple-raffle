import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRaffleTable1606442689009 implements MigrationInterface {
    name = 'CreateRaffleTable1606442689009'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "raffles" ("id" varchar PRIMARY KEY NOT NULL, "result" varchar NOT NULL, "min" integer NOT NULL, "max" integer NOT NULL, "updated_At" datetime NOT NULL DEFAULT (datetime('now')), "created_At" datetime NOT NULL DEFAULT (datetime('now')))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "raffles"`);
    }

}
